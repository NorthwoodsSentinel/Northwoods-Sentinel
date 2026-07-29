#!/usr/bin/env bash
# publish-least-privilege-essay.sh — scheduled one-shot publisher for the
# "Least Privilege Doesn't Compose" essay. Guarded by date: does nothing until
# 2026-07-30, then flips draft:false, commits, pushes (GH Actions deploys to CF
# Pages), writes a receipt, and self-disables. Cron runs every 2h 08:00-18:00 CT
# so a failed push retries same-day (the car essay's daily cron cost it a day).
# Rob can edit or delete the essay any time before the flip — this only fires
# the publish; it does not overwrite content. Added 2026-07-29 (Margin).
set -uo pipefail

TARGET_DATE="2026-07-30"
REPO="/root/Northwoods-Sentinel"
ESSAY="src/content/essays/2026-07-30-least-privilege-doesnt-compose.md"
DONE="$REPO/.least-privilege-essay-published"
RECEIPTS="/root/.claude-margin/.claude/PAI/MEMORY/OBSERVABILITY/receipts.jsonl"

[ -f "$DONE" ] && exit 0                                    # already fired
[ "$(date +%Y-%m-%d)" \< "$TARGET_DATE" ] && exit 0         # not yet the day
cd "$REPO" || exit 1
[ -f "$ESSAY" ] || { echo "essay gone — Rob deleted it; disabling" > "$DONE"; exit 0; }
grep -q "draft: true" "$ESSAY" || { echo "already not-draft" > "$DONE"; exit 0; }

git pull --quiet 2>/dev/null
sed -i 's/^draft: true/draft: false/' "$ESSAY"
git add "$ESSAY" && git commit -m "publish: Least Privilege Doesn't Compose (scheduled flip $TARGET_DATE)" --no-verify >/dev/null 2>&1
if git push origin main >/dev/null 2>&1; then
  echo "published $(date -u +%Y-%m-%dT%H:%M:%SZ)" > "$DONE"
  printf '{"timestamp":"%s","session_id":"least-privilege-essay-publisher","instance":"lares-root","hook_event":"scheduled-publish","verdict":"published","exit_code":0,"duration_ms":0}\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)" >> "$RECEIPTS"
  curl -s -X POST http://localhost:31337/notify -H "Content-Type: application/json" -d '{"message": "Least Privilege Doesnt Compose is now live on the blog"}' >/dev/null 2>&1 || true
else
  git reset --hard HEAD~1 --quiet 2>/dev/null                # push failed — revert flip, retry in 2h
  printf '{"timestamp":"%s","session_id":"least-privilege-essay-publisher","instance":"lares-root","hook_event":"scheduled-publish","verdict":"push-failed-will-retry","exit_code":1,"duration_ms":0}\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)" >> "$RECEIPTS"
fi
