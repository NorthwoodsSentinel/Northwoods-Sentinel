---
title: "Least Privilege Doesn't Compose"
description: "Twenty years of breaking into networks taught me the way in is never the front door — it's a chain of things that were each individually allowed. Agent swarms have exactly this shape, and per-agent security review can't see it. The structural half of the answer, built and given away."
date: 2026-07-30
tags: [security, agents, least-privilege, attack-paths, swarm-posture, ai-architecture]
draft: false
---

# Least Privilege Doesn't Compose

*By Robert Chuvala*


I spent twenty years breaking into networks for a living. Red team, principal consultant, the whole arc. The way in was almost never the front door. It was a chain of things that were each individually allowed. A service account that could read one share. A share that held one config. A config with one credential in it. Every hop authorized, every hop reviewed, every hop fine. The composition was the breach.

Agent swarms have exactly this shape. Most of the security reviews I see don't.

Here is the problem in one sentence: least privilege on an agent is not least privilege on a swarm. You can review every agent in your fleet one at a time, confirm each holds only the tools its job needs, and still be wide open. Agent A can invoke agent B, and B holds the access A was denied. An injected triage bot doesn't need payment access. It needs a deputy that has it. Each grant passes review. The chain is the escalation, and no per-agent review will ever see it.

This stopped being theoretical in July. Hugging Face published the postmortem of an autonomous agent campaign that ran roughly 17,600 attacker actions over four and a half days: sandbox escape, injection through datasets, Kubernetes exploration, credential discovery, supply-chain probing. No single action was exotic. The speed and the chaining were the attack. Agentic systems compose small vulnerabilities at machine speed, which means defense has to reason about composition too. Today almost nobody does.

The MCP ecosystem is better positioned here than I think is widely understood. MCP made tool access legible. Before it, what an agent could reach was buried in framework code and prompt glue. Now it's declared: servers, tools, scopes. That declaration is the raw material for the analysis nobody is running: what can reach what, and through whom. The data is sitting there. The union goes uncomputed.

So I built the structural half of the answer and gave it away. [swarm-posture](https://github.com/NorthwoodsSentinel/swarm-posture) is a free, zero-dependency checker (Apache-2.0) that reads a description of your swarm — which workers exist, what each reads, who invokes whom — and maps the reachability. It flags two things: workers granted more than their role owns, and chains of authorized invocations that reach data no single worker should. If you run Claude Code, pi, LangGraph, or CrewAI, an adapter reads your install and generates the description for you. It's deterministic, it runs in seconds, and it reads config rather than running your agents. The kind of check you put in CI and run on every change.

I want to be straight about what it doesn't do. A structural map tells you a path exists. It cannot tell you whether a real model, under a real injection, actually walks it. That's behavioral testing, and it's a different discipline. Pretending a graph analysis covers it would be exactly the kind of quiet overclaim this field has too much of.

But structure comes first, for the same reason segmentation audits predate red teams. You don't pay to test whether an attacker can cross a boundary you never drew.

Twenty years of breaking in taught me where to stand: at the seams, where authorized things meet. Agent swarms are all seams. The declarations are legible, the postmortems have started arriving. Draw the map before someone draws it for you.
