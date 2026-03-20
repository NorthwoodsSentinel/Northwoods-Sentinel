---
title: "Your AI Sounds Like Nowhere"
date: 2026-03-20
description: "Why AI detection tools miss the real tell - and what mangled idioms reveal about machine-generated text"
tags: [ai, detection, voice, consulting, tools]
draft: false
---

Someone called me a Swiss Army knife on a call this week. I laughed. Then I thought about it overnight and decided they were right.

Twenty years as a penetration tester. Breaking into networks, building red teams, rebuilding security programs after breaches. The job was pattern recognition. Find the gap, exploit it, show the client what they missed.

Eight months ago I moved to consulting. Security architecture, advisory work, helping clients figure out what's actually wrong versus what the vendor slide deck says. Different title. Same instinct.

Here's what I keep seeing: organizations spending seven figures on platforms they use at 30% capacity. Features available for years, never turned on. Manual processes alongside automation tools built to replace them. And vendors who take the renewal, don't rock the boat, and never say "you're doing this wrong."

My targets used to be CVEs. MS08-067 got me shell on more boxes than I can count. Now my targets are complacency. Same pattern. Something known, something fixable, nobody doing the work.

That realization got me building.

I use AI to write client deliverables. Assessments, advisories, reports. And AI output has a smell to it. If you've read enough, you know. Uniform sentences. Same paragraph structure every time. Three bullet points starting with the same word. Your practice lead reads it and something feels off even if they can't name why.

So I built a tool that catches it. A voice conformance checker. Feed it your writing style as rules, it scores any document against them before publishing. Sentence rhythm, banned words, structural patterns. Deterministic. Local. No cloud API.

Then something interesting happened. The tool caught an idiom I got wrong. "Don't rock the ship" instead of "don't rock the boat." Small error. But it pointed at something bigger.

AI doesn't mangle idioms because it's stupid. It mangles them because it has no region. Trained on language from everywhere, it sounds like nowhere. A human always sounds like somewhere. The words you use for a carbonated drink. The phrases in your bones from growing up in a specific place. Those aren't style choices. They're identity markers.

That absence is the real detection signature. Not wrong words. Missing provenance.

So now the tool checks for that too. Mangled idioms. Regional markers. Embodied cliches that signal "I generated a feeling" instead of "I felt this." Vague timestamps where specific ones should be. Fourteen automated checks plus a manual red team checklist.

Every product I've built follows the same pattern. Personal friction first. Solution second. Market third.

If your reviewers keep flagging AI content that feels "off," the problem might not be your prompts. It might be that your output sounds like nowhere.
