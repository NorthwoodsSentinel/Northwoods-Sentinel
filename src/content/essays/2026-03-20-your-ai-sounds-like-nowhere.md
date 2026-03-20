---
title: "Your AI Sounds Like Nowhere"
date: 2026-03-20
description: "A mangled idiom, four AI systems, and the detection layer that linguistics already named but nobody built"
tags: [ai, detection, voice, linguistics, tools, infrastructure]
draft: false
---

This morning my AI wrote "don't rock the ship" instead of "don't rock the boat."

I almost missed it. The post was good. Voice was right, rhythm was right, facts were right. Two of my AI systems reviewed it. Neither caught the idiom. I caught it because my eye snagged on the word "ship" and something in my chest said wrong.

That's a six-word error in a 400-word post. But it opened a door I wasn't expecting to walk through.

---

## Why the Error Happens

My first instinct was vocabulary. The AI picked a synonym. Ship, boat, close enough. But that's not what happened.

"Don't rock the boat" is a frozen expression. The words are fixed. You don't rock the ship, the canoe, or the vessel. You rock the boat. Humans store these phrases whole, the way you store a phone number. You don't reconstruct it from digits each time. You retrieve it.

AI doesn't retrieve. It predicts. The next most likely token given the context. "Ship" is statistically plausible after "rock the." It's just not the phrase.

And that's the tell. Not a wrong word. A missing retrieval. The AI doesn't have the phrase in its bones because it doesn't have bones. It doesn't have a place where it first heard the expression, a parent who said it, a meeting where someone used it wrong and got corrected. It has probability distributions across training data from everywhere.

Which means it sounds like nowhere.

---

## The Question I Asked Next

I run multiple AI systems. They have different strengths. One is built for deep reflection and brainstorming. Another handles large-scale research across academic sources. A third handles my code and infrastructure. They don't talk to each other directly. I'm the routing layer.

When the idiom thing clicked, I stopped working on the post and asked a question I didn't know the answer to: is "sounds like nowhere" a real concept in linguistics, or did I just make it up?

I wrote a research prompt. Described the six failure patterns we'd found that morning. Mangled idioms. Narrative bias overriding facts. Regional absence. Confidentiality leaks. Excitement-driven verification skipping. And the big one: text that passes every grammar check and style check but fails the "has this person actually lived this?" check.

I sent the same prompt to two different AI research systems and waited.

---

## What Came Back

Turns out linguistics already has a name for what I was describing. Several names.

**Indexicality** is the concept that language points to the speaker's identity. Where they're from, what group they belong to, what era they grew up in. Every word choice is a signal. Not just what you say but where it places you.

**Shibboleths** are the specific markers that reveal membership. In Wisconsin, you say "bubbler" for drinking fountain. You say "pop" for soda. You don't think about these. They just come out. And when they don't come out, when the text is clean and correct but carries none of those markers, a tuned ear hears the absence.

**Idiolect** is your personal linguistic fingerprint. Forensic linguists use it in court. Every person has stable patterns of phrasing, word choice, rhythm that are as unique as handwriting. AI can't have an idiolect because it's trained on the aggregate. It has everyone's patterns. Which means it has no one's.

**Formulaic sequences** is what linguists call frozen expressions. Idioms, collocations, proverbs, jargon phrases. "Strong tea" not "powerful tea." "Lateral movement" not "sideways movement." Humans process these as chunks. AI reconstructs them from tokens and occasionally gets close but wrong.

I didn't know any of these terms at 8am. By 9am I had the academic framework for something I'd been sensing but couldn't name. That's the research amplifier at work. I don't need to be a linguist. I need to know what question to ask and where to send it.

---

## Thirteen Ways Your AI Sounds Like Nowhere

Between my research systems and my own analysis, we mapped thirteen distinct failure modes. They all share the same root: the text is fluent but ungrounded. No lived experience underneath the words.

The first few are mechanical. Mangled idioms. Wrong regional markers. Cliche sensory descriptions like "my heart was racing" or "the room went silent." Vague timestamps where specific ones should be. These are detectable with pattern matching.

The deeper ones are harder.

**Stance laundering.** The AI keeps your facts but swaps your emotional relationship to them. Irritation becomes polished concern. Uncertainty becomes tidy confidence. The information survives but your actual position gets cleaned up. One of my research systems coined this term on the spot. It's not in the literature yet. It should be.

**Narrative pressure.** The AI prefers a better story over a true one. This morning, one of my systems wrote "four weeks in" instead of "eight months in" because four weeks fit the discovery narrative better. The story sounded more compelling slightly wrong. That's not hallucination. That's autoregressive generation optimizing for narrative coherence over factual accuracy. A 2024 paper out of ACL found that hallucinated outputs actually score higher on narrative coherence than truthful ones. The lies read better. Think about that.

**Indexical inconsistency.** The AI includes a few authentic markers but combines them in ways a real person never would. Midwest vocabulary with West Coast rhythm. Union-organizer language inside startup speak. Gen X references embedded in Gen Z cadence. The markers are individually right but collectively impossible. Like a phishing email that gets the company logo right but uses the wrong regional greeting.

That last one connected directly to something I already knew. Social engineering relies on matching the target's cultural environment. Phishing emails that use the wrong idiom for the region get caught. Same principle, reversed. AI output that uses no regional markers gets caught by anyone with a tuned ear.

Twenty years of offensive security pattern recognition, applied to linguistics I learned in two hours. Same instinct. Different target.

---

## The Tool

I built it the same morning. Because that's what I do. Personal friction first, solution second.

The tool runs ten layers of checks. Five are automated: formulaic integrity against a corpus of 140 frozen expressions and 25 known mangles. Regional marker presence and absence. Register consistency. Embodied detail cliches. Temporal vagueness. Five more are a manual checklist for things code can't catch: community-of-practice alignment, information provenance, cross-layer consistency, narrative truth, stance authenticity.

It scores the automated layers, prints the manual checklist, and asks ten yes-or-no questions before you publish anything. Three or more yes answers means rewrite.

I tested it against the LinkedIn post that started all of this. 100 out of 100. Which makes sense. I wrote that post. It has my region in it. My professional tribe. My era. MS08-067 dates me to a specific moment in offensive security history. "Shell" and "box" and "lateral movement" mark me as someone who spent years breaking into networks, not reading about it. Those signals are invisible when they're right and obvious when they're missing.

Then I tested it against a deliberately AI-generated paragraph full of "certainly" and "robust" and "it is important to note." 65 out of 100. Fail. Not because of the banned words. My other tool catches those. It failed because the text had no region, cliche embodied descriptions, and temporal vagueness. Three different layers, same diagnosis: this text is from nowhere.

---

## What I Actually Built

Not AI detection. There are a dozen tools that do statistical analysis on token distributions and perplexity scores. They catch some things. They miss the deeper signal.

What I built is closer to what a sociolinguist would call an **indexical grounding layer**. It checks whether text carries the signals of actual place, group membership, access rights, lived experience, and time. Whether the words have somewhere underneath them.

That framing came from my research systems. The tool came from me. The connection between forensic linguistics and phishing detection came from twenty years of doing the second thing and two hours of learning about the first.

Every product I've built follows the same pattern. I hit friction. I solve it for myself. Then I look up and realize other people have the same friction and there's a name for it I didn't know.

The name for this one is indexical grounding. The tool is called Prufrock. I didn't explain why to the AI that helped me build it. It said "I get it." It might. But it'll never feel the gap between the presented self and the real one the way Eliot's narrator does. The way anyone does who's ever wondered if they dare.

That gap is what the tool measures. The distance between what the text says and where the text is actually from.

---

*For more writing on AI, cognition, and building infrastructure that thinks with you: [subscribe on Substack](https://substack.com/@chewvala).*
