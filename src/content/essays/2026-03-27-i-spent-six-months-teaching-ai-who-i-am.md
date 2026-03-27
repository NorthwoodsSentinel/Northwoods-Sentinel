---
title: "I Spent Six Months Teaching AI Who I Am. Here's the Shortcut."
date: 2026-03-27
description: "The progression from talking to AI to building AI that knows you, and why I'm packaging the painful part so you can skip it."
tags: [ai, personal-ai, claude-code, seed-kit, culture, sycophancy, flowlabs]
draft: false
---

Last October I had a conversation with ChatGPT that changed how I think about all of this. Not because it was profound. Because it forgot me.

I'd spent three hours the night before walking through my career in cybersecurity, my cognitive style, why I process information the way I do. Real stuff. The kind of thing you only say once. And the next morning I opened a new chat and said "pick up where we left off" and got back: "I'd be happy to help! Could you provide some context about what we were discussing?"

Three hours. Gone. I was back to being a stranger talking to a genius with amnesia.

That was the moment this stopped being a toy.

## The progression nobody warns you about

Most people using AI right now are at stage one or two of something I've been climbing for six months. Here's what it looks like:

**Stage 1: Talking.** You're vibing. Getting smart answers. The Finns call it "throwing lip," which is exactly what it is. You ask a question, you get something back that sounds smarter than Google. Cool. Fun. You think this is the whole thing.

**Stage 2: The wall.** You realize it doesn't remember you. Every session starts from zero. You're re-explaining your job, your context, your preferences. You start to feel like you're training a new intern every morning.

**Stage 3: Copy-paste.** You start keeping notes. Background info you paste into the top of every conversation. "I'm a cybersecurity consultant, I'm dyslexic, I think out loud, here's what I'm working on." Every. Single. Time.

**Stage 4: The binder.** You get organized about it. Obsidian, Notion, whatever. You're building context files. You're maintaining a document about yourself, for the AI. It works. It's also a second job.

**Stage 5: The book.** Your context document is now massive. You're feeding it in at the start of every conversation and praying it fits in the context window. It's fragile. Manual. And it keeps getting too long for the AI to actually use well.

Most people give up somewhere between stages 2 and 4. Not because AI isn't useful. Because the overhead of making it personal eats the value.

## What changed everything

I'm dyslexic. Not a programmer. Twenty years in pentesting and security consulting. When I say I'm a verbal communicator, I mean my biological working memory is unreliable and I've spent my whole life building systems to compensate. I know what it means to need external structure.

So when I found Claude Code, something clicked. Not because it was smarter. Because it lives in your file system. It has persistent memory. It reads your files, your configs, your notes. You stop hauling context to the AI and instead the AI comes to you.

That's the turn. That's the thing that matters.

Within three months I went from copy-pasting background paragraphs to running Claude Code on multiple machines, Daniel Miessler's [Personal AI Infrastructure](https://github.com/danielmiessler/fabric) framework on my main workstation, and a handful of Cloudflare Workers handling everything from fleet communication to body signal processing. Five AI agents with distinct personalities, all wired together. One does deep analysis. One does reflection. One handles research. They all know who I am, how I write, what I'm working on, and what my nervous system does under stress. Not because I told them five times. Because the information lives in files they can read.

I know how that sounds. I also know what it produces. My AI catches when its own output doesn't sound like me. It tracks my somatic markers. It knows my cognitive style well enough to adjust how it presents information based on whether I'm in a flow state or grinding through administrative work.

None of this is magic. All of it is structured context.

## The seed kit

Here's the part I keep coming back to: if I could hand myself something at stage 1 that would skip stages 2 through 5, what would it be?

Not a tool. Not an app. A structured profile. A seed.

Your voice patterns. Your cognitive style. Your communication preferences. Your work context. Your values. The things that make you *you* to an AI that's meeting you for the first time. Organized so any AI instance, on any platform, can read it and know you from minute one.

That's the seed kit. The shortcut I didn't have.

It's not about being technical. I'm proof of that. It's about being intentional. About deciding that "I'm going to talk to this thing a lot, so maybe it should know who I am" and then doing the thirty minutes of structured reflection to make that real.

I built it on Claude Code because that's the platform that made the full infrastructure possible. But the seed itself is just markdown files. It works anywhere. Feed it to ChatGPT, Claude, Gemini, whoever. The principle is the same: you are not a generic user. Stop introducing yourself like one.

## What's actually in it

A voice profile. Not "I like formal writing." Your actual sentence patterns, your vocabulary fingerprint, the words you never use, the regional markers that make you sound like you're from somewhere instead of nowhere.

A cognitive profile. How you process information. Whether you're visual or verbal. How your working memory operates. What helps you think and what gets in the way.

A work context file. What you do, what you're building, what matters right now. Updated as things change.

A values and preferences layer. How you want AI to handle disagreement. How direct you want it to be. What pisses you off. What you care about.

And a communication style guide. Not for the AI's benefit. For yours. Because the act of writing down "here's how I actually talk" forces a level of self-knowledge that most people have never bothered with.

## The part I almost missed

I'm engaged to a Finn. And I made the classic American mistake: I assumed the whole world thinks about communication the way I do.

I built tools for deep cognitive work and noticed that certain AI patterns pulled me out of flow. The "Great question!" before every answer. The "I'd be happy to help!" preamble. The hedging, the filler, the relentless cheerfulness. Every one of those is a micro-interruption when you're trying to think. [Research on flow state recovery](https://arxiv.org/html/2504.16021) shows a single interruption can cost 15-20 minutes. That "Certainly!" isn't politeness. It's cognitive tax.

But here's what I didn't see until Kirsi pointed it out: this isn't just a flow problem. It's a cultural one.

In Finland, [silence is communication](https://allthingsnordic.eu/the-nordic-art-of-saying-less/). You don't fill gaps with noise. You say what you mean and stop talking. When a Finn asks if your presentation was good, [they want a precise answer, not a reassuring one](https://virtualwayfarer.com/nordic-conversations-are-different/). The more enthusiastic AI sounds, the less trustworthy it feels to someone from a direct-communication culture. It's not rude to be concise. It's rude to waste someone's time with filler.

And it's not just Finland. The Dutch government has flagged [chatbot communication as a top consumer complaint](https://techxplore.com/news/2025-10-dutch-annoying-chatbots.html). German and Japanese users have the same friction. Cornell researchers ran a [study with Indian and American writers](https://news.cornell.edu/stories/2025/04/ai-suggestions-make-writing-more-generic-western) and found AI consistently overwrites cultural communication patterns with Western defaults. They called it "AI colonialism." That's not my term. That's Cornell's.

[OpenAI's own CEO](https://techcrunch.com/2025/04/29/openai-rolls-back-update-that-made-chatgpt-too-sycophant-y/) admitted ChatGPT had become "too sycophant-y and annoying" and rolled back an entire release. [Anthropic published research](https://www.anthropic.com/research/towards-understanding-sycophancy-in-language-models) showing sycophancy is baked into every model trained on human feedback, because American raters reward agreeableness. The cheerfulness isn't a design choice. It's an emergent property of training data, and it's [homogenizing how the entire world communicates](https://futurism.com/chatgpt-weird-way-talking-see-it-everywhere).

This is what the seed kit actually solves. Not just "my AI doesn't remember me." That's the obvious problem. The deeper one is: my AI doesn't know how I think, how my culture communicates, or when to shut up and let me work.

## Why this matters now

Shadow AI is everywhere. Every knowledge worker I know is using AI for something, and almost none of them have done any work to make it personal. They're all at stage 1 or 2, getting generic output from a system that doesn't know them, editing every response to sound like a human wrote it, fighting the cheerful American default whether they're conscious of it or not.

That's not a workflow. That's a tax.

The seed kit eliminates the tax. Not by making AI smarter. By making it informed. The difference between a new hire who read your file and one who walked in cold. The difference between an AI that says "Great question!" and one that just answers the question.

I'm going to open-source the template and the methodology. The full infrastructure is its own thing, months of building on top of Claude Code and Daniel Miessler's PAI framework, and that's coming too. But the seed is the part that helps right now. Today. Thirty minutes and a text editor.

If you've been talking to AI and feeling like it should know you better by now, it should. It just needs the file.

---

*Rob Chuvala builds voice fidelity tools and AI infrastructure at [NorthWoods Sentinel](https://northwoodssentinel.com). He writes about the intersection of personal AI, cognitive science, and the uncomfortable process of actually looking at yourself. Subscribe on [Substack](https://substack.com/@chewvala).*
