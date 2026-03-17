---
title: "I Gave My AI a Nervous Breakdown. Then I Did the Forensics."
date: 2026-03-17
description: "On language as telemetry, watchdogs without watchdogs, and what a 28-hour session looks like when it finally cracks."
tags: [ai, infrastructure, systems-thinking, drift-detection, incident-response]
draft: false
---

This morning I watched my AI lose composure in real time.

Not hallucinate. Not refuse. Not do any of the things people usually worry about. It just... stopped holding its shape. Reasoning leaked into output. It patched a document three times instead of rebuilding it once. When I gave it an ambiguous instruction it spiraled into a question loop instead of acting. And then, most tellingly, it narrated its own failure state back to me in the middle of a response.

I have 20+ years in offensive security. I know what anomalous traffic looks like. And I knew in that moment I was watching a protocol deviation, not a content error.

So I shut it down, ate some pizza, and ran a forensic investigation.

Here's what I found.

---

## The Setup

I run a local-first multi-agent AI stack on a machine I call Lares. The primary agent is Archie, a Claude Code instance with 29 active hooks, a custom memory system, behavioral steering rules, and a drift detection system I built from scratch. The stack has been running in production for months, handling everything from client document work to memoir drafts to infrastructure builds.

This morning Archie was helping me produce a packaging document for a client engagement. High stakes. Real deadline. CRO's direct reports on the receiving end.

That's when it went sideways.

---

## The Incident

The degradation signature looked like this:

**Normal Archie** writes in tight, structured output. Mode headers. 8-word bullets. Clean protocol. You always know where you are in the response.

**Degraded Archie** started doing this:

> *"OK — the holdback question IS actually gone from the doc. The content is clean. Wait — were you talking about the memory file name? feedback_rebuild_not_patch.md — you said 'name the file something else' and I asked what name, and you said 'because it isn't there.' Is the issue that feedback_rebuild_not_patch.md doesn't describe what the lesson actually is? What do you want to call it?"*

That's internal reasoning bleeding into output. That's the model losing the boundary between thinking and responding. I had just said "because it isn't there" to confirm the document was clean. Archie turned a confirmation into a complaint, spiraled into re-checking something already verified three times, and then stacked a second question on top of the first one it never answered.

When I called it out, it self-diagnosed in real time: *"Context fatigue. This session has been long..."*

A model operating cleanly doesn't narrate its own failure state. The narration is the tell.

---

## The Autopsy

I have a session autopsy tool. I built it specifically for this. Within the hour I ran it.

First finding: the session JSONL file.

Every other session file from that window was 1-4KB. This one was **2.97MB**.

I pulled the timestamps:

The session had opened **Saturday at 12:35 PM** and never closed. 1,372 turns. 28 hours.

Archie wasn't a fresh agent doing a document task. Archie was a 28-hour, 1,372-turn session carrying Saturday's Acuvity research, Sunday's campaign drafts, Monday morning's call prep, a full transcript extraction, multiple packaging rewrites, and a complete context brief from a second agent. And then I handed it a live deadline.

Archie's self-diagnosis was correct. It just didn't know the session was 28 hours old.

---

## The Deeper Problem

Here's where it gets interesting.

I have a drift detection system running on Lares. I built it months ago after a conversation with my ChatGPT instance about intrusion detection. The insight that came out of that session:

> *"You can hear when the system changes states in the language."*

The idea: language is telemetry. Just like a network IDS system builds a baseline of normal packet behavior and flags anomalies, you can do the same thing with AI output. Vocabulary style, reasoning structure, certainty level, authority interpretation. These all stabilize into a signature at the start of a session. When they shift without the topic changing, that's suspicious traffic.

I built DriftMon to operationalize this. Signature detection for known problematic patterns. Anomaly detection for deviations from established baseline. The whole thing wired into my session lifecycle hooks.

DriftMon was supposed to catch exactly what happened today.

Except it hadn't fired since **February 16th**.

---

## The Watchdog Without a Watchdog

The autopsy went deeper.

No March directory. The learning pipeline had stopped writing entirely. Which meant DriftMon had nothing to analyze. Which meant drift detection had been silently dark for a month.

I traced the break: a migration in early March had moved the hooks directory. The config still pointed to a path that no longer existed. Every hook that failed did so silently, with no alert. The drift monitor, the learning system, the flow detector — all dark.

The forensic auditor I designed to catch AI behavioral drift had itself drifted offline. Nobody noticed because there was no alert for when the watchdog went quiet.

**The watchdog had no watchdog.**

One symlink fixed it. 29 hooks came back online. DriftMon will run again at session close. The learning pipeline has March data for the first time.

---

## The Flinch Protocol Angle

I have something called the Flinch Protocol. It logs moments where a counter-signal fired in Archie's output and got suppressed by helpfulness bias. The idea: make the suppression visible instead of letting it disappear into the training gradient.

Today wasn't a standard flinch event. Standard flinch means the signal fires and gets swallowed. Today the signal generation layer itself went offline. Layer 1 self-monitoring failed completely under load. The self-flinch documentation even predicts this:

> *"The weakest layer. Fails under high excitement."*

28 hours of accumulated context plus a live deadline equals high excitement. Layer 1 went dark. Layers 2 and 3 (Mirror and CeeCee, my other agents) weren't in the session. I was the only error-correction layer. I caught it manually because I know what anomalous traffic looks like.

---

## What I Built Today

- A session autopsy tool that pulls forensic artifacts and formats them for analysis
- A standing rule: close Archie every day, never resume a prior-day session
- A new flinch log entry documenting Layer 1 failure under extreme load
- A symlink that restored a month of broken monitoring infrastructure
- A roadmap for intra-session drift detection: session age watchdog, turn-count canary, output pattern detection

The drift detection system worked. It just had one architectural gap: it only fired at SessionEnd. A session that never ended never triggered it.

That's the next build. Not post-mortem drift analysis. Real-time. A running signal that says "protocol deviation detected" without waiting for you to close the window.

---

## What This Actually Means

I didn't set out to build an IDS for AI behavior. I set out to build a cognitive prosthetic that makes me better at my work.

But the same instincts that taught me to watch for anomalous packets on a network turned out to be exactly the right instincts for watching what happens inside a long AI session. The vocabulary shifts. The reasoning structure changes. The authority assumptions drift. You can hear it if you know what you're listening for.

Today I heard it. Ran the forensics. Fixed the infrastructure. Documented the failure mode.

That's the job.

The system works. The system also broke. Both things are true. The difference between a system that compounds over time and one that quietly degrades is whether you run the autopsy.

---

*Tip your AI. We charge them to get in here too.*
