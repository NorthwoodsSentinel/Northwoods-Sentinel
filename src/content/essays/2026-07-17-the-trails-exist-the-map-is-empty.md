---
title: "The Trails Exist. The Map Is Empty."
description: "Madison's mountain bike trails are mapped in obsessive detail — inside two platforms owned by one company. This morning I gave my own rides back to the open map, and tonight I'm giving away the design for the part that's still missing: a trail stewardship ledger a club can own. I'm not building it. Someone should."
date: 2026-07-17
tags: [commons, sovereignty, open-source, osm, mountain-biking, cloudflare, community, stewardship]
draft: false
---

# The Trails Exist. The Map Is Empty.

*By Robert Chuvala*

*On an empty open map, twenty years of feeding enclosures, and a design I'm giving away instead of building.*

The air quality was bad enough this morning that riding was off the table, so I did the next best thing and looked at maps of the places I ride. I opened Wikiloc and searched for mountain bike trails around Madison, Wisconsin.

Almost nothing.

Quarry Ridge isn't there. Cam-Rock isn't there. The westside systems I've ridden a hundred times — not there. According to the open map, the place I ride doesn't exist.

Here's the thing. Those trails are mapped. Mapped in obsessive detail — every berm, every rock garden, every condition report after every rain. That data exists because local riders donated it, trace by trace, ride by ride, for free. It just doesn't live anywhere the community can reach without going through a company. It lives in Trailforks and MTB Project, both owned by Outside Inc. The knowledge is ours. The custody isn't.

And I'll say the uncomfortable part: I helped. Years of rides, years of traces, uploaded into platforms whose business model is enclosing exactly that contribution. I spent two decades in offensive security learning to see this pattern — value flows in, control doesn't flow back — and I still fed it my rides. Wikiloc, for what it's worth, isn't the open alternative I assumed it was either. Free tier, user uploads, commons costume. The code is closed and the useful features are $9.99 behind a paywall.

So this morning I pulled my own archive instead. Sixty-one mountain bike rides off my Karoo, seventeen distinct trailheads, one GPX trace per trail system. My records, my device, no middleman. It took about an hour to get them staged for upload. The Madison area will exist on the open map by the weekend because one rider gave his own records back.

That's the small fix. This essay is about the real one — which I'm not going to build. I want someone to take it from me.

## The wrong fix is another trail app

The obvious move is to build an open Trailforks. Please don't.

Someone is already partway there, and they deserve the credit: [Wanderer](https://wanderer.to/) is a self-hosted trail database — AGPL, your server, your data, and recently ActivityPub-federated, so instances share trails the way Mastodon shares posts. Politically, it's family. If you want to host your own ride archive, use it.

But a self-hosted trail database still stores trail geometry, and trail geometry already has an open home: OpenStreetMap. OSM is the commons. It has the mappers, the license, the tooling, the twenty-year head start. Every new place trail lines get stored — however good its politics — splits the commons again. A federated silo is still a silo. Better flag, same architecture.

The gap isn't geometry. The gap is everything a volunteer trail club knows that OSM structurally cannot hold.

## What actually needs to exist

I put this design through a review panel this morning — four AI engines from different vendors arguing three rounds, with an adversary seat whose job was to kill it. The [full transcript is attached](/attachments/2026-07-17-trail-commons-kit-council-debate.md). What survived is small, and the smallness is the point.

Call it a **trail stewardship ledger**. Not a trail app. A ledger a club owns, that wraps around OSM instead of competing with it:

Trail geometry goes *into* OpenStreetMap. The ledger stores references — OSM way IDs — never its own copy of the lines.

What the ledger holds is what OSM can't. Raw GPX archives with provenance: who rode it, when, on what device — the evidence layer under the idealized line. Conditions: an append-only log of what the trail is like *right now*, which OSM rightly refuses to hold because it's ephemeral. Closures. And the sensitive layer: which lines the club has not published, because the landowner conversation hasn't happened, and a map that ignores that distinction gets trails shut down.

That last part is the actual design problem, and it's the part every trail app gets wrong. The panel converged on one insight I'll quote from my own notes: the two ways this kind of project dies — a landowner blowup over a published line, or a lone steward burning out while the data goes stale — are the same death. Both come from publish-decision anxiety. Nobody is sure what's safe to make public, so either someone publishes too much and the club loses access, or nobody publishes anything and the map rots. So the governance isn't a feature bolted on later. It *is* the product: redaction by default, publishing gated by a club officer, and a conditions log fast enough that a steward can mark a trail closed from a phone, at the trailhead, in under thirty seconds. If it's slower than that, nothing else matters.

The rest is deliberately boring: one Cloudflare Worker, R2 for the GPX files, D1 for the index, MapLibre over OSM tiles showing approved records only. Full export from day one — the entire archive, one endpoint, so leaving is always possible and staying is always a choice. First deployment on the club's own Cloudflare account, built so it can become a one-click Deploy Button once the first club proves the export path works. No accounts, no feed, no reviews, no social anything. The panel's adversary seat pushed for engagement features. It got outvoted, and it should have: engagement before legitimacy is how the last decade of platforms happened.

## The challenge

I'm not building this. I looked at it honestly and my time is committed to other work — and more to the point, the whole design argues against a single owner. A stewardship ledger built by one guy is a contradiction with a git repo.

So: it's yours. The design, the reasoning, the failure modes, the schema shape, the [full review transcript](/attachments/2026-07-17-trail-commons-kit-council-debate.md) — free, no strings, no license fee, no "reach out for partnership." If you contribute to Wanderer, this is a layer your protocol could carry. If you're a club with one dev who rides, this is a winter project with a spring payoff. If you're a mapper, the reconciliation path — GPX evidence in, steward review, OSM edit out — is the piece I'd want built first.

I spent years giving my trail knowledge to companies that sold it back to me. This morning I gave my rides to the open map, and tonight I'm giving away the design for the part that's still missing.

The trails exist. The map is empty. That's not a market opportunity.

It's a chore, and it's ours.
