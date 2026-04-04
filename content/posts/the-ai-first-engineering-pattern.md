---
title: "The AI-First Engineering Pattern: How Persistent Context Turns Claude into a True Teammate"
date: 2025-10-25
description: "A repeatable pattern for building AI-first engineering environments using persistent memory, structured repos, and MCP integrations."
tags: ["ai", "claude-code", "mcp", "developer-experience", "engineering"]
---

## Introduction

Building a platform like Swoop means juggling a mobile app, dashboards, APIs, infrastructure, and — more recently — AI agents. Over time, I built a workflow using Claude Code that treats all of it as one intelligent workspace: a single place where code, data, operations, and testing are deeply connected.

The key insight: AI becomes genuinely useful when it shares your mental model of the system.

When architecture, tooling, and context are explicit, Claude stops acting like autocomplete and starts reasoning like a teammate who understands your entire environment. This isn't about clever prompts — it's about teaching your workspace to think in context.

## Back to a "Monorepo" Architecture

At the foundation is a symlinked monorepo that ties several independent repositories into one workspace:

```
swoopspace/
├── swoop-api/     → /.../repos/swoop-api
├── swoop-ui/      → /.../repos/swoop-ui
├── swoop/         → /.../repos/swoop
└── swoop-agents/  → /.../repos/swoop-agents
```

Claude follows symlinks naturally — it can read, search, and modify files across all linked repos as if they were one unified system.

That structure makes cross-stack changes straightforward while maintaining independent version control and deployment boundaries.

It is important to note there are other ways to do this by adding projects to a workspace, I simply chose to use symlinks.

### Why It Matters

In traditional multi-repo setups, context is fragmented. When you ask an AI to "update the user profile feature," it can't see that it involves:

- a GraphQL schema change in the API
- regenerated Relay artifacts in the web UI
- React Native screens consuming that data
- background jobs that sync profile updates

In the symlinked workspace, Claude can:

- trace dependencies across repos
- verify schema consistency between API and UI
- propagate type changes automatically
- reason about system impact before editing

This unified structure forms the base layer of contextual intelligence. On top of it sit several specialized MCP servers that extend Claude's perception into live systems.

## Contextual MCP Integrations

While most AI tools stop at the file system, Claude's environment extends into the broader ecosystem through MCP servers. Each one gives it a different sensory input — code, data, infrastructure, and search — forming a kind of multi-modal engineering assistant that doesn't have to be explicitly told how to think about these domains.

### Postgres MCP Server

Provides direct SQL access to live schemas, query plans, and data inspection. Claude can validate migrations, analyze slow queries, or verify constraints in real time without switching tools. When a feature touches persistent data, it automatically checks schema health and constraint integrity before proposing changes.

### Kubernetes MCP

Lets Claude understand how services are deployed and interact in production. When modifying configuration or building new services, it references real pod specs, secrets, and deployment manifests to reason about scheduling, scaling, or network constraints — turning operational awareness into a native skill rather than an external lookup.

### iOS Simulator MCP

Enables Claude to build, run, and observe iOS app behavior inside a local simulator context. When adjusting a React Native screen or testing a mobile feature, it doesn't need you to say "run the app." It knows to open the simulator, check interactions, and validate layout or performance automatically.

### Exa Search MCP

Integrates semantic and web-scale search capabilities directly into the development loop. Claude can gather current context — framework documentation, API references, or dependency updates — on its own, grounding its reasoning in fresh information without you having to copy-paste URLs.

### Context7 MCP

Provides up-to-date documentation and knowledge related to libraries and dependencies across the platform to ensure it is not hallucinating on outdated information or APIs.

### Grafana MCP

Serves as Claude's observability window into live systems. Instead of treating dashboards and metrics as external references, the Grafana MCP makes them part of Claude's working context. It can surface alerts, analyze trends, or validate hypotheses directly from your telemetry data.

### Embedded Intelligence, Not Explicit Commands

Each of these integrations is deeply ingrained into Claude's mental model of the workspace. Instead of prompting it with "check the database" or "run in simulator," you can simply ask, "Does the loyalty flow persist properly?" and it will know which tools to use.

This creates a sense of *ambient intelligence* — a development environment that feels aware of its own systems.

## Persistent Project Memory

Most AI tools forget everything between sessions. Developers waste time re-explaining architecture and conventions. The Memory Bank MCP fixes this by giving Claude a persistent layer of project knowledge that it reads and updates automatically.

Each service has its own folder — `swoop/development-patterns.md`, `swoop/integration-notes.md`, and so on. At the start of a session, Claude reads the relevant files for context. As you work, it records new patterns or architectural decisions back into the memory bank, so knowledge compounds instead of resets.

Before creating a resolver, Claude checks logging and caching conventions. When editing mobile code, it reads existing integration notes to stay aligned with established patterns. The result: living documentation that's always accurate and self-maintaining.

## Data-Aware Reasoning with Postgres MCP

When paired with the Postgres MCP, memory becomes data-driven. Claude doesn't speculate about your database — it queries it.

Example: When adding a loyalty points feature, Claude automatically:

1. Queries the schema to discover existing tables and constraints
2. Detects that `users.metadata` is a JSONB field
3. Proposes embedding `loyalty_points` there initially
4. Generates a migration consistent with production data
5. Runs test queries to validate it
6. Updates the documentation with the actual column types

This combination — memory for patterns + Postgres for truth — lets Claude reason with real system data, not assumptions.

## Guardrails and Standards

Each repo includes a `CLAUDE.md` file — a short, strict definition of project rules and rationale. It defines coding standards, logging patterns, error handling, and testing expectations. These files aren't reminders; they're the structural DNA that Claude uses to enforce consistency from the start.

```
GraphQL Resolver Logging Pattern (Required)
- Use swooplog.WithStandardFields() for all logs
- Include Component, Operation, and Status
- Return safe defaults on error
```

When Claude writes or refactors code, it follows these automatically. Because the files also explain *why* certain patterns exist (for example, caching behavior or retry logic), Claude doesn't just follow syntax — it understands architectural reasoning.

## Structuring Large Features

Complex features are broken down with Claude's PRD Skill — a planning system that turns vague goals into sequenced deliverables. Ask it to "add loyalty points across all platforms," and it generates a complete plan:

1. Database and API changes
2. Dashboard UI integration
3. Mobile app updates
4. Background jobs for calculation and expiry
5. Documentation and test suites

It executes phase by phase, verifying each part before moving on. The reasoning and decisions behind every deliverable are captured in the memory bank, forming an evolving knowledge graph that anyone on the team can follow.

## The Developer Experience

After a while, you stop feeling like you're prompting an AI. You start feeling like you're working with an engineer who already knows the stack. Claude understands where code lives, what conventions apply, how data flows, and when to inspect logs or run tests in the iOS simulator. You say "Add a points banner to the mobile app," and it knows that means touching React Native code, verifying styles on iOS, updating a GraphQL query, and checking for cache consistency.

It's the difference between giving instructions and having a conversation with context.

## Where Time Disappears

- No repeating architecture explanations every session
- No tool-switching for schema or deployment validation
- No context resets when moving from backend to frontend
- No missing documentation or inconsistent logging

A feature that once took three days now fits into one. Not because Claude types faster, but because the environment itself carries knowledge forward.

## Where Quality Improves

- Logging and tracing stay consistent across services
- Cache invalidation follows the same pattern everywhere
- Documentation is written alongside the code that defines it
- Tests reflect real production behavior through MCP insights

Each integration reinforces the others — memory builds consistency, Postgres ensures truth, Kubernetes keeps it operationally aware, and Exa Search fills knowledge gaps on the fly.

## Limitations and Practice

This system isn't magic. Token limits still apply. Critical paths like authentication still need human review. And the initial investment — building the memory bank, configuring MCPs, writing `CLAUDE.md` files — takes time.

But once it's in place, the payoff is exponential. Each session starts smarter than the last, and each project inherits the intelligence of the ones before it.

## Real-World Impact

*Before:* endless re-explanation, missing documentation, inconsistent behavior across repos.

*After:* a self-aware development environment that manages context across code, data, and infrastructure.

When we built a Menu Image Generation, Claude used the entire stack of MCPs:

- Queried schema and data via Postgres MCP and MCP Toolbox
- Pulled SDK references through Exa Search
- Ran simulated mobile UI through iOS MCP
- Deployed API Updates and verified through Kubernetes MCP
- Logged results and decisions in the Memory Bank

No cleanup and no context drift, just working software.

## What I've Learned

- **Persistent context beats repetition.** Knowledge compounds over sessions.
- **Structure enables autonomy.** Conventions and context make AI more reliable.
- **Ground truth matters.** Utilizing the right MCPs anchor Claude in reality.
- **Distributed intelligence works.** Providing the right tools and constraints allow Claude to choose how to think.
- **Smaller steps win.** PRD-based sequencing avoids chaos and increases trust.

It feels like pair programming with a teammate who understands your system from API to deployment, from schema to simulator.

## This Is a Pattern, Not a Product

Nothing here is tied to one tech stack. It's a repeatable AI-first engineering pattern:

1. Structure your repos so AI can see relationships.
2. Persist knowledge through a memory layer.
3. Extend awareness through domain-specific MCPs (Postgres, Kubernetes, Simulator, Search).
4. Utilize constructs like memory and subagents to determine which tools to use.
5. Encode rules and rationale in versioned `CLAUDE.md` files.
6. Plan large efforts as sequenced PRDs, not monoliths.

The tools may change, but the principle won't: Give AI the same mental model you have, make that knowledge persistent, and embed intelligence everywhere it needs to act. That's when AI stops being a tool — and becomes part of your engineering muscle memory.

## Tools Mentioned

- **Claude Code** — AI development environment
- **Postgres MCP Server** — Live database schema and query analysis
- **allPepper Memory Bank MCP** — Persistent project knowledge
- **MCP Toolbox** — Local data validation and telemetry
- **Kubernetes MCP** — Deployment and operational awareness
- **iOS Simulator MCP** — On-device validation for mobile flows
- **Exa Search MCP** — Semantic and web-scale contextual retrieval
- **Context7 MCP** — Context routing and reasoning across tools
- **Custom PRD Skill** — Structured feature planning

---

*AI Transparency Note: I wrote this article with assistance from AI to support editing and idea generation, while the core writing and arguments remain my own. I believe sharing this is important because transparency helps set clear expectations, preserves trust with readers, and makes it easier to understand how AI is influencing the work we consume.*
