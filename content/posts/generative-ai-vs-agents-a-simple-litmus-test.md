---
title: "Generative AI vs. Agents: A Simple Litmus Test"
date: 2025-09-09
description: "A practical framework for deciding when a problem needs an agent versus a straightforward generative AI call."
tags: ["ai", "agents", "agentic-ai", "engineering-leadership"]
---

I'm writing this because I've made the mistake myself. I assumed everything should be an agent. If there was a problem to solve, my first instinct was, *let's build an agent for that.* It took running headfirst into the tradeoffs — performance, debugging headaches, and unnecessary complexity — for me to realize that not everything benefits from being *agentic.*

And honestly, this isn't a new struggle. We've seen the same pattern with AI more broadly: reaching for it to solve problems that are often handled better with simpler, more traditional approaches. Now, agents and agentic systems are following the same trajectory — being turned to as the "solution" even when they're not the right fit. Or at least not the immediate.

Here's how I've come to frame it more clearly:

- **Generative AI** is about *creation* — content, code, summaries, insights. Think: drafting a blog post, summarizing a meeting, translating docs, generating code snippets, or spinning up marketing copy.

- **Workflow AI** is about *orchestration* — letting AI take care of steps in a process. For example: auto-drafting sales emails, tagging and routing support tickets, pushing data summaries into dashboards, or shortlisting resumes.

- **Agentic AI** goes further into *autonomy* — systems that act, decide, and adapt on their own. Picture: a research assistant scanning papers and news, a travel concierge booking and adjusting plans, a DevOps bot fixing failing builds, or a procurement agent comparing suppliers and completing purchases.

That last step is powerful. Agents can coordinate across tools, persist state, and even surprise you with their ability to solve problems. But autonomy doesn't come for free. There are tradeoffs in cost, performance, reliability, and complexity. And sometimes the simple workflow or single model call is more than enough.

So here's the litmus test I find myself turning to:

> *Does giving this system autonomy create more value than the cost and complexity it adds?*

If the answer is "yes," an agent might be the right move. If not, a straightforward generative AI call will likely do the job better.

I'm still a huge fan of agents, but I've learned not everything needs to be one. Sometimes the smartest solution is the simplest.
