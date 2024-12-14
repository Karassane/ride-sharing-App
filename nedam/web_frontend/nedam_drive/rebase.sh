#!/bin/bash

# Ensure you're in a Git repository and on the correct branch
if [ -d ".git" ]; then
  # Fetch the current branch name
  branch=$(git symbolic-ref --short HEAD)

  # Get the total number of commits on the current branch
  commit_count=$(git rev-list --count HEAD)

  # Ensure there are more than 1 commit
  if [ "$commit_count" -lt 2 ]; then
    echo "Not enough commits to squash."
    exit 1
  fi

  # Define the number of commits per rebase chunk
  chunk_size=10

  # Iterate over the commit history in chunks of 10 commits
  while [ "$commit_count" -gt 1 ]; do
    # Calculate the rebase target for the current chunk
    rebase_target="HEAD~$((commit_count - chunk_size))"
    
    # Check if the rebase target is valid
    if git cat-file commit "$rebase_target" &>/dev/null; then
      echo "Proceeding with rebase for commits up to $rebase_target"

      # Perform the rebase interactively and automatically squash the commits into one
      git rebase -i "$rebase_target" <<< "$(for i in $(seq 1 $chunk_size); do echo "squash"; done)"
      
      # Check if the rebase was successful
      if [ $? -eq 0 ]; then
        echo "Rebase for this chunk completed successfully."
        
        # Decrease the commit count by the chunk size
        commit_count=$((commit_count - chunk_size))
        
        # If there are still commits left, we continue rebasing in smaller chunks
      else
        echo "Rebase failed."
        exit 1
      fi
    else
      echo "Invalid rebase target. Your branch may have fewer commits than expected."
      exit 1
    fi
  done

  # After all rebases, push the squashed commit to the remote
  echo "All rebases completed. Pushing the squashed commit..."
  git push --force origin "$branch"

else
  echo "This is not a Git repository."
  exit 1
fi
