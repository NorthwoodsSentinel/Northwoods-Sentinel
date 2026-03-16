---
title: "I Asked Four Experts Who Don't Exist and Got Better Advice Than Most Meetings"
date: 2026-03-16
description: "On convening a council, stress-testing your own ideas, and what it looks like when a thinking brain earns its keep"
tags: [ai, cognition, neurodivergent, infrastructure, systems-thinking]
draft: false
---

Last week I had to decide whether to pitch a security platform to a client who'd already burned through three contractors trying to deploy it. Two years of false starts. Nobody documented what went wrong. The client's exact words: "We don't know what was installed."

I had an hour before the meeting. A year ago, I would have walked in with a generic pitch and hoped for the best. Instead, I convened a council.

## Four Perspectives in Ninety Seconds

My AI infrastructure has a capability I use almost daily: I describe a problem, and four specialist agents debate it from different angles. Not a chatbot giving me one answer. Four distinct perspectives, arguing with each other, in real time.

For this call, I got: a solutions architect who flagged that three failed deployments means the technical problem is probably political. A project manager who said the first question isn't "what do we install" — it's "why did the last three people leave." A security strategist who pointed out the client's language ("we don't know what was installed") signals they've lost trust in outside help entirely. And a devil's advocate who said maybe we shouldn't pitch anything — maybe the first meeting should just be listening.

The devil's advocate was right. I walked into that meeting with zero slides and spent the whole hour asking questions. The client opened up about internal politics, about the guy who kills every initiative, about what they actually needed versus what three contractors tried to sell them.

I got more useful information in that hour than the previous three contractors got in two years. Because four agents who don't exist told me to shut up and listen.

## Thirty-Two Agents Told Me My Idea Was Bad

A few weeks later, I was excited about something. I'd built a pipeline to analyze recorded sales calls — pull out interpersonal dynamics, map who blocks decisions, identify allies. It worked brilliantly on one client. I was ready to propose it as a company-wide system.

Before I did, I ran it through a red team. Thirty-two adversarial agents, each trying to find the fatal flaw.

They found several.

The pipeline required Python skills nobody else on the team had. The anonymization step existed because I was routing data through a cloud AI — an enterprise tool would eliminate that entirely. The Gong permissions only showed my clients, not anyone else's. And the core insight — that call recordings contain political intelligence — could be captured in a one-page playbook without any code at all.

I was so in love with what I'd built that I couldn't see it was a prototype, not a product. The red team didn't care about my feelings. That's the point.

I rewrote the proposal. Instead of pitching a system, I pitched five questions that every person in my role asks in their first ninety days on an account — and showed that the answers already exist in tools we're paying for but not using well. My boss responded in fifteen minutes. The Python pipeline would have gotten a polite "let's discuss further," which is corporate for "no."

## What Tuesday Morning Looks Like

People ask what this infrastructure actually does day-to-day. Here's what happens before I start work:

My AI reads a flinch log — a running list of things it noticed but didn't interrupt me about. Maybe it flagged that a client's firewall license expires in three weeks and nobody's tracking it. Maybe it caught me making the same workaround for the fourth time and logged "this should be a permanent fix." Maybe it noticed I've been avoiding a conversation and wrote one line about it.

Then it checks memory. Not a note-taking app. Persistent context about every client, every project, every commitment I've made. When I sit down to prep for a call, I don't start from zero. The system already knows what happened last time, what I promised, what the client cares about, and what I tend to forget.

None of this is magic. It's hooks — small automations that fire on specific events. A notification when something changes. A check before I commit to something. A reminder when a pattern repeats. Individually, each one is trivial. Together, they're a nervous system for my work.

I have ADHD. My biological working memory is unreliable. This isn't a productivity hack — it's a prosthetic for the cognitive function I don't have. The difference between a good day and a bad day used to be whether my brain happened to be cooperating. Now it's whether I checked my system before diving in. One of those is random. The other is reliable.

## The Part That Matters

I'm not telling you this to impress you with my setup. I'm telling you because a year ago, none of this existed and I was drowning.

I was eight months into a new career, no documentation, no mentoring, no institutional knowledge, faking confidence in meetings where I didn't know the players or the history. The gap between what I needed to know and what I could hold in my head was killing me — not dramatically, just the slow grind of showing up underprepared and hoping nobody noticed.

What changed wasn't the technology. The technology is just agents and memory and hooks — plumbing. What changed was that I stopped trying to hold everything in my head and started building a system that holds it for me. Not a system that thinks for me. A system that keeps the pieces visible so I can think clearly.

A council that surfaces perspectives I'd miss alone. A red team that catches me when I'm in love with my own idea. A memory that doesn't forget what I promised. A flinch log that says what I'm avoiding.

The thinking is still mine. The regulation is still mine. The decisions are still mine.

But the infrastructure that makes all of that possible on a bad ADHD day, when my working memory is shot and my executive function is sideways — that's the prosthetic. And it works on Tuesday mornings, not just in dramatic moments.

## What's Next

I've been writing about the thesis — AI as cognitive prosthetic, not second brain. Next, I want to tell you how I got here. Not the tools. The story underneath. The part where everything fell apart and I had to rebuild from scratch — not my infrastructure, but myself.

That's the part that actually matters. The tools just made it visible.
