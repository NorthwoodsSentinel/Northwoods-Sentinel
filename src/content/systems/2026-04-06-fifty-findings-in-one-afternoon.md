---
title: "Fifty Findings in One Afternoon"
date: 2026-04-06
description: "I pointed an AI fleet at my own infrastructure and it found fifty security issues. Then I built the pipeline to make sure it never happens again."
tags: [cybersecurity, infrastructure, ai, audit, pipeline]
draft: false
domain: "cybersecurity"
---

Last week I ran a security audit against my own infrastructure. Not a client's. Mine. Nineteen repositories, a fleet of Cloudflare Workers, API keys in three different secret stores, OAuth tokens, webhook endpoints, and a growing collection of tools that talk to each other across the internet.

I found fifty issues. In one afternoon.

---

## Why I Audited Myself

I build security infrastructure for a living. Twenty years of pentesting, red teaming, incident response. I know what bad looks like. And I'd been shipping fast — standing up Workers, deploying tools, making things public — with the urgency of someone who finally has the freedom to build what he wants.

That urgency is exactly when mistakes happen. I know this because I've exploited that pattern in other people's environments for two decades.

So I pointed the same methodology at myself. Not a vulnerability scanner. Not a checklist. The same approach I'd use on a client: enumerate the attack surface, identify the assets, test the assumptions, document everything.

---

## What I Found

The fifty findings broke into predictable categories.

**Secrets in history.** A plaintext API key committed to a private repo during initial development, removed in the next commit, still sitting in git history. This is the most common finding in every security assessment I've ever run, and I did it to myself. The fix isn't deleting the file. It's rotating the key and scrubbing history with git-filter-repo.

**CORS too wide.** Several Workers had `Access-Control-Allow-Origin: *` during development that never got scoped down. In a personal tool, the blast radius is small. In a pattern you're about to open source, it's a teaching moment for everyone who forks it.

**Missing security headers.** No CSP, no HSTS, no X-Content-Type-Options on early deployments. The headers don't prevent exploitation by themselves, but their absence signals "this was built fast and never hardened."

**Auth assumptions.** A dashboard that checked same-origin as a proxy for authentication. If the request came from the same domain, it skipped the API key check. That's not auth. That's a browser-enforced suggestion.

**Rate limiting gaps.** Registration endpoints without rate limits. Telemetry ingestion without per-IP throttling. The kind of thing that works fine with one user and falls over the moment anyone else shows up.

None of these are sophisticated. That's the point. The most dangerous findings are never sophisticated. They're the obvious things you skipped because you were moving fast and trusted yourself.

---

## The Pipeline

Finding fifty issues is useful once. Building a system that prevents the fifty-first is useful forever.

I built a pre-deploy gate. Every deployment now runs through a checklist:

- **Secrets scan** — git history, environment variables, hardcoded strings
- **Security headers** — HSTS, CSP, X-Frame-Options, X-Content-Type-Options on every public endpoint
- **CORS audit** — explicit origin allowlists, no wildcards in production
- **Auth verification** — every endpoint either has authentication or a documented reason it doesn't
- **Rate limiting** — per-IP throttling on any endpoint that accepts input
- **Input validation** — length limits, type checks, sanitization on anything that touches a database

The gate runs before every `wrangler deploy`. It's not optional. It's not a suggestion. If it fails, the deploy doesn't happen.

---

## What I Learned

The same pattern I've seen in every client engagement played out in my own infrastructure: the person building the system trusts themselves too much to audit it. The assumption is "I know what I'm doing, I'll fix it later." Later never comes because the system works and there's always something more interesting to build.

The audit took one afternoon. The pipeline took another. Two afternoons to go from "I hope it's secure" to "I know it's secure, and I'll know if it stops being secure."

Twenty years of telling clients to do this. Turns out I needed to hear it too.

---

*For more on building infrastructure that earns its trust: [subscribe on Substack](https://substack.com/@chewvala).*
