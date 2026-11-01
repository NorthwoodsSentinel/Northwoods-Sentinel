#!/usr/bin/env bash
set -euo pipefail

# kintsugi: the tool once looked for its house at one fixed address on one machine, and a title
#   with the wrong mark in it could break the press; now it finds home from where it stands and
#   sets every title as plain type, and the seam runs gold.
# The repository is wherever this script lives, so it works from any clone and any path.
REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TEMPLATE="$REPO/templates/essay-template.md"
DEST_DIR="$REPO/src/content/essays"

read -r -p "Title: " TITLE
read -r -p "Slug (example: ai-removed-the-suffering): " SLUG

case "$SLUG" in
  ""|*[!a-z0-9-]*) echo "Slug must be lowercase letters, digits and hyphens." >&2; exit 1 ;;
esac

DATE="$(date +%F)"
FILE="$DEST_DIR/$DATE-$SLUG.md"

[ -e "$FILE" ] && { echo "Already exists: $FILE" >&2; exit 1; }
mkdir -p "$DEST_DIR"
cp "$TEMPLATE" "$FILE"

# The title is passed through the environment, never spliced into the perl program, so any
# characters in it are inserted literally. Quotes and backslashes are escaped for the YAML line.
TITLE="$TITLE" DATE="$DATE" perl -0777 -i -pe '
  my $t = $ENV{TITLE}; (my $y = $t) =~ s/(["\\])/\\$1/g;
  s/title: "TITLE HERE"/title: "$y"/;
  s/date: YYYY-MM-DD/date: $ENV{DATE}/;
  s/# TITLE HERE/# $t/;
' "$FILE"

echo
echo "Created: $FILE"
echo
echo "Next steps:"
echo "1. Edit file"
echo "2. Commit + push:"
printf 'git add %q && git commit -m %q && git push\n' "$FILE" "Add essay: $SLUG"
echo
echo "Live URL after build:"
echo "https://northwoodssentinel.com/essays/$DATE-$SLUG/"
