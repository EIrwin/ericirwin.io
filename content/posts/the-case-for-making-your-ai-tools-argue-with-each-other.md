---
title: "The Case for Making Your AI Tools Argue With Each Other"
date: 2026-01-25
description: "Instead of trusting a single LLM as the authority, force a second opinion every time — and use the disagreements to find where the real uncertainty lives."
tags: ["ai", "llm", "claude", "gemini", "engineering", "decision-making"]
---

We've gotten pretty comfortable trusting LLM output. The answers sound authoritative. The code compiles. The reasoning feels right. And then we ship it. But the most dangerous thing an AI can do isn't give you a wrong answer. The problem isn't "AI is sometimes wrong." It's that we keep asking one model to be the authority.

That's what pushed me into a little experiment: instead of using an LLM like an answer machine, what if I used it like a decision stress test?

So I built a tiny agent skill that forces a second opinion — every time.

## The Experiment: an Agent Skill That Manufactures a Second Opinion

I called the skill crosscheck (the name doesn't matter). It does three simple things:

1. Ask Model A the question
2. Ask Model B the same question independently (no peeking)
3. Compare them and output:
   - Agreements
   - Disagreements
   - A crux question (the one thing you need to clarify or verify)

That's it. No fancy voting. No "merge the best parts." Just: manufacture disagreement on purpose and see where the uncertainty actually lives.

Here's the shape of it (simplified):

```bash
# crosscheck (conceptual)

# 1) get Claude's answer
claude_out="$(claude "$PROMPT")"

# 2) get Gemini's answer (same prompt, no Claude context)
gemini_out="$(gemini "$PROMPT")"

# 3) synthesize: agreements, disagreements, crux questions
synthesize "$claude_out" "$gemini_out"
```

The key rule: Model B never sees Model A's output.

If you show it the first answer, you don't get a second opinion — you get an echo.

## What This Looks Like in Practice

Below is a manufactured-but-realistic example of how I run it. (I'm using terminal-style output because it makes the workflow feel concrete.)

### Example 1: A Real Architectural Decision (Cache Invalidation)

Let's say you're designing cache invalidation for user profile data across services. It's the classic "read constantly, write occasionally" problem, and subtle mistakes get expensive.

Here's what running the skill looks like:

```
I will use the crosscheck skill cross-validates architectural decisions across m
increase confidence. Let me first analyze the problem, then we'll use crosscheck

⏺ Bash(command -v gemini &> /dev/null && echo "INSTALLED" || echo "NOT_INSTALLED")
  ⎿  INSTALLED

⏺ Gemini CLI is ready. Running crosscheck workflow.

---
Step 1: Claude's Analysis

Question: What's a good caching + invalidation strategy for user profile data ac

Claude's Position:
- Prefer event-driven invalidation for correctness
- Publish "ProfileUpdated" events
- Consumers invalidate local caches immediately
- Add idempotency + ordering guards (version numbers / timestamps)
- Use TTL as a fallback safety net, not the primary control

Risks / gotchas:
- Message delivery guarantees (at-least-once => dedupe needed)
- Ordering (out-of-order updates => version checks)
- Operational overhead (broker, consumers, monitoring)

---
Step 2: Query Gemini

⏺ Bash(gemini "What's a good caching + invalidation strategy for user profile da...)
  ⎿  Gemini's Position:
     - Prefer TTL-based caching as the default strategy (simplicity wins)
     - Keep TTL short (e.g., 30–120s) for profile reads
     - Add manual busting only for critical flows (admin updates, security chang)
     - Avoid introducing messaging unless strict consistency is required

Risks / gotchas:
- Stale reads are inevitable
- TTL tuning is context-dependent
- Some consumers may need stricter guarantees

---
Crosscheck Results

Agreement (High Confidence)
- The right answer depends on "how stale is acceptable"
- Different consumers likely need different consistency guarantees
- TTL can be a safety net even in event-driven designs

Disagreement (Investigate Further)
┌──────────────────────────────┬───────────────────────────┬──────────────────────────┐
│            Topic             │          Claude           │         Gemini           │
├──────────────────────────────┼───────────────────────────┼──────────────────────────┤
│ Primary strategy             │ Event-driven first        │ TTL-based first          │
├──────────────────────────────┼───────────────────────────┼──────────────────────────┤
│ Operational complexity       │ Accept for correctness    │ Avoid until proven needed│
├──────────────────────────────┼───────────────────────────┼──────────────────────────┤
│ Safety mechanism             │ TTL as fallback           │ Manual bust for critical │
└──────────────────────────────┴───────────────────────────┴──────────────────────────┘

Unique Insights

Claude:
- Add versioning to avoid out-of-order event regressions
- Treat cache invalidation as a correctness system (not a performance tweak)

Gemini:
- Segment consumers: most can tolerate staleness; a few cannot
- Start simple and only pay the complexity cost when proven necessary

Confidence Assessment
Partial - Both are reasonable. The disagreement is driven by missing requirements.

Hallucination Risk
Low - This is an architecture tradeoff, not a factual claim. Risk is mostly "mis..."

---
Synthesized Recommendation

1) Classify consumers into tiers:
   - Tier A: Security / permissions / auth (needs immediate-ish consistency)
   - Tier B: UI display / personalization (staleness acceptable)
2) Use a hybrid:
   - TTL caching for Tier B (simple, cheap)
   - Event-driven invalidation for Tier A (correctness-critical)
3) Add a validation loop:
   - Instrument staleness impact + incidents
   - Promote consumers to Tier A only when justified
```

What I like about this format: the skill doesn't try to "pick a winner." It forces the crux question:

*Which consumers require near-real-time consistency?*

That's not a model question. That's a requirements question. And it's exactly the kind of thing that's easy to hand-wave until it bites you.

## The Sneaky Failure Mode: Hallucinated Agreement

Disagreement is useful. It gives you a handle. The scarier case is when both models agree — and they're still wrong — because they share the same blind spot or they're both guessing confidently.

Here's a deliberately small example (because it's easy to verify). The point is the pattern.

### Example 2: Two Models Agree... and It's Still False

```
❯ /crosscheck "In Python, does list.sort() return a new sorted list?"

---
Step 1: Claude's Answer
- Yes, list.sort() returns a sorted list (and also sorts in-place).

---
Step 2: Gemini's Answer
- Yes, list.sort() returns the sorted list.

---
Crosscheck Results

Agreement (High Confidence)
- Both models say list.sort() returns a sorted list

Disagreement
- None

Confidence Assessment
Partial - Agreement exists, but neither provided evidence and this is trivially...

Hallucination Risk
High - Both models agreed without citing docs and the claim is easy to verify lo...
```

And then you verify in 10 seconds:

```python
xs = [3, 1, 2]
ys = xs.sort()
print(xs)  # [1, 2, 3]
print(ys)  # None
```

That's hallucinated agreement in miniature.

Two models can confidently converge on the same wrong thing.

So the rule I follow is simple:

*Agreement without evidence is not "done." — It's just "maybe."*

## The Real Output Isn't Answers — It's Better Questions

This is the part that surprised me: the most valuable output isn't the synthesis. It's the crux question that drops out of the disagreement.

Instead of "who's right," you get:

- "What constraint did I forget to specify?"
- "What assumption am I making?"
- "What can I measure to decide?"

That's where you stop using AI as an oracle and start using it like a reasoning partner.

## The Anti-Patterns

A few things that feel tempting but don't actually help:

| Anti-Pattern | Why it's harmful |
|---|---|
| Frankenstein stitching | You get a mushy, repetitive answer with no coherent perspective |
| Majority rules voting | Two models can share the same hallucination |
| Papering over disagreement | You hide uncertainty (the most valuable signal) |

## When This Is Worth Doing

Not every prompt deserves this overhead. It might make sense however when being wrong is expensive:

- Architectural decisions that are hard to unwind
- Complex logic where subtle bugs hide
- Technical claims that could steer product direction

## The Takeaway

When the stakes are high, I don't want the model to sound confident. I want it to collide with another model and show me where the seams are. Because the moment two AIs confidently agree isn't when you can relax. It's when you should ask: "Cool. Where's the evidence?"

*AI Transparency Note: I used AI to help tighten phrasing and structure, but the core idea and workflow are mine. I'm sharing that because I think transparency matters — readers deserve to know how the thing they're reading got made.*
