#!/bin/bash
# Add changes
git add .
# Prompt user for commit message
echo "Enter commit message:"
read commit_message
# Commit changes with the entered message
git commit -m "$commit_message"
# Switch to the main branch
git checkout main
# Merge changes from the development branch into the main branch
git merge development
# Push changes to remote repository
git push origin main
# Switch back to the development branch
git checkout development