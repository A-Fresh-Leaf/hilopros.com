#!/bin/bash
# Fast Auto-push script for HiLoPros

MSG="${1:-Mobile layout updates}"

cd "/Users/pavanraju/Library/CloudStorage/GoogleDrive-nadimpallipavanms@gmail.com/My Drive/HILOPROS.COM"

rm -f .git/index.lock

git add .
git commit -m "$MSG"
git push origin main

echo "✅ Fast push complete! Vercel is auto-deploying."
