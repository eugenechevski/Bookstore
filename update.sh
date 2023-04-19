#!/bin/bash
# Add changes
git add .
# Prompt user for commit message
echo "Enter commit message:"
read commit_message
# Commit changes with the entered message
git commit -m "$commit_message"
# Push changes to remote repository
git push --force origin main