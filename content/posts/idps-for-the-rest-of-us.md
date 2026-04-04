---
title: "IDPs For The Rest of Us: Maximizing Impact When You Aren't a Tech Giant"
date: 2024-11-17
description: "How Quantum Metric maximized the value of its Internal Developer Platform using Backstage, with data-driven insights from BackstageCon 2024."
tags: ["internal-developer-platform", "backstage", "platform-engineering", "kubecon", "kubernetes"]
---

At BackstageCon 2024, I was fortunate to have the opportunity to share how Quantum Metric has maximized the value of its Internal Developer Platform (IDP) by leveraging Backstage. For those who couldn't attend, I've consolidated the key insights here in written format.

The presentation can be viewed [here](https://www.youtube.com/results?search_query=backstagecon+2024+quantum+metric+eric+irwin).

We will cover:

- Our journey in rethinking platform strategy and selecting Backstage as our IDP.
- An overview of custom plugins we've built, highlighting our approach to defining key metrics and validating their impact.
- Key themes and takeaways that have been instrumental for our team and can provide value at any stage of your IDP journey.

## Rethinking our Platform Strategy

Quantum Metric enables organizations to understand and prioritize what matters most by capturing real-time customer insights. With a rapidly growing product and customer base, maintaining efficiency and scalability while staying lean has always been a top priority.

By 2020, as platform complexity increased, we recognized the need to evolve our approach to sustain our velocity. This led us towards a self-service platform strategy, leveraging data to validate our decisions and refine our focus. Initially, there was some hesitation about adopting new tools, but a quick proof of concept demonstrated Backstage's potential as the connective tissue within our current platform.

## Building a Roadmap Aligned to Tangible Outcomes

*Confidence in the roadmap starts with anchoring on Feedback, Metrics, and Observations*

With a strong foundation in place, we were able to craft a roadmap aligned with our strategy focused on addressing real challenges. While our priorities didn't necessarily change, Backstage enabled us to tackle solutions differently, delivering tangible value quickly.

Dogfooding has always been a core part of our culture. From the start, we saw an opportunity to leverage our own product within our Backstage instance. This allowed us to collect powerful metrics and events, providing valuable insights into how our teams were engaging with the platform. We achieved this through the Backstage Plugin Analytics API and eventually published our solution to the plugin marketplace.

## Feature Highlights Reflecting Our Approach

Here's a few examples of how we applied a feedback-informed, data-driven cycle to measure and validate the impact of each feature we built.

### Documentation: Improving Quality and Discoverability

Documentation had become a pain point, spread across multiple systems and often outdated. Backstage's out-of-the-box capabilities allowed us to centralize documentation, making it searchable and tying it to clear owners. We automated publishing across repositories and introduced direct links to frequently accessed docs. Improved search capabilities helped teams find what they needed -- even when they weren't sure what to look for.

To validate impact, we tracked:

- **Usage frequency:** Are teams actually using the documentation?
- **Search behavior:** Are common searches returning results?
- **Interaction patterns:** What content gets copied frequently?

These insights drove further improvements, ensuring documentation quality and accessibility.

### Ephemeral Environments: Enabling Self-Service

Before Backstage, we automated environment creation from Merge Requests to reduce time lost deploying and validating changes in shared environments. However, rising demand for custom configurations and stability issues led us to develop a self-service plugin.

To validate impact we tracked:

- **Configuration time:** Are users spending too much time setting up?
- **Velocity trends:** Are we reducing disruptions and context switching?
- **Team usage:** Who benefits most from these environments?

Today, we manage 50-60 active environments at any time, with up to 100 created weekly.

### Feature Flags: Standardizing and Increasing Adoption

Despite introducing feature flags two years ago, adoption was slow due to bottlenecks in creation and management. Backstage enabled us to standardize naming conventions, enforce ownership, and streamline flag management.

To validate impact, we tracked:

- **Total feature flag usage:** Is adoption increasing?
- **New user adoption:** Are previously hesitant teams now using flags?
- **Team-specific usage:** Which teams are lagging, and why?

Results showed increased adoption and alignment across teams.

## The Platform "Flywheel" Effect

With each new feature we built, we observed a "flywheel effect" -- development required less effort, delivered value more quickly, and drove higher engagement and feature requests, further reinforcing the growing impact of our IDP.

## Key Themes and Takeaways

Here are some themes and takeaways that were important to our team and could help any team on their IDP journey:

### Know Your Value Stream

Understanding your value stream provides clarity on team interactions, dependencies, and bottlenecks. This understanding should guide your IDP strategy and roadmap.

### Use Data to See the Whole Picture

Data is essential for understanding challenges, validating solutions, and setting priorities effectively. Leverage various data types to inform decision-making and build confidence in what you're creating.

### Decouple Feedback Sentiment from Priority

Feedback is valuable, but sentiment can skew priority. For example, a tool may have negative sentiment but low usage. By separating how users feel from what impacts them most, you are less likely to prioritize low impact solutions.

### Follow the User Journey

Simple metrics like top pages or search terms only scratch the surface. Tracking user paths and interactions provides a deeper understanding of user engagement within your platform, highlighting areas of success and those needing improvement.

### Make Data Visible

Visibility drives action. For instance, making flaky test automation data visible spurred tangible improvements in test reliability.

### Trust the Process and Close the Loop

Not every feature will deliver immediate value. Iterations may be necessary. By sticking to our process -- measuring, validating, and iterating -- we've consistently delivered impactful changes.

---

Building an efficient IDP is a journey, and Backstage has been an invaluable tool for us. Through data-driven decisions, user-centric features, and continuous improvement, we've created a platform that empowers our teams and drives measurable impact.
