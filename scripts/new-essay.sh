#!/usr/bin/env bash
set -euo pipefail

REPO="/root/northwoods-sentinel"
TEMPLATE="$REPO/templates/essay-template.md"
DEST_DIR="$REPO/src/content/essays"

read -r -p "Title: " TITLE
read -r -p "Slug (example: ai-removed-the-suffering): " SLUG

DATE="$(date +%F)"
FILE="$DEST_DIR/$DATE-$SLUG.md"

mkdir -p "$DEST_DIR"
cp "$TEMPLATE" "$FILE"

perl -0777 -i -pe \
"s/title: \"TITLE HERE\"/title: \"$TITLE\"/;
 s/date: YYYY-MM-DD/date: $DATE/;
 s/# TITLE HERE/# $TITLE/;" "$FILE"

echo
echo "Created: $FILE"
echo
echo "Next steps:"
echo "1. Edit file"
echo "2. Commit + push:"
echo "git add \"$FILE\" && git commit -m \"Add essay: $SLUG\" && git push"
echo
echo "Live URL after build:"
echo "https://northwoodssentinel.com/essays/$SLUG"
