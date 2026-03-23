# Post Templates

## Usage

```bash
# Create new essay from template
POST_FILE="YYYY-MM-DD-slug.md"
cp templates/essay-template.md "src/content/essays/$POST_FILE"

# Edit content, commit, push
# Frontmatter is already there - just fill in values
```

## Pre-Commit Check

```bash
# Verify frontmatter before committing
head -10 "src/content/essays/$POST_FILE" | grep -q "draft: false" && echo "✅ Ready" || echo "❌ Check frontmatter"
```
