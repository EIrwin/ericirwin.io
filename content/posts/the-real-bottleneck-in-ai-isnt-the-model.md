---
title: "The Real Bottleneck in AI Isn't the Model — It's Our Communication"
date: 2025-11-27
description: "Why the biggest gap in AI productivity isn't model capability but how effectively we communicate our intent."
tags: ["ai", "generative-ai-tools", "agents", "claude", "context-engineering"]
---

We're living through one of the fastest paradigm shifts in modern computing. Tools are getting better, models are getting smarter, and the ecosystem is moving from prompt engineering toward something far more powerful: context engineering.

But even as the tooling evolves quickly it is clear that some people get extraordinary results out of AI tools... and others get diminishing returns.

And when you peel the layers back, the reason is surprisingly human. It's almost always about how effectively they communicate with the machine and how unnatural that still feels for most of us.

## The Human Problem: We Speak Like Humans, Not Like Systems

Human communication is full of shortcuts. We rely on shared implicit understanding — things we never have to say out loud. A sentence like "Can you handle this?" often works because the receiver can fill in the blanks effortlessly.

Models, on the other hand, receives only what we actually write. It has no access to the subtext, the gestures, the unfinished thoughts, the assumptions. And so people lean too far in one direction or another — saying almost nothing and expecting inference, or pouring out information without shaping what any of it means.

It's not a lack of intelligence. It's simply that explicit communication is a foreign muscle.

## A Missing Piece in the Workflow

We spend enormous energy improving models. We spend almost none helping people express their intent more clearly.

That imbalance continues to bother me. Not because humans "should" learn to write better prompts, but because the friction we feel with AI is often just our own implicit thinking colliding with a medium that has no intuition.

So I started wondering what it would look like if the tools helped bridge that gap — not by generating prompts for us, but by revealing the parts we don't realize we skip over.

## A Small Experiment

As a small personal experiment, I built a Claude plugin that behaves like a quiet co-pilot, not to solve prompting, but simply to show me what my prompts actually look like when stripped of all the assumptions in my head.

It continuously evaluates whatever I'm submitting, highlights where I've left things vague, and offers gentle suggestions that nudge me toward more structure.

If I type something lazy like: "Document this project."

It responds with a structured evaluation — not because the score matters, but because it exposes just how much meaning I failed to express explicitly:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 PROMPT ANALYSIS - Overall Score: 22/100
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Dimension Breakdown:

┌──────────────────┬────────┬──────────┬────────────────────┐
│ Dimension        │ Score  │ Weight   │ Progress           │
├──────────────────┼────────┼──────────┼────────────────────┤
│ clarity          │ 30/100 │    20%   │ ██████░░░░░░░░░░░░ │
│ context          │ 10/100 │    20%   │ ██░░░░░░░░░░░░░░░░ │
│ structure        │  5/100 │    20%   │ █░░░░░░░░░░░░░░░░░ │
│ specificity      │ 15/100 │    15%   │ ███░░░░░░░░░░░░░░░ │
│ tool_awareness   │ 20/100 │    10%   │ ████░░░░░░░░░░░░░░ │
│ safety           │100/100 │    10%   │ ██████████████████ │
│ length_hygiene   │ 10/100 │     5%   │ ██░░░░░░░░░░░░░░░░ │
└──────────────────┴────────┴──────────┴────────────────────┘

Top Suggestions for Improvement:

1. Add specific documentation scope: What exactly should be documented?
   The entire project? A specific feature? API endpoints? Configuration?
   Installation?
2. Specify target audience: Who is this documentation for? Developers?
   End users? Contributors? Marketplace reviewers?
3. Include file/directory context: Which files or sections need
   documentation? (e.g., README.md, inline code comments, API docs)
4. Define documentation format: Technical docs? User guide? API
   reference? Inline comments? All of the above?
5. Add acceptance criteria: What makes the documentation "complete"?
   What sections must be included?

Detailed Feedback:

Clarity (30/100): The word "Document" provides minimal clarity. It has a
goal (documentation) but lacks critical details about scope, target, and
format. Consider: "Document this project's installation process and API
endpoints for new contributors" or "Add inline comments to all public
functions in src/".

Context (10/100): No context provided. What project? Which parts need
documentation? What documentation already exists? What's the current
state? Include file paths like README.md, docs/, or specific modules.

Structure (5/100): Single word with no structure. Even brief prompts
benefit from basic organization:
  Goal: Document the project
  Scope: [Installation, API, Contributing]
  Target: [Developers, users]

Specificity (15/100): Extremely vague. No mention of:
  - Which project/codebase
  - Documentation format (markdown, JSDoc, docstrings, etc.)
  - Coverage requirements (all functions? just public APIs?)
  - Style guide or template to follow

Tool Awareness (20/100): "Document" could mean many things Claude Code
can or cannot do. Be explicit: "Update README.md with installation steps"
vs "Generate and deploy documentation website" (which Claude Code cannot
do).

Length Hygiene (10/100): At 8 characters, this is far too brief to convey
meaningful requirements. Aim for at least 50-100 characters with basic
context.
```

While this was a simple example, it does a good job reflecting how we take for granted the importance of structure and intent as its perceived by models.

Even as a one-off experiment, it revealed something interesting: when you're shown this kind of feedback repeatedly, your prompting habits start to shift without conscious effort.

You naturally begin accounting for audience, scope, format, and constraints — not because you're trying to "be a better prompter," but because the reflection makes your own intent clearer to *you*.

Whether this kind of tool ends up mattering in the long run is anyone's guess. It's likely the models will close this gap on their own. But it's also possible that the ecosystem will move toward lightweight, ambient guidance like this, small layers that help humans articulate intent, or quietly supplement what we forget to specify.

Either way, the quick experiment made one thing very clear to me: when the machine reflects our ambiguity back to us, we start communicating differently.

## Where This Might Be Going

We're still early in understanding what it means to collaborate with systems that can reason but can't infer. Somewhere between our shorthand and the model's literalness is an emerging way of working that none of us have fully named yet.

Whether the future leans toward tools that quietly guide our intent or models that fill in the missing context on their own, something foundational is shifting. We're learning to make our thinking more legible, not for machines, but for ourselves.

How that evolves will depend as much on human habits as on model capabilities. But the early signs are fascinating, and I have a feeling the solutions will come from the small, practical insights people stumble upon long before they come from formal frameworks.

*I'd love to hear how this is showing up in your own work or thinking.*
