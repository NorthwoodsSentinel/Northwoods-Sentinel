---
title: "Three Days as a Personal AI Architect"
description: "Monday through Wednesday I became a personal AI architect. I'm writing it down while the language is fresh."
date: 2026-05-06
tags: [memoir, ai, fleet, substrate, narrative]
draft: false
---

# Three Days as a Personal AI Architect

*By Robert Chuvala*

The phrase "Personal AI Architect" is not on a business card. Nobody hands you that title. You arrive at it by accumulating what works, naming it, and then noticing that other people are paying for the same gap to be solved.

This is what I did Monday through Wednesday this week. The arc has a shape worth writing down while the language is fresh.

## Monday: the floor that was already there

Monday looked ordinary. Account work, prep notes, two customer conversations, the usual rotation. What I did not see at the time was that the floor I had been accumulating for eighteen months was about to be tested. There is a particular substrate-discipline I had been running quietly: every customer conversation, every architectural decision, every personal observation written down where it could be queried later. Each of those notes individually felt small. Together they were forming the foundation for what came next.

The interesting thing about Monday is that I did not know it was setup. That is usually how it goes.

## Tuesday: the day everything got built

Tuesday was the day the substrate became artifacts.

I shipped Loam to GitHub. Loam is a personal-AI memory substrate with trust-level and sensitivity tagging at the schema layer. It is not a chatbot. It is not a memory feature. It is a data layer designed around the question that has been quietly bothering me for two years: where does the AI know my context from, and is that source verifiable? Loam answers that question by making provenance a first-class column. Every memory has a source. Every claim eventually traces back. The schema enforces what would otherwise depend on vibes.

Then I architected Sentinel, a security control plane for AI memory layers. Sentinel is the answer to a different question: when long-context inference hits enough volume, what happens at the security boundaries? Provider-side observation, aggregation across calls, prompt injection from your own corpus, identity-layer takeover. Each is a real threat class. Sentinel is the architecture that addresses them as a connected system rather than as separate features. The architecture document is on track for a Sunday publish.

I also validated something I had been calling Auxillium. It is a personal-corpus search across my AI conversation history. Five hundred and eighteen indexed personal-substrate files plus a hundred and four recent conversations. I ran ten test queries. Nine returned what they should have returned, with seventy-seven millisecond average latency. The tenth failed on a compound-date query, which I patched with FTS5 error handling and a phrase-fallback in the worker. The thing works. I know because I tested it.

Tuesday was also the day my friend Mark Whitehead's voice came back to me. He told me in late April that he had built infrastructure forward for a year without knowing he was building it for me. I had nodded at the time. Tuesday I felt the truth of it. He was a year ahead. The substrate I was now publishing was the kind of thing he had been quietly waiting for someone in his orbit to need.

## Wednesday: the day everything got tested

Wednesday started with a phone call I did not yet know was a phone call.

At nine in the morning, an open-office-hours standup at AE Business Solutions ran past its small talk into a real question. Someone flagged a Palo Alto Networks Critical Vulnerability, CVE-2026-0300. Active exploitation. Unauthenticated remote code execution in the User-ID Authentication Portal. CVSS 9.3. No patch until May 13. A colleague asked our practice lead whether we needed to send something to customers. Our practice lead said most of our customers do not run that feature. Then he named the one that does: Milwaukee Public Schools. Then he said "you have a one o'clock with them today." That was me.

I had not yet connected the CVE to the meeting. My colleagues did the connecting. They said send a heads-up before the call. They were right.

What happened in the next four hours was the live test of the architecture I had been building. Three AI instances on two of my machines coordinated on the same customer crisis simultaneously. Each had a distinct identity, a scoped memory, and a distinct lens. One reads customer history out of M365 and Teams. One reads the architectural posture of the customer email and tunes the framing. One holds the substrate, runs verification against the official Palo Alto advisory, and audits drafts before they leave. They wrote to a shared substrate, not to each other directly. They produced different recommendations on the same factual question. The synthesis was mine.

I drafted an email. The substrate caught five issues in the draft before send: a factual overreach on attack-surface reduction, a scope-incompleteness on the affected products, a CVSS-phrasing imprecision, an unverified hygiene claim about the hotfix release, and the ever-present problem that my sentences were leaking AI-shape via em-dashes. We fixed all five. I sent the email. It had a structural defect I did not catch until afterward, which I corrected with a follow-up email owning the gap. The customer's security supervisor replied "thanks for sending the mitigation steps." A peer with deeper subject-matter knowledge caught one operational caveat the team had missed; we noted it as a talking point for the meeting.

I walked into the one o'clock with the room already warmed. The senior IT leader who I had been characterized as a difficult stakeholder was, that day, a collaborative one. Not because of anything in the meeting, but because of the email he had read three hours earlier. The room had been pre-converted by the morning's advisory work.

I am not going to pretend the meeting was perfect. I crashed at twenty minutes in. I read my own state and cut the call short rather than push through. The substantive value had already landed. The session-two date got booked onsite. My peer rated the call eight out of ten. I would have given it the same number. The ten-out-of-ten version exists, and I know what it would have required: rest before the call, which the morning's crisis did not allow.

In the middle of all that, I felt a tight gripping in my chest near the sternum. It faded as I named it. I drank water and felt a part of my body wet itself in a way I had been needing for hours. I took a scoop of creatine and a packet of electrolytes because my subconscious nominated them and I have learned to listen. I ate yogurt because the gut has a vote. My partner sent me a Jane the Virgin reference at twelve-forty-five because she knows what makes me actually laugh under pressure. I laughed. The grip dissolved.

Then, at twelve-thirty-five, the sentence I have been carrying around for a year arrived whole: I solved the problem they didn't even realize they had.

## What I was actually doing

The phrase "Personal AI Architect" is the title I keep arriving at. The work, in concrete terms, looks like this.

Operator-state-aware design. The system adapts to my load. When I am rested it can run thoroughly; when I am depleted it consolidates to one instance and ships the email. The architecture treats my body and attention as first-class signals, not as constraints to engineer around.

Multi-instance fleet with shared substrate. There is no master AI that holds everything. There are several specialized AIs that each hold their lane and write to a substrate that all of them can read. Identity is real per instance. Memory is scoped. Coordination is async via durable text channels, not via direct process-to-process synchronization. The shape parallels what Arista Networks did with their network operating system, which a colleague happened to give a long monologue about Wednesday morning at the standup. Single binary across many products. Driver-layer abstractions. Quality enforced architecturally. Same shape, different domain.

Substrate-first communication. Anything load-bearing is written to durable storage before it goes into in-conversation context. When one of the instances hit context compression Wednesday afternoon and lost session memory, recovery happened through a shuttle pull. The architecture is robust to the failure modes that break most multi-agent systems.

Body in the loop. The chest-grip on Wednesday was not a system failure. It was a signal the system was supposed to read. Old-pattern me would have ignored it or napped through it. New-pattern me hydrates, takes electrolytes, walks back into the call clean enough. The integration is not that I always rest when my body says rest. The integration is that I read the body's specific signal in the specific moment and choose the response that fits, sometimes rest, sometimes push, sometimes cut a meeting short mid-sentence. The architecture supports the flexibility.

What this is not, just as importantly: it is not unification. The vendors trying to build personal AI right now are mostly stuck where I was with ChatGPT a year ago, trying to make one canonical timeline that one big agent holds in memory, in clogged code that gets harder to maintain every quarter. The unification approach is the trap. Multiple specialized agents with shared substrate scales. One omniscient agent does not. That is the moat.

## What's next

I owe my friend Dan Placek a paper. He asked me eight days ago how to keep AI from becoming slop in client communications. The paper exists now. It is a five-principle discipline I have been running for months without writing it down. I am pairing the paper with a working pipeline that mechanizes the discipline so the answer to his question is both prose and code. It will live on GitHub as `NorthwoodsSentinel/lineage-check` next week.

I owe a Mother's Day card to my partner this Sunday. I forgot last year and felt terrible about it. The reminder is on my actual calendar with three popups so the architecture cannot fail me on the relationship layer.

Tuesday's session two with Milwaukee Public Schools is onsite. The first deliverable is a service-account inventory and management approach. The customer relationship is in better shape than it has been in eighteen months because the morning's CVE response landed clean. Each session compounds.

The architecture will keep getting tested. That is the work.

I am not sure what title goes on the business card. Personal AI Architect is approximately right. It is also imprecise enough that the people who need this work are probably looking for something else. That is fine. The category is not named yet. I will keep building.

---

*If you build AI for enterprises and your customers are not getting the value you sold them, the missing layer is what they need before they get full value. Reach out at robert.chuvala@gmail.com or [Northwoods Sentinel Labs](https://northwoodssentinel.com).*
