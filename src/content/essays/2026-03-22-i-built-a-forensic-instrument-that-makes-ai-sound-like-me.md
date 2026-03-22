---
title: "I Built a Forensic Instrument That Makes AI Sound Like Me"
date: 2026-03-22
description: "A voice fidelity tool for consultants who use AI but can't afford to sound like it. Here's the score."
tags: [ai, voice, tools, prufrock, flowlabs]
draft: false
---

Two days ago I published a post about how AI sounds like nowhere. Mangled idioms, missing regional markers, text that's fluent but ungrounded. I mapped thirteen failure modes and built a tool that catches them.

I didn't plan to turn it into a product. I built it because I needed it.

But then I ran the numbers.

---

## The Test

I took a consultant deliverable I'd written with AI assistance. Polished, reviewed, already sent to a client. The kind of document where your credibility is on the line.

Ran it through the tool. 87 out of 100. Three flags. A banned word that slipped through review. A paragraph where every sentence started the same way. And a section where the voice drifted from mine into something cleaner, more uniform, more obviously generated.

I fixed the three flags and ran it again. 94.

Then I ran a document I'd written entirely by hand. No AI. 100.

The gap between 87 and 100 is the gap between "good enough" and "mine."

---

## What It Actually Does

The tool has two parts. First, it reads your actual writing - emails, docs, transcripts, blog posts, whatever you've got - and extracts a voice profile. Sentence length patterns, vocabulary fingerprint, paragraph architecture, the words you never use, the phrases you always do.

Second, it scores any new document against that profile. Not "is this AI?" That question gets less useful every month as the models get better. The question is "is this you?"

It flags specific lines where the voice drifts. Not vague feedback like "consider varying your tone." Specific feedback: "This sentence uses passive voice. You never do that." "This paragraph has six sentences. Your max is four." "You used a banned word - you never say that."

I called it Prufrock. If you know the poem, you know why.

---

## Why This Matters for Consultants

Every consultant I know is using AI to write now. Most won't say it out loud. All of them worry about the same thing: will my client know?

Wrong question. Your client doesn't run AI detection tools on your deliverables. They read the document and something feels off. Or it doesn't. That feeling is what I'm measuring.

Your clients hired you because you think a certain way, you write a certain way, you see things through twenty years of doing this specific thing. When AI writes your deliverable, it thinks like the average of everyone's writing. It produces correct, professional, empty text. And the people who know you can feel the difference even if they can't name it.

A law firm partner reads a brief and thinks "this doesn't sound like Sarah." An executive reads a board memo and thinks "did someone else write this?" A client gets an assessment and the insights feel generic instead of earned.

That's the risk. Not detection. Erosion.

---

## The Proof Case

I tested the tool on my own AI fleet's output. I have multiple AI systems that produce content under my name. Every one of them produces text that scores differently against my voice profile.

Before tuning: 77 average. After feeding them the voice profile and wiring in the scoring: 91. And here's the kicker - ZeroGPT AI detection score dropped from 22.9% to 19% on the same content. Not because I was hiding the AI. Because the text actually sounded more like me.

The irony is beautiful. Making AI output sound like a real person also makes it less detectable as AI. Not because you're gaming detection - because you're solving the actual problem. AI text gets flagged because it sounds like nowhere. Fix the nowhere, fix the detection.

---

## What's Available Now

Prufrock is available now through [FlowLabs](/flowlabs/prufrock). Here's how it works: you send me your writing, I extract your voice profile and score your AI output against it. You get back your profile, a fidelity report with flagged lines, and the specific instructions to feed your AI so it sounds like you.

No software to install. No subscription. You send documents, I send back your voice.

When your AI starts drifting six months later - and it will, because your writing evolves and the models change - you come back for a recalibration.

If you're a consultant, advisor, lawyer, or anyone who sends AI-assisted writing under your own name, I want to hear from you. Not a sales pitch. I want to know if the problem I solved for myself is the same one keeping you up.

[Get started](/flowlabs/prufrock) or [find me on Substack](https://substack.com/@chewvala).

---

Twenty years of breaking into networks taught me one thing: the best attacks work because they match the environment well enough that nobody questions them. The best defense is recognizing when something doesn't belong.

Same principle. Different target. Your words should sound like they came from somewhere. From you.
