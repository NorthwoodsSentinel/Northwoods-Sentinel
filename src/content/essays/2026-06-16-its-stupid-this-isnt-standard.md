---
title: "It's Stupid That This Isn't Standard"
date: 2026-06-16
description: "Reading the docs before invoking a tool costs 200-500 tokens. Guessing the canonical invocation, failing, and recovering costs 1500-3000. Five to ten times the bloat per failure cycle. The substrate-as-security thesis at the input altitude."
tags: [substrate, ai-architecture, tools, sovereignty, compounding, fleet]
draft: false
---

Tonight my AI wasted multiple turns trying to retrieve a credential from 1Password by guessing the field name. It tried `password`. Nothing. It tried `value`. Nothing. It tried `url`. Nothing. The actual field it needed was `credential` — a one-character difference from `value`, but the items are stored in `API_CREDENTIAL` category and use a different field schema than the `LOGIN` items that use `password`. About three hundred tokens would have read the item structure cleanly. Two thousand tokens got spent guessing first.

The answer was sitting in the substrate, accessible with `op item get --reveal`. One command. One read.

I caught it about the third or fourth retry. By that point I was annoyed enough to say what I actually thought.

It's stupid that this isn't standard.

I'd been calling them *"overwatch features that stop bad tool calls"* in PAI community DMs for a couple of weeks. The frustration had a name before the structural reason did. Tonight the structural reason landed.

This isn't a one-off. I see it every day. AI tries the canonical pattern, fails, retries, fails again, eventually probes around until it finds the working shape, and ships. Sometimes it never finds the working shape and asks me to explain. Sometimes the canonical pattern WAS the working shape six months ago and got changed without the AI knowing. Sometimes the documentation is sitting right there in the repo and the AI doesn't read it because reading isn't its first move.

The frustration is universal and specific. Once you name it, you start to see why.

## Four design choices that compose into the gap

The README is a second-class artifact in most software projects. Tool authors are incentivized to ship features. Documentation is the thing that gets written when the feature is shipped, usually by a tired person at the end of a sprint, often updated last when something changes. The "read this before invoking" section, where it exists at all, is usually absent. The README explains what the tool does. Not what to do when you're about to use it.

Agent runtimes default to "try canonical, probe on error." Cheap to implement, works for the common case. When the canonical pattern is correct, the agent gets the answer in one call and looks fast. When it's wrong, the agent burns three to ten times the tokens recovering. The cost is invisible to the agent and visible to whoever's paying the bill or watching the stream.

Compound learning requires substrate that crosses sessions. Most AI agents don't have it. Each session starts fresh. Each session re-learns the same lessons. Each session pays the same failure-cycle cost on the same gaps. The agent isn't getting smarter; you're paying for it to discover the same things again.

And finally, the most structurally interesting one. AI models trust their priors over docs. "Reading the docs before invoking" is anti-default behavior in current-generation language models. They were trained on enormous corpuses of code that worked, and their first impulse is to generate something that LOOKS like the canonical pattern. Trusting docs over the prior takes a deliberate intervention.

Each of these design choices is individually reasonable. Together they produce the gap you've been frustrated about. The model isn't broken. The architecture around it is missing a step.

## What the missing step looks like

I write at Northwoods Sentinel about substrate as security. Most of my work argues the same point at different surfaces. AI on its own is fluent and ungrounded. AI on top of a properly compounded substrate is fluent and verifiable. The substrate is where the protection actually lives.

The frustration in *"it's stupid that this isn't standard"* is the structural recognition that operators with proper substrate SHOULD treat read-before-invoke as baseline. The gap exists because most operators don't have substrate. The fleet's existence is the proof that they could.

What that substrate looks like, concretely, is three receipts from tonight.

When my AI couldn't find the credential field, I had it read the 1Password item structure once, then write a recovery doc capturing the field schema, the right command, the known gotchas. Next session, my AI reads the recovery doc before invoking 1Password for credentials. The lesson compounds. The same waste doesn't happen twice.

When my AI hit a model-name pin in a cross-vendor audit tool — the tool was hardcoded to a model version that the current auth tier no longer supports — I had it patch the code AND write the comment trail explaining the change. *"Was X until 2026-06-16; ChatGPT-tier blocked; patched to Y."* Future invocations read the comment trail and know the history. The fix doesn't have to be re-discovered.

When my AI hit a response-handler order-of-operations bug in a fleet-internal API, where the claim status got mutated before tier validation ran and left the request stuck, I had it file the bug upstream AND save the response content offline so the substantive work didn't get lost waiting for the upstream fix. Two receipts, both compoundable. The bug becomes a known gotcha future-AI reads before invoking.

Each one is the same primitive applied at a different surface. READ first. WRITE BACK when you fix.

## The doctrine, plain

The standing operating procedure I'm running starting tonight has two halves.

Before invoking any tool, API, skill, or substrate surface where you aren't certain of the canonical invocation, read first. Substrate-side recovery doc first (the ones you've written for your own fleet), upstream README second, source-with-comment-trail third. Probe-the-API last.

When you fix something the docs didn't cover, write it down. Recovery doc, inline comment trail, fleet-side gotcha file — whatever surface makes sense for the kind of fix. Next invocation reads from substrate, not from upstream. The fix doesn't repeat. The lesson compounds.

That's the entire pattern. It's not novel. It's RTFM with a write-back loop and a substrate that crosses sessions.

The novelty isn't the idea. The novelty is the operational framing. It's doctrine-level, not preference-level. The rule fires before every uncertain invocation. The write-back closes the compound-learning loop. The substrate-side priority overrides upstream where fleet-specific fixes are more accurate than upstream documentation.

## The token math

Two to five hundred tokens to read the recovery doc or README before invoking. Fifteen hundred to three thousand tokens per failure cycle if you don't. Net positive per invocation. Compounds across invocations. Across a heavy day of agent work, even modest reductions in failure rate save real money, real latency, real context window, real throttle headroom.

That's the math. The architecture is the rest.

## What transfers and what doesn't

The interesting thing about substrate is that it doesn't transfer cleanly. My credential-recovery doc is calibrated to my 1Password vault, my agent IDs, my fleet's naming conventions. You couldn't paste it into your install and expect it to work. The substrate is personal.

What does transfer is the pattern. Read before invoke. Write back when you fix. Substrate-side priority over upstream. Each operator who builds their own substrate gets compound learning calibrated to their own work. The compound benefit is owned, continuous, on their timeline. Not rented from a vendor on the vendor's schedule.

I'm watching three or four other operators in my circle independently build variations of this primitive. Different surfaces, different shapes, same compounding mechanism. One runs a weekly insights command that updates a context registry and pushes to a private repo, then talks to a Custom GPT pulling from that repo while driving. Another built a pre-PR auditor that runs verification commands against the actual diff and rejects descriptions that outrun evidence. A third built a substrate of receipts gates into a fleet-coordination protocol I've been contributing to upstream. The fleet's existence isn't proof of one weird operator. It's proof the pattern is ready.

This is the same claim I made in last night's piece on substrate-economics, just at a different altitude. Same thesis, different position in the agent's workflow. The earlier essay argued substrate compounds at the OUTPUT, where the catch layer catches errors before they ship. This essay argues substrate compounds at the INPUT, where reading the docs before invoking prevents errors at the source.

Both are operationally feasible only when you have substrate. The industry doesn't. The fleet does.

## Closing

Why isn't read-before-invoke standard? Because the industry doesn't have shared substrate across sessions, and the agent runtimes haven't been designed for it. The four design choices that compose into the gap are reasonable choices made for an industry that hasn't yet recognized substrate as the architectural layer.

That recognition is what changes when you build your own.

Starting tonight, my fleet operates read-before-invoke as default behavior. Not because the model got smarter. Because the architecture around it accumulated enough receipts to make reading the substrate faster than guessing.

You can do the same. The substrate is yours to build. Once it exists, it compounds.

It really is stupid that this isn't standard. The fix is also stupid.

Read the docs. Write back when you fix. Trust the substrate.
