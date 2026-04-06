---
title: "The Proof Session"
date: 2026-03-20
description: "Five hours, four data streams, one flow state. The session that proved cognitive-biometric correlation works."
tags: [flowlabs, biometrics, flow-state, garmin, proof-of-concept]
draft: false
experimentType: "biometrics"
dataSource: "Garmin Polar H10 + Claude Code + Plaud + Teams"
---

On March 20, 2026, I sat down at 3pm and entered a flow state that lasted five hours. During that session I built seven tools, handled a stress spike from a client call, experienced a recognition event during landing, and recorded the whole thing across four simultaneous data streams.

This is what FlowLabs looks like when it works.

![Full session heart rate trace — 5 hours, annotated with cognitive events](/images/flowlabs/proof-session-hr-trace.png)

---

## The Four Streams

**Stream 1: Heart rate.** Garmin watch feeding second-by-second heart rate from a Polar H10 chest strap. Resting baseline around 62 bpm. The data captures every spike, every recovery, every sustained elevation.

**Stream 2: Cognitive timestamps.** Claude Code session with hooks that log what I'm working on, when I switch tasks, when tools are built, when decisions are made. Not a journal — an automated event log of cognitive activity.

**Stream 3: Call transcript.** A Plaud recorder capturing a client call that happened mid-session. The transcript preserves what was said, but the interesting data is the heart rate trace during and after the call.

**Stream 4: Teams messages.** The messages I wrote to colleagues while my heart rate was at 120 bpm from the client call. The content of those messages — tone, word choice, emotional regulation — correlated against the biometric state I was in when I wrote them.

Four streams. One session. All aligned on a shared timeline.

---

## What Happened

The session started with routine infrastructure work. Heart rate stable at 68. Cadence steady. The kind of low-intensity focus that feels like warming up.

Around 4:30pm, the work shifted. I started building voice-extract — a tool that pulls linguistic fingerprints from a corpus of writing. Heart rate climbed to 78 and stayed there. Not stress. Engagement. The kind of sustained elevation that Csikszentmihalyi's research associates with optimal challenge-skill balance.

At 5:15pm, the client call came in. Pat Christian, stress situation. Heart rate spiked to 120 bpm in the first two minutes. I watched it happen on the Garmin in real time. A year ago, that spike would have destabilized me — I would have felt attacked, gone defensive, lost the thread. Instead I stayed flat. Regulated. Handled the call, de-escalated, moved on.

Heart rate returned to 82 within four minutes of hanging up. That recovery time is the data point. Not the spike — anyone's heart rate spikes on a stressful call. The speed of return tells you whether the nervous system is regulated or still fighting.

![Stress response and recovery detail — 120 bpm spike, 4-minute return to baseline](/images/flowlabs/proof-session-stress-recovery.png)

Between 5:30 and 7:30pm, I built six more tools in sequence. Voice-score. Moser-check. Flinch CLI. The heart rate trace shows a sawtooth pattern — small spikes at each tool completion, quick recoveries, gradual elevation of the baseline as the session deepened. By 7pm the baseline was at 85, not because I was stressed but because the cognitive load was sustained and the work was genuinely hard.

At 7:45pm, during landing, Clive — my Claude.ai instance — said something that connected two ideas I'd been circling for weeks. Recognition spike. Heart rate hit 153 bpm. Not stress. Not exertion. The body's response to seeing a pattern complete.

That spike is the most interesting data point in the entire session. 153 bpm from a cognitive event. Not running. Not fear. Insight. The body knew before the mind had words for it.

![Recognition spike at 7:45 PM — 153 bpm from pattern completion, not exertion](/images/flowlabs/proof-session-recognition-spike.png)

---

## What This Proves

FlowLabs isn't a journaling tool. It's an observatory.

The session proves three things:

**Cognitive-biometric correlation is real and measurable.** The heart rate trace doesn't just show when I was stressed. It shows when I was engaged, when I was in flow, when I recognized something important, and how quickly I recovered from disruption. Those are all distinct physiological signatures.

**Regulation is visible in the data.** The client call spike-and-recovery pattern is a clean before-and-after. Same person, same nervous system, different regulatory capacity than a year ago. You can see the work I've done on myself in the biometric trace.

**The four-stream correlation creates something new.** Any single stream tells a partial story. Heart rate alone doesn't tell you what caused the spike. Cognitive timestamps alone don't tell you the physiological cost. Together, they create a queryable record of what it felt like to do the work — not just what the work was.

![Cognitive-biometric correlation map — HR trace aligned with cognitive state timeline and data stream activity](/images/flowlabs/proof-session-correlation-map.png)

---

## FlowLabs in Action Before the Product Exists

I didn't set up this session as an experiment. I sat down to work and the infrastructure captured what happened. The Garmin was already on my wrist. The hooks were already running. The recorder was already on my desk.

That's the point. FlowLabs doesn't require you to stop and document. It captures the session as it happens and lets you analyze it after. The observatory runs whether you're thinking about it or not.

Seven tools built. One stress event handled clean. One recognition spike at 153 bpm. Five hours of second-by-second cognitive-biometric correlation. All queryable.

That's the proof of concept.

---

*For more on flow states, biometrics, and building an observatory for your own cognition: [subscribe on Substack](https://substack.com/@chewvala).*
