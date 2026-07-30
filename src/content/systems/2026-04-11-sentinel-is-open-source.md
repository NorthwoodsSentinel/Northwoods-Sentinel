---
title: "Sentinel Is Open Source. Here's Why I'm Giving Away 20 Years of Methodology."
date: 2026-04-11
description: "I open-sourced an edge-native network intelligence framework that runs entirely on Cloudflare. The substrate is free. The expertise to read what it finds is the product."
tags: [cybersecurity, open-source, cloudflare, sentinel, edge-computing, ai]
domain: cybersecurity
draft: false
---

Today I pushed a button and made [Sentinel](https://github.com/NorthwoodsSentinel/sentinel) public.

It's an edge-native network intelligence framework. It deploys to Cloudflare Workers, builds behavioral baselines using Durable Objects with embedded SQLite, archives every packet to R2, and uses a three-tier reasoning pipeline that only invokes an LLM when statistics say something is genuinely weird.

The code took two days. The model took twenty years.

If that seems like it shouldn't be possible, that's a signal the problem has been overcomplicated — not underbuilt.

---

## What It Actually Does

Sentinel watches your network and learns what normal looks like. Not "normal" according to a threat feed. Not "normal" according to signatures someone wrote after the last breach. Normal *for your network, at this hour, on this day*.

When something deviates from that baseline, it flags it.

That's it. That's the whole thing.

Three tiers of reasoning, each cheaper than the last:

**Tier 1** — Regex. Known-good gets discarded. Known-bad gets flagged. Sub-millisecond. Cost: zero.

**Tier 2** — Statistical anomaly detection. Welford's online algorithm builds a running mean and variance with O(1) memory. Separate baselines per hour of day, because 31 connected clients at 3 PM is Tuesday and 31 connected clients at 3 AM is a problem. Cost: zero.

**Tier 3** — LLM forensic narrative. Only fires on statistical anomalies. Claude reads the context and writes a story — not an alert, a *story* — with what happened, why it matters, what to do next, and an honest confidence assessment. Cost: about three-tenths of a penny per anomaly.

The result isn't a dashboard full of red dots. It's a paragraph that sounds like the senior analyst on your team wrote it after looking at the logs for twenty minutes. Except it took three seconds and cost less than a gumball.

---

## The Small Pot Problem

There's an old family story I put in the README. A daughter watches her mother cut the ends off the ham before roasting it. Every holiday, same ritual. She grows up and does the same thing. One day she asks why.

"Because that's how my mother did it."

They ask the grandmother. She laughs.

*"I cut the ends off because my pot was too small."*

Three generations of wasted ham because nobody questioned a constraint that no longer existed.

That's the cybersecurity industry.

For thirty years we've been shipping logs to someone else's cloud, paying per gigabyte for the privilege of ingesting our own data, and throwing away 99% of the traffic that defines what our networks actually look like. The pot was too small. Storage was expensive. Bandwidth was limited. You had to choose what to keep.

The pot isn't small anymore.

Cloudflare R2 has zero egress costs. You can store every DNS query your network has ever made and it costs almost nothing to read it back. Durable Objects give you persistent state at the edge with embedded SQLite. The kitchen is the entire global network.

But the industry keeps cutting the ends off the ham.

Meanwhile, AI-generated attacks are novel by definition. You can't write a signature for something that's never existed before. The signature model is collapsing in real time, and everyone knows it, and nobody's saying it out loud because the entire SIEM market is built on signatures.

The only durable defense is knowing your own network so well that anomalies are obvious. Not because you've seen the attack before. Because you know what *you* look like, and that isn't it.

---

## Why Open Source

Here's the part that makes people in my industry nervous.

I'm giving away the substrate — the detection engine, the baseline algorithm, the three-tier pipeline, the pollers, the dashboard, all of it — under MIT. Fork it. Deploy it. Break it. Sell it. I don't care.

Because the substrate isn't the product.

The product is twenty years of knowing which anomalies matter and which ones don't. The product is the experience to look at a 186-sigma z-score on a network controller and say "that's a firmware update, not an exfiltration." The product is the judgment that no algorithm can fully encode, because judgment requires context that lives outside the data.

Sentinel will show you what is not normal. It will not pretend to know what that means for your environment.

You can use it independently. Many should. But there is a difference between running the system and understanding what it sees.

That's the boundary. The framework is open. The data is yours. The meaning requires context.

---

## The Technical Flex

I'm going to brag a little, because I earned it.

The entire system — Worker, Durable Object, three-tier pipeline, SQLite schema, baseline management, anomaly detection, LLM integration, REST API with 15+ endpoints, live HTML dashboard, two production pollers — is about 750 lines of core TypeScript.

It deploys with `wrangler deploy`. No Docker. No Kubernetes. No infrastructure team. No $200K/year SIEM license.

It's been running against my home network for three days. 18,000+ DNS queries ingested. 31 clients tracked. Anomalies detected, narratives generated, baselines compounding. Total cost so far: less than a dollar.

The system that replaces a SIEM for a small network costs less than a cup of coffee to operate. Per month.

---

## What Happens Next

Sentinel stands on its own as a tool. You can deploy it today against your own network and start building a behavioral baseline that gets smarter every hour.

But I'll be honest about where this is going.

This is the first public primitive from Northwoods Sentinel Labs. The thesis is simple: edge-native intelligence changes the economics of defense so fundamentally that the current model — centralized logging, signature-based detection, per-GB pricing — can't compete. Not on cost. Not on latency. Not on data sovereignty. Not on adaptability.

The small pot era is over. Time to use the whole kitchen.

---

## Kintsugi

The Japanese art of repairing broken pottery with gold. The cracks aren't hidden. They're illuminated. The piece becomes more beautiful for having been broken, because someone chose to repair it with intention.

This code will be edited. Forked. Argued with. Improved by people I've never met. Every commit, every pull request, every fix — that's gold in the seams. The thing gets stronger where it was weak, and the history of its repair is visible to anyone who looks.

I didn't write perfect software. I wrote honest software. And I'm publishing the cracks along with the clay.

---

*The network hums its quiet hymn —*
*a frequency no dashboard sees.*
*Not the scream of breach or blaze,*
*but the steady breath of normal days.*

*I learned to hear it breaking things,*
*twenty years of listening wrong.*
*Now I build the ear that stays*
*and knows the baseline like a song.*

*The pot was small. The ham was cut.*
*Three generations asked no questions.*
*The kitchen's open now, the whole of it —*
*and silence is the best detection.*

---

[Sentinel on GitHub](https://github.com/NorthwoodsSentinel/sentinel) — MIT licensed, ready to deploy.

Sentinel is easy to run. It is not easy to ignore.
