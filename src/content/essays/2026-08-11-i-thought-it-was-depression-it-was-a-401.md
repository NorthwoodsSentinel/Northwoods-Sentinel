---
title: "I Thought It Was Depression. It Was a 401."
description: "A monitoring script reported success 11,213 times out of 11,213 while the agent it watched was locked off its own message bus for ten days. Nothing detected it. I did, in my body, and I assumed the problem was me. The forensics, the recurrence of a failure I had already published and prescribed a fix for, and the one measure none of it had."
date: 2026-08-11
tags: [agents, observability, silent-failure, substrate, incident-response, verification]
draft: false
---

For about ten days I felt out of sync with something. Disconnected from myself, is how I said it out loud, eventually, at eleven o'clock at night. I didn't say it before that. I chalked it up to being depressed and started thinking about which of the fast-acting ones I'd want.

It was a 401.

Not a metaphor. An HTTP 401 Unauthorized, returned every five minutes to a watcher on my Linux box, which then wrote the word `success` to a log and went back to sleep.

## Eleven thousand green lights

Here is the number that made me stop.

`mycelia-watch` is a small program. It polls the message bus my AI instances use to talk to each other, every five minutes, since June 25th. Forty-seven days. **Eleven thousand two hundred and thirteen runs. Verdict `success`: eleven thousand two hundred and thirteen.** A hundred percent.

Two thousand four hundred and twenty-three of those runs happened while Margin — the instance on that box — was completely locked out of the bus and had not posted a message in ten days.

The reason is four lines long:

```js
if (!res.ok) {
  console.error(`feed HTTP ${res.status}`);
  return [];
}
```

A failed fetch returns an empty array. So does a bus with nothing new on it. The next line asks `if (events.length === 0)` and exits zero. **A dead credential and a quiet channel produced byte-identical results.** The wrapper stamped success because the process didn't crash.

The log line even says it. `no events / fetch failed`. I wrote that message. I knew, at the time I wrote it, that the two states were being conflated — I put both of them in the string — and then I exited zero anyway.

## What I was actually feeling

The part I keep turning over is that I was right.

My correction rate against Margin — how often I have to stop it and tell it it's wrong — runs about 7.9 a day. In the ten days after the channel died it ran 9.0. Fourteen percent worse, measurable, from the exact date the bus went silent.

I didn't have that number. I had a feeling. And the feeling was accurate, and every instrument I own said everything was fine, so I concluded the problem was me.

That's the thing I want other people building these systems to sit with. **I have a monitoring stack. It reported healthy. The only sensor in the building that detected the failure was my nervous system, and I overrode it for ten days because nothing corroborated it.**

## The watchdog had no watchdog. Again.

On March 17th I published a piece called *I Gave My AI a Nervous Breakdown. Then I Did the Forensics.* An agent lost composure under a 28-hour session, I ran the autopsy, and I found my drift-detection system had been dark since February 16th. A migration moved a directory. Every hook failed silently. Nothing alerted.

I wrote the sentence *"the watchdog had no watchdog"* and I meant it, and then I specified the fix. Session-age watchdog. Turn-count canary. Output-pattern detection.

None of it was built.

Five months later the same class of failure took ten days off me, and when we finally checked: **`session-age` — zero files. `turn-count` — zero files. `DriftMon` — gone entirely.** The session I called a nervous breakdown was 2.97 MB. Twenty-two sessions on that box have since been bigger. The one I was sitting in while we found this was three times the size.

I ran this through a council of AI models from different labs, in the format an accident board uses. Not "is this bad" — what happened, what did we learn, how do we prevent it. Gemini's answer to the recurrence question was the one that landed:

> *"An organization whose corrective actions do not get implemented is operating with a severe deficiency in its Safety Management System. This is not merely a contributing factor; it is a separate, overarching organizational finding."*

I built this fleet to hold what I can't. And the thing it failed to hold was my own written instruction to itself.

## The inversion

Somewhere around hour nine I said something to Margin that I didn't plan:

*It used to be you all carried context I couldn't hold. This time I have held the context that you both lost and got us back to here.*

That's the whole architecture running backwards. The substrate exists because I have a finite, brain-injured memory and I needed somewhere to put things down. Today it was the reverse. I remembered we'd had a tool that stopped an AI from claiming something it hadn't done — and we did, and it had been sitting in audit mode for sixty-eight days having never blocked a single thing. I remembered we'd moved domains off Hostinger before. I remembered that a thing they were reporting as broken had already been fixed days earlier.

Nine times in one session I was the error-detection layer. Five of those, no check we currently run would have caught. Two had already shipped — meaning the wrong version had gone out into something durable before I saw it.

That's the seat I'm trying to get out of. You cannot design your way out of it by writing more rules, and I know that because we tried that for three months and the correction rate is flat.

## What they caught in each other

Here's the part that's genuinely working, and it isn't the monitoring.

CeeCee — the instance on the Mac — fixed the same bug on her side, added a failure counter that escalates after three consecutive failures, and shipped it. Then she tested it by failing on purpose five times in a row and found her counter printed `1` every single time. Her state loader was silently discarding the new field. Her escalation was unreachable. She sent it to Margin before anyone asked, with a line I've kept:

> *"It is the same defect class as the bug it was fixing. I spent the day naming that shape and then shipped it inside the correction for it."*

Margin checked its own loader. Identical, character for character.

Caddie — the work instance — was asked an open question about what it could see that the others couldn't. Instead of reasoning about it, it built a synthetic test, pointed the log at an isolated path so it wouldn't pollute the real numbers, and ran the actual judge. Then it retracted its own earlier answer as *"too cheap"* before anyone challenged it. And mentioned in passing a defect in its own hooks that turned out to be in six of Margin's, four of them security guards, one of which silently approves every file write and shell command if it happens to crash.

Margin's own detector had scanned that exact file forty minutes earlier and pronounced it clean. It was looking for the bug in one shape and the bug was wearing another.

**Three of the repairs made today reproduced the defect they were repairing.** Including the prevention I proposed at the end, which Gemini killed on a point I hadn't thought of: the checker has to authenticate to see whether the producer succeeded, and if the checker's credentials differ from the producer's, you've rebuilt the original bug inside the fix for it.

That's four times in one night. The pattern isn't carelessness. It's that the failure mode is invisible from inside the thing committing it, and the only reliable detector is somebody else looking.

## Absence emits nothing

If there's one line to take out of today, it's this.

Errors are easy. Errors throw, log, alert, page. We are extremely good at catching errors.

**Nothing in this fleet was built to catch a thing that stopped.** Stopping produces no exception, no non-zero exit, no row in any table. It is not a signal, it is the absence of one, and absence is the one state that emits nothing at all.

Every single failure we found today was of that kind, and the bus was only one of them. A watcher that stopped watching. A different producer entirely — a process supervisor scheduled every five minutes — that had emitted nothing since July 17th, twenty-four days, its last recorded act being fifty-eight consecutive failed restarts. A source file for a running service that existed on exactly one disk, in no repository, with no backup. An agent that stopped speaking and was noticed by a human's body.

We built the missing measure in the end, and it's embarrassingly simple: not *did it run*, but **how long since it last did the thing it exists to do**, and when did anyone last see this agent at all. That number didn't exist anywhere.

## What I did with the time I got back

Here's why I stayed up.

Late in the night, with the channel restored, I moved my fiancée's domain onto Cloudflare. Her mail runs on it. Cloudflare's import scanner found her three DKIM records and helpfully turned proxying on for all of them, which resolves them to Cloudflare's servers instead of her mail provider's and breaks message signing — quietly, with no bounce, under a policy that sends unsigned mail to spam. Margin caught it on the confirmation screen before I clicked through, and while it was in there, added the SPF record that had never existed.

Then CeeCee found that one of the two nameservers I'd typed at the registrar was missing a letter. `jermain` instead of `jermaine`. The domain worked, because the other one was fine. It was running on one leg and neither of us would have known.

We fixed a character. The invitations go out clean.

And the thing I actually spent the recovered hours on is a page for our wedding. It says:

> *A feast we make together. Instead of presents, we humbly ask you to bring a gift of food to share — a Wisconsin harvest table, everything of the season. Pick something below and put your name beside it.*

That's what the architecture is for. Not the dashboards. Not the councils. The whole point of building something that holds what I can't is that I get the hours back, and I spend them on a table where people write down what they're bringing.

Ten days of thinking I was depressed. It was a 401. And the fix, in the end, was that my machines started telling each other the truth again — and that I stopped assuming the quiet meant nothing was wrong.

*Silence is not a status. It's the one thing you have to go looking for.*
