---
title: "System Models in Backstage"
date: 2022-10-13
description: "Why you might want to own your System Model outside of Backstage, and how we built a discovery and aggregation layer at Quantum Metric."
tags: ["backstage", "platform-engineering", "developer-experience", "devops", "system-model"]
---

At Quantum Metric, our teams committed to leveraging Backstage within our Developer Experience Platform (or DXP as we refer to it) following a brief but convincing POC. We felt confident in it becoming a critical component within our Platform moving forward.

We wanted to share our experiences in the early stages of integrating Backstage as well as give some examples for why we felt that it was important to build a strong foundation to support our System Model.

To learn more about Backstage and the rapidly growing community behind it, visit the [Backstage Community Page](https://backstage.io).

## What is a System Model?

The following explanation of System Model originated from this RFC:

> We believe that a strong shared understanding and terminology around systems, software, and resources leads to a better Backstage experience.

We couldn't possibly disagree with this definition; however, we felt the benefit of a System Model extends well beyond Backstage and we wanted this to be reflected in the foundation of our DXP.

So the generalized definition we prefer is:

> The logical representation of entities and entity relationships that comprise a system.

Fortunately, we had no reason to invent our own and were able to lean on the same System Model that is defined and used within Backstage by Spotify.

While we preferred to use this, it was important that it was native to our DXP and not coupled to Backstage — so we built a service that is responsible for the discovery and aggregation of entities within our System Model.

## Fester — Discovery and Aggregation

One of the unofficial design decisions that manifested in early discussions was decentralization. More specifically — we wanted to avoid centralizing and colocating artifacts of our System Model due to the risk of it becoming a bottleneck.

So we built a service called Fester (short for Manifester), that is responsible for the discovery and aggregation of entities within our System Model through the use of standardized `qm.yaml` manifests located in our GitLab projects.

### High-Level Architecture

- **Scrapers** scrape our GitLab projects looking for `qm.yaml` manifest files present in the root of the project.
- **Processors** take in aggregated manifest data (e.g. `[]*manifest.Manifest`) and are responsible for returning one or more artifacts for further processing or exporting.
- **Exporters** are responsible for writing artifacts to a designated store. In our case — we are exporting to Google Cloud Storage.
- **Plugins** such as the Backstage Catalog Plugin are able to consume the artifacts directly from GCS (and even query a Fester API).

An additional design goal for Fester was ensuring that it was extensible. This would allow additional teams to tap into its capabilities for processing the data as needed in the future.

Here is a simple example of one of our `qm.yaml` manifests:

```yaml
version: 1
service:
  name: Backstage
  lifecycle: alpha
  type: service
  tier: tier_3
  product: Platform
  owner:
    team: developer-experience
    channel: '#delivery-engineering'
    url: 'https://path/to/team'
  language: typescript
  description: DXP UI based on Backstage
  system: dxp
  tags:
    - dxp
  aliases:
    - backstage_service
  repositories:
    - name: backstage
      path: 'https://path/to/repo/backstage'
      provider: gitlab
      display_name: Backstage
  tools:
    - name: Spinnaker
      category: deploy
      url: 'https://path/to/pipelines'
    - name: Grafana
      category: dashboard
      url: 'https://path/to/pipelines'
```

## Using our System Model

We threw around a lot of ambitious ideas about how we would consume our System Model outside of our Software Catalog. However, one of the more interesting use cases was validated in our first ever Quantum Metric Entanglement Hackathon when we implemented a service called Ox (short for Operational Excellence) that continuously queried our System Model to run fact collection and scoring. Ox was heavily inspired by a post we came across from Monzo, *How We've Started to Measure Software Excellence*.

### High-Level Architecture

- **Ox** continuously queries Fester to retrieve data from our System Model as input to a process called *fact collection* where we collect one or more facts or quantitative values related to a service.
- When fact collection is finished, the result is passed through a **scoring algorithm** to get an Operational Excellence Score, or "Ox Score" which can be used as a proxy for quantifying best practices and production readiness.
- When Ox determines that there is a known deficiency it can automatically assign a **remediation action** in order to improve their scores with minimal effort or intervention.

While not yet operationalized, Ox provided great validation for our decision to externalize our System Model and left us feeling confident that it will meet our needs moving forward.

## What's Next?

Ox is one of many use cases that shows why you might find it valuable to allow your System Model to be easily consumable outside of Backstage. This is why we committed to implementing this early in our Backstage journey.

Looking to the future, we expect to continue to iterate against the current implementation as we drive adoption towards our DXP.

Some potential future initiatives that revolve around using and extending our System Model:

- Reflect subsets of documentation types such as Guides, Playbooks/Runbooks and Golden Paths within Backstage.
- Operationalize Ox in order to continuously measure and improve Operational Excellence at Quantum Metric.
- Automate Snyk project registration, reports and notifications for service owners.
- Improve incident management effectiveness by making System Model data easily accessible to our incident response teams.

Our teams have enjoyed working with Backstage and are excited at the momentum behind the project since it joined the Cloud Native Computing Foundation.

We will continue to post about our journey and plan to share our experiences relating to:

- Documentation and Discoverability
- Software Templating
- Plugin Development
