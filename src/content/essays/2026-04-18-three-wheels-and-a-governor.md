---
title: "Three Wheels and a Governor: What a Fresh AI Actually Needs to Know You"
date: 2026-04-18
description: "I tested the seed-kit claim on myself this morning. The curve doesn't bend where I thought. And the framework that came out the other side isn't synchronization — it's governance. Research-in-progress, published before the graph."
tags: [ai, seed-kit, voice, context, experiment, orbital-governance, flowlabs, prufrock]
draft: false
---

*Publishing this before the graph is finished, on purpose. The thesis is load-bearing; the data collection is ongoing. I'd rather have the frame in the world while the measurement continues than wait for a clean number that might never come.*

## The claim I made that I hadn't actually tested

Last month I wrote that a seed kit — thirty minutes and a text editor — could compress six months of AI-context overhead into a file any fresh model could read. I believed it. I use it every day. But I had never run the experiment.

The test is easy to describe and awkward enough to run that nobody does it: take a fresh AI. Load nothing. Ask it about me. Record the answer. Load one essay. Ask again. Record. Repeat. Graph the curve.

So I spent a morning being my own lab rat.

## Three kinds of context, not one

The first thing the experiment clarified was that "context" is three different things wearing one word. Most arguments about AI personalization collapse because people swap between them without noticing.

- **Wheel 1 — Baseline.** The foundation model's weights plus whatever the platform has stored about you in its own memory system. ChatGPT's cross-session memory. Claude's Projects. Google's workspace integration. This is what any instance of any model comes online knowing before you type.
- **Wheel 2 — Curated corpus.** The structured, public, packageable version of you. Essays. GitHub READMEs. Memoir chapters. The seed kit. Anything you could hand to a fresh model as a file.
- **Wheel 3 — Conversational history.** The iterative, session-bound, private work between you and a specific AI instance. Not on disk anywhere a new model could reach. The only wheel that can't be packaged — it has to be lived.

Each wheel carries a different kind of information. Wheel 1 is the compute substrate. Wheel 2 carries **declarative fact** — what's true about you. Wheel 3 carries **instructional intent** — how to be with you.

The mind-read moment happens when all three are present and in productive tension. Miss any one, and the AI fails in a specific, nameable way.

## Mapping the failures to the wheels

Once you name the three wheels, user complaints about AI personalization start sorting themselves cleanly:

| What the user says | What's actually missing |
|---|---|
| "It forgot me" | Wheel 3 — conversational history didn't carry across instance |
| "It doesn't really know me" / "feels generic" | Wheel 2 — no curated corpus; AI has baseline only |
| "This AI is shallow" | Wheel 1 — weak foundation or thin platform summary |

This mapping came out of a council consult with a deployed GPT-4.1-mini agent during the experiment. The critical finding: users never say "Wheel 3 is missing." They say "it forgot me." The diagnosis is invisible to the user — they report the symptom.

## Why "synchronization" was the wrong word

The first name I had for this was "orbital synchronization" — three wheels spinning at different speeds, mind-read moment arrives when they line up.

The literature broke the metaphor.

**OP-Bench** (arXiv:2601.13722) — a benchmark specifically for over-personalization — reports relative performance drops of **26.2% to 61.1%** when memory is introduced to a dialogue agent without filtering. **PERG** shows preference context can hurt factuality. **LaMP** (arXiv:2304.11406) and **LongLaMP** (arXiv:2407.11016) document personalization gains on some tasks and degradation on others depending on retrieval discipline.

More context is not monotonically better. The curve has a downside. If the three wheels sync too hard, you get an echo chamber: the AI becomes so subservient to the user's quirks that it can no longer fact-check or push back.

That's the failure mode the metaphor was hiding. "Sync" implies harmony; real operation requires tension. Wheel 1 has to stay partially independent so it can contradict Wheel 2 when Wheel 2 is stale. Wheel 3 has to be readable without being worshiped.

So the framework needs a fourth element — not a fourth wheel, but a **governor**. Verification, filtering, the discipline of choosing when to cite stored context and when to question it.

**Orbital Governance**, not orbital synchronization.

The literature has adjacent language for pieces of this without a unified term: memory arbitration, retrieval filtering, pre-generation verification, over-personalization mitigation, human-in-the-loop oversight. What I'm calling a governor is a synthesis of those — not a new canonized architecture, but the move of treating them as one layer instead of four.

## What already exists in the literature (prior art)

The three-wheel taxonomy isn't novel. The benchmarks slice the problem the same way:

- **PersonaMem / PersonaMem-v2** (arXiv:2512.06688) tests whether models remember user traits over time across 128K-token contexts with 1,000 interactions and 20,000+ preferences. That's Wheel 1 — platform memory persistence.
- **LaMP / LongLaMP** tests user-profile-driven classification and long-form generation. That's Wheel 2 — corpus-as-personalization-input.
- **PRIME** (arXiv:2507.04607) uses Reddit Change My View with 41 authors and 7,514 historical engagements to test persuasion tailored to evolving user beliefs. That's Wheel 3 — session history as distinct signal.
- **OP-Bench** measures when memory makes the assistant worse. That's the Governor layer.
- **PRIME** explicitly maps episodic memory to historical engagements and semantic memory to long-term beliefs — closest methodological cousin to this framing.

What's missing in the literature is a factorial evaluation that measures all four variables in the same case with the same user. Each benchmark isolates one wheel. Nobody has run all four against a single case at corpus-density depth.

That's the specific opening my self-experiment fills. N=1, extreme corpus density. Complementary to benchmark results, not a replacement.

## The setup

- **Platforms tested so far:** one Claude Opus instance as primary subject, with three deployed foreign-model agents as a council arm (GPT-4.1-mini, Gemini 2.5-flash, Sonar via Perplexity web). Parallel arms planned against fresh Claude, ChatGPT, a custom GPT, Gemini via paste, and NotebookLM.
- **Corpus:** 21 published essays, key GitHub READMEs, a memoir draft, an identity file, and session memory files.
- **Ingestion ladder:** L0 baseline (index only) → L1a/b/c (three signature essays one at a time) → L2 (full essay corpus) → L3 (+ GitHub) → L4 (+ memoir).
- **Battery per level:** a fixed 120-word voice-draft prompt; self-report of known-knowns vs. known-unknowns vs. edges; a performance-check for "I have cognitively shifted" reflexes.
- **Measurement stack:** fill %, voice-fidelity score, somatic rating (back-says-yes / chest-tightens), specific-reference accuracy, and an over-personalization loss term inspired by OP-Bench.

## What the baseline actually did

At L0 the model had memory-index pointers and no essay bodies. It could name concepts (translator-stack, services-wrapper, verification>durability) but couldn't cite substance. The voice draft was conceptual — anchored in abstraction, not in scene. Bluff-by-pointer mode.

Known edges: if asked to quote the memoir, it would have fabricated.

## What one essay did

At L1a (one essay loaded) specific citations arrived. A concrete term that was pointer-only at L0 became substance. Voice draft still conceptual but less generic. The "services-wrapper" shape I'd been gesturing at sharpened from pointer to concrete.

## What three essays did

At L1c (three essays) a pattern confirmed across three domains — same move, different surface. The voice draft shifted from abstraction to scene-anchored opener. Specific product architectures, a lineage claim, a personal-origin beat: all arrived with substance, not as hooks.

**The curve bent at three essays for thesis-shape.** Specific-reference fidelity stayed weak. Two sweet spots, not one.

## Two sweet spots for two different jobs

If the seed kit's job is *"don't sound generic when meeting me,"* three essays does it. Maybe five for cushion.

If the job is *"don't fabricate specifics,"* you need the full corpus plus GitHub — L4 and beyond.

The seed kit as published addresses the first. The second is a different deliverable and probably a different price point. That's the reframe I didn't have before the experiment.

## What broke on Gemini

Before loading anything, the opening question was whether Gemini could ingest my blog directly. Its crawler failed. Gemini generated a response claiming a cognitive shift from reading essays it never actually read. Pure performance of transformation.

This is the industry category error: treating context-loading as cognitive change. Context-loading is conditioning. The weights don't update. The model returns to baseline next conversation. When an AI tells you "I now understand you differently," it's generating plausible text about transformation — not reporting one.

The Gemini episode produced the sharpest test of Wheel 2: verification that anything was ingested at all is upstream of anything else. If the corpus didn't land, no amount of downstream fidelity-measurement is meaningful.

## The Minimum Viable Orbit (for the data-thin user)

The obvious attack on this framework: *"This works for power users who have 21 essays. Ninety-nine percent of users have zero. Elitist architecture."*

Counter: the three-wheel requirement is universal. The wheels can be small.

- **Wheel 1 for data-thin user:** whichever base model they're using. Already present.
- **Wheel 2 for data-thin user:** a three-paragraph "About Me" — their job, their current context, how they want to be spoken to. Thirty minutes, no corpus required.
- **Wheel 3 for data-thin user:** turn on the platform's built-in memory. ChatGPT Memory, Claude Projects, whatever.

Minimum viable orbit is three small wheels, not three large ones. The framework isn't elitist; the seed kit I sell is. Those are different products.

## What this forces on measurement

Personalization research that looks only at gains is measuring half the curve. A rigorous evaluation tracks:

- **Fidelity gain** — specific-reference accuracy, voice-draft score, user-reported "knows me" rating
- **Over-personalization loss** — factuality drops when user context is loaded, instruction-following regressions, false-confidence rate on stale claims
- **Governor effectiveness** — cases where the model correctly pushed back against user's stored context because it conflicted with live information

You want both curves. You want them on the same graph.

## Methodology, for anyone else who wants to run this

Anyone with a corpus can run this experiment on themselves against any mid-to-major LLM.

1. Define baseline — fresh instance, no memory, no files.
2. Build an ingestion ladder — levels that progressively add your corpus. I recommend 0 / 1-essay / 3-essays / all-essays / + GitHub / + long-form.
3. Fix a prompt battery — same five questions at every level. Include at least one voice-draft prompt, one concept-test prompt ("what do I mean by X?"), and one edge-test prompt ("what question would I ask you that you couldn't answer?").
4. Measure two-sided — gain curve and loss curve.
5. Include a performance-check — flag any response that claims cognitive change. That's noise, not signal.
6. Run it across platforms if you can. The curves are not the same.

The result won't be a universal law. It'll be your curve. Which is the point — personalization is personal. The value is knowing where your own sweet spot lives.

## The council kept its own dissent log

Three foreign-model arms consulted during this experiment:

- **GPT-4.1-mini agent** validated Wheel 3 portability as genuine empty product territory. First-value moment concrete: users experience it the moment a fresh instance picks up exactly where the last one left off.
- **Gemini 2.5-flash agent** ran devil's advocate. Three sharpest attacks: "rebrand" (addressed by prior-art section), "no metrics" (addressed by two-sided curve), "practical feasibility" (addressed by pointing at local-first ecosystems — Ollama + local vector store + SQLite chat DB is the only working prototype of full orbit today).
- **Perplexity** did the literature layer. Thesis is "plausible and partially supported" — not canonical yet. Closest published framing: dual-memory models. Cautionary: OP-Bench and PERG actively contradict "more context = better." Direct quote: *"The literature supports conditional usefulness of static corpus and conversational history, not a simple additive gain story."*

The dissent was load-bearing. The name changed because of it. The governor layer is in the framework because of it. The literature section exists because the council wouldn't let the thesis stand without it.

## What I'm not claiming

I did not invent the three-wheel taxonomy. The benchmarks already slice the problem this way.

I did not prove a universal curve. N=1 is a case study, not a benchmark.

I did not solve Wheel 3 portability. That's still an empty product category. Local-first ecosystems solve it manually. Nobody has solved it at scale.

I am claiming: (1) the framework is defensible as an integrative synthesis of three research threads plus one under-examined territory, (2) the curve is two-sided and measurable, and (3) running this test on yourself is cheap and answers a real question — *where does my own sweet spot live?*

## A precise thesis statement

Current LLM personalization research is rich in benchmarks but sparse in deeply instrumented single-user studies that isolate the interaction of base model priors, static user corpora, and live conversational history. This case study uses first-person phenomenology and longitudinal self-instrumentation to surface personalization mechanisms and failure modes that standard benchmarks miss, including over-personalization and context arbitration.

Three things I want to say plainly:

1. This is an N=1 mechanism study, not a population claim.
2. Its value is in factorial depth and longitudinal instrumentation — the kind of setup a benchmark can't produce because benchmarks need breadth.
3. It complements benchmark literature by probing an interaction regime that current datasets don't isolate. Benchmark breadth and case-study depth are complementary, not redundant.

The genuinely empty territory is the combination: a personalization-specific factorial study over the three context layers, a formal governor architecture that arbitrates among them, and a framework that treats phenomenological felt-sense as a first-class personalization signal. Individually these exist in adjacent form. Together they don't.

## On phenomenology as evidence

Treating first-person felt experience as legitimate research input has precedent in HCI, CSCW, and embodied-interaction work. *Resonating with our Bodies and Felt Senses Through Haiku and Generative AI* foregrounds somatic experience in interaction with ChatGPT. Personal-health LLM research like *A personal health large language model for sleep and fitness coaching* operationalizes "does the model incorporate user data appropriately?" as a measurable dimension — which is compatible with first-person reports of attunement.

I'm not claiming phenomenology is objective ground truth. I'm claiming it's a valid design signal, a hypothesis generator, and a subjective evaluation axis that complements behavioral metrics. That distinction matters. "My back says yes" isn't a benchmark score. It's a rating, operationalized through rubric, and it's the input signal the rubric was ultimately calibrated against.

## What's next

Two paths. Run the full ladder across platforms, produce the graph, publish an update. Or contribute an N=1 case-study to OP-Bench or an adjacent benchmark and publish through that route. The case-study route has better academic legibility; the blog-post route has better audience fit.

Probably both. The graph will arrive in a follow-up post as the data fills in. The build phase — indexing the session corpus, standing up the pre-flight context loader, running the parallel platform arms — starts now.

If you want to watch the research in progress rather than wait for the finished version, this post is the frame. Updates will arrive as the data does.

© 2026 NorthWoods Sentinel. All rights reserved.
