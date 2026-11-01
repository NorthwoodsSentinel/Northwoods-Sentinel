# Kintsugi

Kintsugi is the Japanese art of mending broken pottery with gold, so the repair becomes part of the object's history instead of something hidden.

This file is the same idea for code. Every fix here leaves a seam in three places, all carrying the same gold line:

- a short `kintsugi:` comment at the repair site;
- a `Kintsugi:` trailer on the commit;
- an entry in this append-only ledger.

The seam shows the break; it doesn't hide it. Security fixes describe what kind of thing was mended, never how to exploit it.

A repair is entered as "review pending". The reviewer is recorded only after the review has happened, in a later commit that names the verdict and the commit it reviewed, so this ledger never claims a review before it exists.

| Date | What broke | How it was mended | Mended by / reviewed by | Gold line |
|---|---|---|---|---|
| 2026-10-31 | The deploy workflow gave the Cloudflare token to actions referenced by movable tags (`@v4`, `@v3`). Those actions ran on Node 20, end of life since April 2026, and Wrangler was installed as whatever `latest` was. | Each action pinned to the full commit SHA of a Node 24 release (checkout v7.0.1, setup-node v7.1.0, wrangler-action v4.1.3); Wrangler pinned to 4.151.1; the build moved to Node 22 LTS; checkout no longer leaves the git token on disk; the job's unused `deployments: write` permission removed. | Margin / Codex read-only audit, AUDIT: pass, reviewed 14d6dc6 | *The key once passed through hands held only by a name that could be moved, on a runtime already past its end; now each hand is one fixed commit on living ground, and the crack where trust was borrowed runs gold.* |
| 2026-10-31 | An essay quoted a device credential in full. | The published value is reduced to its first and last four characters; nothing else in the essay changed. | Margin / redaction directed by the author, Rob, 2026-10-31 | *The story told the key out loud, the whole of it, to anyone passing; now it keeps the first and last of it, and the middle is gold.* |
| 2026-11-01 | The site ran on Astro 5, carrying 1 critical and 17 high advisories, and committed two lockfiles (`bun.lock`, `package-lock.json`) while CI installed from only one, so they could drift. | Astro 7.4.0 with rss 4.0.19, sitemap 3.7.4 and markdown-remark 7.3.3, all pinned exactly. Collections moved to `src/content.config.ts` with glob loaders. `bun.lock` is now the only lockfile; CI runs `bun install --frozen-lockfile` (setup-bun pinned by SHA). Markdown stays on the `unified()` remark pipeline, because Astro 7's default turns `--` into an en dash. Rendered text, links and paths match the Astro 5 build on all 78 pages, except one quote mark now curls the right way. `bun audit`: 0. | Margin / review pending | *The house was rebuilt on new ground, and the old hand that drew every long dash was kept, so no sentence in it shortened its breath; the seam runs gold.* |
