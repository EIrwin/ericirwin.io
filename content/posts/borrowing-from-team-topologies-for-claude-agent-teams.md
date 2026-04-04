---
title: "Borrowing from Team Topologies to Make Sense of Claude Agent Teams"
date: 2025-06-01
description: "Applying Team Topologies mental models to Claude Code's new agent teams feature — eight configurations for structuring multi-agent work."
tags: ["ai", "agent-teams", "team-topologies", "claude-code", "engineering-leadership"]
---

There's a habit I can't turn off. Whenever I'm working on something — whether it's organizing a project, structuring a team, or just figuring out how to approach a problem — my brain immediately goes to: *what's the optimal shape for this?* What information needs to flow, and between whom? Where are the boundaries?

It's the kind of thinking that Matthew Skelton and Manuel Pais gave a name and a framework to with *Team Topologies*. If you haven't read it, the short version is that it offers a set of mental models for how engineering teams should be structured — and not around org charts, but around the flow of value. How teams communicate, where cognitive load sits, what interaction modes make sense for a given type of work. It fundamentally changed how I think about engineering organizations, and honestly, it's one of those frameworks that keeps paying dividends years after you first encounter it.

I bring this up because my brain immediately reached for the same mental models as I was experimenting with Agent Teams.

## Agent teams in Claude Code

Anthropic just shipped Agent Teams in Claude Code. The concept is straightforward on the surface: instead of one Claude instance working through a problem, you can spawn multiple instances that work in parallel on a shared task list. Each "teammate" gets its own context window, its own scope of work, and communicates through a shared coordination layer. The lead orchestrates, workers execute, and the whole thing runs concurrently.

It's new. Like, days-old new. And the moment I saw it, I wanted to start exploring because I find this kind of thing genuinely fun to dig into. And almost immediately, I noticed something: the questions I was asking myself about how to configure these agent teams were the same questions I ask when thinking about human team structures.

How independent should these workers be? What's the interaction mode? Do they need to collaborate, or can they fan out and reconverge? Where are the handoff boundaries? What information does each worker need up front, and what needs to flow back?

It was Team Topologies thinking, applied to a completely different kind of team.

## The mental model impulse

Here's the thing about working with agent teams, or really any multi-agent system: the configuration space is wide open. You can just throw a bunch of agents at a problem and see what happens. But if you've spent any time thinking about how teams deliver value, you know that "throw people at it" is usually the worst strategy. Shape matters. Communication pathways matter. Cognitive load on each worker matters.

So I started doing what I always do: looking for patterns. Not "the right answer," but a starting framework, so that when I sit down to use agent teams for a given type of work, I have a heuristic to reach for rather than starting from scratch every time.

Before I walk through what I landed on, a caveat: agent teams are days old, not months. I haven't pressure-tested these across dozens of projects. These are starting hypotheses — a structured way to approach something new — but not a finished framework. Some will hold up. Some will need to evolve.

I ended up mapping out eight configurations so far. Let me walk through each one.

## Parallel Explorers

When the work is about understanding something — like mapping a codebase, tracing how a system works — fanning out 2–3 workers with distinct investigation scopes and synthesizing their findings is dramatically faster than doing it sequentially. Each explorer digs deep without polluting anyone else's context. The key is giving each one a clear boundary and a structured output format.

**To try it:**

```
Create an agent team to map how <system> works.
Spawn 3 teammates:
- Explorer A: trace the request flow end-to-end
- Explorer B: identify data model + persistence
- Explorer C: find known pitfalls/tests/edge cases
Have each deliver: 10 bullets + the 8 most important files
```

## Review Board

For code review, spawning separate reviewers with different lenses — like security, performance, test coverage — and having them work in parallel catches things a single sequential review misses. This one feels the most directly analogous to how we'd structure a human review process for high-stakes changes.

**To try it:**

```
Create an agent team to review PR #___.
Spawn three reviewers:
- Security implications
- Performance impact
- Test coverage & correctness
Have them each review and report findings with markdown.
Then synthesize into one review comment.
```

## Competing Hypotheses

For ambiguous bugs, having multiple investigators each pursue a different theory — and actively try to disprove each other — is a powerful way to avoid the anchoring bias that happens when one agent (or one person) locks onto a hypothesis too early. The debate between investigators is the mechanism that makes this work; it's not just parallel investigation, it's adversarial validation.

**To try it:**

```
Users report: "<symptom>".
Spawn 5 teammates to investigate different hypotheses.
Have them talk to each other to disprove each other.
End with: (1) consensus root cause, (2) reproduction steps
```

## Feature Pod

For features spanning frontend, backend, and tests, giving each layer its own owner with a shared contract maps cleanly onto how we'd structure delivery. This is the one that feels most like a "stream-aligned team" in Team Topologies terms — organized around the flow of work, with clear interfaces between layers. The critical first step is defining the contract before anyone starts coding.

**To try it:**

```
Create an agent team to implement <feature>.
Spawn:
- Frontend teammate: UI + state + integration points
- Backend teammate: API + data model + validation
- QA teammate: tests, edge cases, verification steps
First task: define the contract (API, payloads, types).
Then parallelize implementation by layer and reconverge.
```

## Risky Refactor

This one separates planning from execution, and gates the transition with explicit approval. An architect produces a plan (with tests, rollback strategy, and risk analysis), the lead reviews it, and only then does an implementer execute while a reviewer validates. It's sequential by design, because the whole point is control.

**To try it:**

```
Spawn an architect teammate to refactor <module>.
Require plan approval before they make any changes.
Approval criteria: include tests, rollback plan, risk analysis.
After approval, spawn an implementer + a reviewer.
```

## Orchestrator-Only

The lead coordinates and delegates exclusively — it never touches code. This is useful when the coordination complexity is high enough that the lead's full attention should be on decomposition, dependency management, and synthesis rather than implementation. Teammates self-claim tasks from a shared queue and report status back.

**To try it:**

```
Create an agent team for <goal>. I want the lead to only coordinate.
Break work into 5–6 tasks per teammate with clear acceptance criteria.
Have teammates self-claim unblocked tasks; lead manages dependencies.
```

## Quality-Gated

This is the odd one out because it's not really a topology on its own — it's a layer you add to any of the others. Think of it like adding pre-commit hooks to your git workflow. You define quality gates (tests pass, lint clean, changelog entry) and use hooks to prevent task completion until the gates pass. If they don't, the teammate gets feedback and keeps working.

**To try it:**

```
Create an agent team to deliver <goal>.
We have quality gates: tests must pass, lint clean, changelog updated.
Use hooks to prevent task completion until gates pass.
```

## Task Queue

When you have a backlog of many small, independent tasks, this is the shape. Workers self-claim the next unblocked item after finishing one. It's the highest parallelism pattern and the highest cost — so it's best suited for work that genuinely decomposes into independent chunks.

**To try it:**

```
Create an agent team to process this backlog of tasks:
1) ...
2) ...
3) ...
Break them into small, independent items with clear done criteria.
Let teammates self-claim the next unblocked task after completing one.
I want brief status updates per completed task + a final summary.
```

## A practical note on prompts

One thing I've noticed already: the specificity of your spawn prompt matters enormously. Teammates start with a blank context window — no conversation history, no shared understanding. A vague prompt wastes tokens while the agent figures out what you actually want.

**Vague:** "Spawn a teammate to help with the auth system."

**Specific:** "Spawn a teammate to trace the login flow from POST /auth/login through token generation, list all files involved, identify where rate limiting is applied, and deliver a 10-bullet summary with key file paths."

One more thing worth knowing: agent teams use roughly 7x more tokens than single-agent work. That's the cost of parallelism. You mitigate it with small teams, focused prompts, and shutting down teammates as soon as their work is done.

## Where this goes

What I find myself most curious about is where this goes next. Not just agent teams as a feature, but the broader question of how we think about orchestrating work across humans and AI agents as collaborators — not just as individual pairs, but as teams with real topology. The interaction modes between agents and people. How information flows across those boundaries.

*Team Topologies* gave us a vocabulary for understanding how human organizations deliver value. I have a feeling we're going to need an equivalent vocabulary for hybrid organizations — ones where some of the "teammates" are agents. I don't know what that vocabulary looks like yet. But I think the instincts we've built from frameworks like Team Topologies are a genuinely useful place to start.

If you're experimenting with this stuff too, I'd love to hear what you're finding. And if you haven't picked up *Team Topologies* by Matthew Skelton and Manuel Pais — you should go read it. Not for the agent stuff, just because it'll permanently upgrade how you think about how work flows through teams. The agent applications are a bonus.

I'm genuinely excited to see how this evolves.
