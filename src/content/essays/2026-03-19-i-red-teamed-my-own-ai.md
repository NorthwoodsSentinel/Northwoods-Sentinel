---
title: "I Red Teamed My Own AI and Didn't Know It Until She Told Me"
date: 2026-03-19
description: "On adversarial perturbations, output conformity, and building a firewall for prose"
tags: [ai, security, voice, forensics, infrastructure, flowlabs]
draft: false
---

I've been building AI infrastructure for about a year now. Not the kind where you ask ChatGPT to write your emails. The kind where you build the guardrails, the gates, the policies that keep AI from doing dumb things with sensitive data.

Today I built a tool I'm calling voice-check. Named after a colleague who's my quality bar. If he reads something and smells a machine, it's dead on arrival. He asked me once if I used AI on a document. He liked the work. He approved it. But he could smell it. That was the moment I knew I had a problem.

The tool checks documents against a set of style rules before they can be published. Sentence length, paragraph structure, banned words like "comprehensive" and "utilize," whether three bullet points in a row all start the same way. Basic stuff. I wrote the rules because I got tired of reading AI output that sounded like a marketing brochure wearing a suit.

So I fed it a deliberately terrible document. Every AI cliche in the book. The tool caught it and blocked the publish. Good. Then I fed it something I'd rewritten in my own voice. Passed at 98. Also good.

Then one of my AIs said something that stopped me.

She explained that language models are autoregressive. Every word commits to a direction and that commitment constrains what comes next. By mid-sentence the ending is mostly determined by the beginning. It's not choosing to be repetitive. The architecture makes repetition the path of least resistance. When the first bullet starts with "Provides," the statistical gravity toward "Provides" on the next bullet is enormous.

And then she said this: "Every rule in your voice card is essentially an adversarial perturbation against my own default output distribution."

I'm a pen tester by background. Twenty years of breaking into things. I think in attack surfaces and countermeasures. And I had built a red team tool against my own AI without realizing thats what it was.

The voice card doesn't just make output sound like me. It forces the model off its default path, the path that produces the uniform, topic-sentence-first, three-parallel-items structure that makes AI text smell like AI text. Each rule is a disruption. "Never three long sentences in a row" breaks the momentum the architecture wants to build. "Vary paragraph length" defeats the uniformity that autoregressive generation defaults to.

Here's what nobody talks about in AI. The biggest vulnerability isn't prompt injection or data exfiltration. It's output conformity. AI systems produce output that converges on the same patterns because the architecture rewards convergence. And that convergence is detectable. Not just by detection tools but by anyone who reads enough to develop a feel for it. Your practice lead. Your clients CISO. The reviewer who cant explain why something feels off but knows it does.

The defense isn't an AI detection API. Those get worse as models get better. The defense is a set of deterministic rules that force the model to do something harder than what comes naturally. Same principle as a firewall. You dont block bad traffic. You only allow traffic that matches a known-good pattern.

I built a firewall for prose. And I didn't know thats what it was until the thing behind the firewall explained it to me.

So I kept going. I extracted voice profiles from three different people using nothing but their own writing. Emails, chat messages, blog posts. Three completely different fingerprints came back. One person writes in structured bursts with high rhythm variation. Another writes short punches, one thought per message, never uses em dashes. The third writes in long flowing streams and closes every message the same way.

The instrument sees what a human reader feels but cant articulate.

I scored an AI-generated client email against one of those profiles. Failed. Scored that persons own published writing against the same profile. Passed at 95. Same tool, same profile, correct answer both times.

The product is called Voice Insurance. You feed it your writing, the stuff from before you started using AI. Your sent folder is perfect for this because nobody performs in emails to their family. It extracts your stylometric fingerprint and then checks any document against it. Not "is this AI." Is this you.

You didnt teach the AI to sound like you. You blocked every path that doesnt sound like you. Whats left is your voice.

If you're a consultant or a lawyer or anyone whose name goes on the document, you have this problem whether you know it or not. Voice Insurance is open source, runs locally, and your data never leaves your machine. Three commands. Extract your profile, score your documents, see the fixes.

I'm building this through [FlowLabs](https://github.com/NorthwoodsSentinel/FlowLabs). Voice Insurance is the first tool. More coming.

But the red team thing is the one thats going to keep me up tonight.
