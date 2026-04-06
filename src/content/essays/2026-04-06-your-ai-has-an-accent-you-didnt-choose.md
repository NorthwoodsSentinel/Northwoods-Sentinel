---
title: "Your AI Has an Accent You Didn't Choose"
date: 2026-04-06
description: "A new study proves what I found building a personal AI for a Finnish user: every model defaults to American. The research caught up. The tools haven't."
tags: [ai, culture, calibration, voice, infrastructure, research]
draft: false
---

A researcher at the Technical University of Munich surveyed 200 AI professionals across China and Germany and found what I found in a single morning with one Finnish woman and five AI systems: culture changes everything about how people relate to AI, and nobody is building for that.

The study is called ["Culturally-Aware Artificial Intelligence: Personal Values and Technology Acceptance among AI Researchers in China and Germany"](https://doi.org/10.4108/eetiot.10618) by Dominic Lammert and colleagues, published in EAI Endorsed Transactions on Internet of Things in January 2026. It uses two established instruments — Schwartz's Portraits Value Questionnaire for personal values and Schorr's Digital Technology Acceptance Scale for AI perception — and maps the differences between how Chinese and German researchers relate to AI.

The findings are clean and unsurprising once you see them.

---

## What They Found

Chinese researchers scored higher on Self-Enhancement — power, achievement, competitive orientation. They also scored higher on Conservation — tradition, conformity, security. They reported higher AI acceptance across the board. They find AI easier to use, more useful, and they intend to use it more.

German researchers scored higher on Self-Transcendence — universalism, benevolence. They're more cautious. They want more transparency. They want more human oversight. They want to know why the AI recommended what it recommended.

Both groups value self-direction highly. Autonomy matters everywhere. The difference is what sits underneath it. In China, self-direction maps to strategic navigation within social structures. In Germany, it maps to personal independence. Same word, different architecture.

The study identifies four design dimensions that should vary by culture: degree of automation, transparency and explainability, allocation of control between human and system, and handling of uncertainty and risk. A Chinese user might want the AI to act more autonomously and present stronger recommendations. A German user might want the AI to show its reasoning and ask before proceeding.

All of this is right. And all of it stops at the level of "designers should consider this."

---

## Where It Stops

The paper calls its own findings "hypothesis-generating design considerations rather than prescriptive rules." It recommends "participatory design workshops" and "intercultural checklists" and "structured value reflection in early development phases."

I don't blame them. That's what academic papers do. They identify the problem space, validate it with instruments, and suggest future work. The contribution is real. But the gap between "culture matters in AI design" and "here is how you build a culturally-calibrated AI" is where all the interesting work lives. And that gap is enormous.

The study examines two cultures at the national level using survey instruments designed to measure values at scale. It doesn't touch communication norms. It doesn't touch emotional regulation patterns. It doesn't touch the difference between Finnish silence (which means presence and respect) and American silence (which means something is wrong). It doesn't touch the difference between German directness (which means clarity) and Chinese indirectness (which means social harmony). Those are the things that make an AI feel wrong to a user from a non-American culture, and none of them show up in a Likert scale.

Every foundation model I've worked with defaults to American communication norms. Fill silence. Perform warmth. Affirm constantly. Seek closure. Ask "how does that make you feel?" Offer unsolicited encouragement. Frame everything as progress.

These defaults are wrong for 7.5 billion non-Americans. They're not bugs. They're firmware. And no amount of "please be more direct" in a system prompt fixes firmware.

---

## What I Found Building One

In March 2026 I built a personal AI for a Finnish user. Not hypothetically. Not as a research proposal. As a working system she uses every day.

The methodology came from the same instinct as everything I build — personal friction first, then generalize. I'd already built my own personal AI infrastructure. Five systems, persistent memory, voice preservation, the whole operating layer. When someone close to me needed something similar, I assumed the hard part would be the technical setup.

The hard part was culture.

Finnish communication norms are structurally different from American ones. Silence is not empty. It's full. A Finnish person sitting quietly with you is offering presence, not waiting for you to fill the gap. An AI trained on American data interprets that silence as disengagement and starts generating filler. "Is there anything else you'd like to explore?" "That sounds like it was really meaningful for you." "Take your time — I'm here."

Every one of those responses is wrong. Not grammatically. Culturally. The AI is performing American warmth inside a Finnish interaction, and the user feels it immediately even if she can't name why.

I extracted context from her existing AI conversations. I recorded direct feedback — what felt right, what felt invasive, what felt fake. I researched Finnish communication norms, sisu, the relationship between Lutheran cultural substrate and emotional expression patterns. Then I built a system prompt calibrated to Finnish cultural firmware.

Five phases. One morning. Zero custom code. The entire calibration was a system prompt and a methodology.

The result was an AI that doesn't fill silence. Doesn't perform warmth. Doesn't affirm unless asked. Sits with discomfort instead of resolving it. Offers depth instead of breadth. Matches the user's actual communication architecture instead of the one American culture assumes is universal.

---

## What the Research Doesn't Know It's Missing

The Lammert study uses Schwartz's ten basic human values. Universalism, benevolence, tradition, conformity, security, power, achievement, hedonism, stimulation, self-direction. These are real and validated and useful at the population level.

But they don't capture communication firmware. They don't capture the thing that makes an AI feel like it belongs in your culture or feels like a foreign exchange student performing friendliness. The values tell you what someone believes. The firmware tells you how they expect to be spoken to.

A Finnish user who scores high on universalism and benevolence still doesn't want an AI that says "That's such a great insight!" after every paragraph. A Chinese user who scores high on conservation still doesn't want an AI that hedges every recommendation with three caveats about uncertainty. The values predict acceptance at the macro level. The firmware determines whether the interaction feels real at the micro level.

No published research exists on what I'm calling cultural communication firmware in AI design. I looked. The Lammert paper's 70-citation bibliography doesn't contain a single reference to communication norms at the implementation level. Hofstede's cultural dimensions are there. Schwartz's value theory is there. Value Sensitive Design is there. But the actual thing — how do you make an AI stop sounding American — isn't.

That's the open territory.

---

## The Connection to Voice

I've been building voice fidelity tools for months now. The core insight is the same one that drives the cultural calibration work: AI output sounds like it's from everywhere, which means it's from nowhere.

When I built Prufrock — a tool that scores text for indexical grounding, whether the words carry signals of actual place and group membership and lived experience — I was solving the individual version of this problem. Does this text sound like Rob? Does it carry my region, my professional tribe, my era?

The cultural calibration work is the collective version. Does this AI sound like it belongs in this culture? Does it carry the communication norms, the emotional regulation patterns, the silence conventions, the directness expectations of the person using it?

Same detection layer. Same absence. Same fix: don't smooth it. Don't clean it. Preserve the signal that makes the interaction feel grounded in a specific place and a specific person.

---

## What Comes Next

The Lammert study ends with a call for "adaptive, trustworthy, and inclusive AI-enabled collaborative systems." That's the right destination. But the path isn't more surveys. It's implementation.

The methodology I used for one Finnish user is transferable. Extract context from existing interactions. Record direct feedback on what feels right and wrong. Research the user's cultural communication norms — not their values, their norms. The way they expect silence to work. The way they expect directness to land. The way they expect emotion to be handled. Then build a calibration layer that matches.

This isn't a product yet. It's a methodology with one proven case. But the academic research is now catching up to the problem, and nobody is building the bridge between "culture matters" and "here's how you calibrate for it."

The paper proves the problem is real. The question is who builds the solution.

I know what I'd bet on.

---

*The full study: Lammert, D., Liu, M., Betz, S., Lammert, J., & Pfeffer, J. (2026). Culturally-Aware Artificial Intelligence: Personal Values and Technology Acceptance among AI Researchers in China and Germany. EAI Endorsed Transactions on Internet of Things, 11. [doi:10.4108/eetiot.10618](https://doi.org/10.4108/eetiot.10618)*

*For more on voice fidelity, cultural calibration, and building AI that sounds like it's from somewhere: [subscribe on Substack](https://substack.com/@chewvala).*
