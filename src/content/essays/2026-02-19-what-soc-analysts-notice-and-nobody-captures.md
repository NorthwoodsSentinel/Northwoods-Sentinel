---
title: "What SOC Analysts Notice and Nobody Captures"
date: 2026-02-19
description: "Organizations pay for analyst intuition and then design systems that discard it. That's the real SOC problem."
tags: [security, soc, ai, cognition, systems-thinking]
draft: false
---

# What SOC Analysts Notice and Nobody Captures

There's a moment every analyst knows.

You're reviewing a ticket. Something feels off — not wrong enough to escalate, not clear enough to document. Maybe a naming pattern you've seen before. Maybe a subtle shift in how alerts are clustering. Your gut registers it.

You close the ticket.

That signal disappears.

## The Real SOC Problem

The security industry has spent years trying to reduce alert volume.

That's the wrong problem.

The real problem is different. Organizations pay for analyst perception — years of pattern recognition, intuition built from thousands of incidents, the ability to notice things machines flag as noise. And then they build systems that have no mechanism to capture any of it.

What gets captured: tickets, escalations, resolved alerts.

What gets lost: everything the analyst noticed before it became a ticket.

That's where the threat actually lives. Not in what triggered the alert. In what happened slightly before. In the drift that precedes the signal.

## The Workflow Nobody Questions

The standard SOC workflow hasn't changed in twenty years.

Alert → Triage → Close.

Repeat until shift ends.

This model treats analysts as processors, not perceivers. It optimizes for throughput. It's designed for a world where every threat announces itself clearly enough to create an alert.

That's not the world we're operating in.

Sophisticated threats don't start as alerts. They start as drift. Subtle changes in naming conventions. Slight behavioral shifts across multiple accounts. Patterns that only become visible when you look across time, not just across tickets.

The current workflow has no mechanism for capturing those observations before they evaporate.

## What the System Actually Needs

After twenty years working offense, I spent a lot of time thinking about what defenders consistently miss.

The answer isn't more detection surface. It's not better tooling. It's not even AI.

It's memory.

Analysts already have the perception. They notice the drift. They register the weak signal. The problem is there's nowhere to put it. No lightweight capture mechanism. No way to surface when someone else noticed the same thing two weeks ago.

The insight dies with the shift.

## A Different Architecture

What if the workflow shifted?

Alert → Triage → Close becomes:

Intuition → Capture → Incubate → Merge → Re-engage.

The analyst notices something. They log it with zero friction — no categorization, no business case, no justification required. The system holds it. When similar observations converge from multiple analysts, contributors are notified. The merged pattern surfaces with all the supporting fragments.

Now analysts are looking at something they couldn't have seen individually.

That's not automation replacing intuition. That's AI amplifying it.

## Why the SOC Is the Right Starting Point

Security Operations Centers are ideal for testing this model.

The environment is already high-signal. Burnout is real and measurable. Missed patterns are costly. Budgets exist. Telemetry infrastructure is in place.

And the problem is concrete: analysts already know things the organization doesn't. There's just no mechanism to capture, preserve, and merge what they know.

Most AI adoption in security has gone in the wrong direction. It's tried to reduce the human role. Better detection, automated triage, AI-generated summaries. The human becomes a reviewer of machine output instead of a contributor to organizational intelligence.

This inverts that model.

The machine handles pattern weaving. The human remains the sensory layer — which is where the real perception lives.

## Where This Starts

I'm testing this on myself first.

Starting with drift capture. The specific case I know well from my own work: language shift, naming anomalies, behavioral drift that appears before the alert fires.

The goal is simple: does a merge notification — a moment when the system says "three people noticed something similar, here's what they saw" — surface real insight that wouldn't have emerged otherwise?

If it does, the model works.

If it doesn't, I'll know why.

The point isn't to build something impressive. The point is to find out whether AI as perception amplifier, with humans as the sensory layer, produces better security outcomes than the current workflow.

My hypothesis is yes.

But hypotheses are for testing, not declaring.
