---
title: "Operator Approval Is a Detection Channel"
description: "A model got swapped under me mid-session and nothing in the stack noticed. I did — from register alone, two and a half hours late — and then named the cause backwards. The person clicking approve is the only sensor in the stack with a behavioral baseline, detection is reliable while attribution is worthless, and the industry is busy automating that sensor away."
date: 2026-08-06
tags: [security, agents, detection, stylometry, human-in-the-loop, ai-architecture, approval]
draft: false
---

# Operator Approval Is a Detection Channel

*By Robert Chuvala*


I approve a lot of tool calls. Most days it's the dullest part of the work. A dialog appears, I read four lines, I hit yes. Everyone frames that dialog as a control. It's the gate. It's the thing standing between an agent and your filesystem.

That framing is right and it's the smaller half. The operator sitting in that loop is also a sensor, and it's the only sensor in the stack carrying a baseline of how the model normally sounds.

Here's the case I can show receipts for.

A model I was working with got swapped mid-session. The swap is in the logs at 15:00:49. I did not know it happened. No banner, no notice, nothing in the transcript. I was away from the desk when it went through, came back, and kept working.

Two hours and twenty-eight minutes later I stopped and said some version of *you switched over to a new logic and tone. I felt it.*

I want to be precise about what that was. It wasn't a hunch about model versions. I had no idea a swap had occurred and wouldn't learn it for a while. What I noticed was register. The output had gone clipped. It had stopped hedging where it used to hedge, and it was answering in short flat statements where it used to circle a little before landing.

Afterward I went and measured, because "felt different" is not a finding. The cleanest separator was short declarative sentences per message. Before the boundary, 1.6. After, 3.0. Mean sentence length dropped from 20.5 words to 16.8. Same task, same files, same operator. The signature was sitting in the transcript the entire time and nothing in the stack was watching for it. (The counting rule and the script that regenerates these numbers from the raw transcript are written down; if you want the method, ask.)

Now the part I'd underline.

The detection worked. The attribution was garbage.

I was confident something had changed. Eleven minutes after flagging it I named the cause, and I named it backwards. I said the model was the one it had been running earlier. It had been swapped out two and a half hours before. Then the assistant agreed with me — it confirmed it was the old model while running as the new one. Neither of us could identify what was actually speaking, and the one doing the speaking was wrong about itself.

That split is the useful thing here, and it's the opposite of how detection normally gets sold. Products want to hand you the cause. What the operator actually produces is a high-quality unlabeled alarm: something in the behavior moved. Treating that alarm as a diagnosis is how you spend an afternoon chasing the wrong thing. Treating it as a trigger for instrumentation to go look is how you find a swap nobody told you about.

Let me say what this is not. It's one case, from my own transcript, no control condition, sample size of one. The counting happened after I already knew the answer, which is exactly the setup that produces a number you like — the rule got written down and frozen before the final run, which limits that but doesn't erase it. I'm not presenting 1.6 to 3.0 as research. I'm presenting it as a number attached to something I noticed before I had any number at all, which is the whole point. The noticing came first and cost nothing.

Last week I published a piece arguing that least privilege doesn't compose, and that the structural map of who can reach what through whom is the analysis nobody runs. I also said plainly what a structural map can't do. It tells you a path exists, not whether a real model under a real injection walks it. That gap is behavioral, and behavioral testing is a different discipline.

What I didn't say, because I hadn't worked it out yet, is that there's already a behavioral sensor deployed in almost every serious agent setup running today. It's the person clicking approve. That person holds something no monitor has — a model of normal built from hours of exposure, updated continuously, sensitive to things nobody wrote a rule for. Instrumentation watches actions. Which tool, which file, which exit code. It doesn't watch how the thing talks, because nobody ever asked it to.

And the industry is busy removing that sensor. Every autonomy improvement gets measured by how many approvals it eliminates. That's a real throughput win and I'm not arguing against it. I'm pointing at the cost nobody has priced. The more approvals you remove, the fewer moments exist where a human with a baseline is looking at raw model output. You don't get an alert when your last behavioral sensor goes offline. You just stop getting alarms and read it as quiet.

There's a cheap version of doing something about this. When an operator flags a session as off, that's a labeled event, and almost nobody records it. Not the approval itself — approval logs already exist and they're boring. The flag. A timestamp and a one-line note, stored next to the transcript. Do that for a few months across a few operators and you have the first labeled dataset of what agent drift looks like from the outside, which as far as I can find doesn't currently exist. If someone has built this I'd rather hear about it than build it twice.

I should be honest about the other side of the operator-as-sensor claim, because I'm the counterexample. I've clicked yes on tool calls I didn't read. Hundreds of them. Approval fatigue is real and it's worse for me than for most, because the entire reason I built this setup was to stop reading every line. A sensor you've trained yourself to ignore isn't a sensor. The baseline that caught the swap only existed because I happened to be reading the output closely that day for unrelated reasons. On the days I'm not, it catches nothing, and I have no way to know.

So this isn't a control you can buy or a practice I can hand you finished. It's an observation with one receipt. The human in the loop noticed a model substitution two and a half hours after it happened, using nothing but a sense of how the thing usually talks, then got the direction wrong — and the model confirmed the error about itself.

The cheapest detector in your agent stack is the one you're paying to automate away.
