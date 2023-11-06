#!/usr/bin/env bash

# abort on errors
set -e

# start a new git repository from a clean slate if we're manually cloning it
# otherwise it was initialized through the GitHub UI
if [[ $(git rev-list --count HEAD) -gt 1 ]]; then
    email=$(git config user.email)

    # skip creating a new git repo and commiting changes if the user's email wasn't properly configured
    if [[ $email == *@mentormate.com ]]; then
        # remove the install instructions
        # sed has an option `--in-place` to update the file in place, but macOS and GNU ship with incompatible options
        mv README.md README.md.bak
        sed '/<!-- START Template Install Instructions -->/,/<!-- END Template Install Instructions -->/d' README.md.bak >README.md
        rm README.md.bak

        version=$(git describe --tags --abbrev=0)
        head=$(git rev-parse --short HEAD)
        date=$(date -I)
        repo='https://github.com/MentorMate/react-app-template'
        compare="${repo}/compare/${head}...main"
        note="Repository was created from the template on **${date}**, [${version}](${repo}/tree/${version}). See [what's been added](${compare}) since then."

        # # append the template date
        echo "\n---\n\n$note" >>README.md

        # Nuking git repo - the most straightforward way to get rid of commit history, tags, hooks and repo config
        rm -rf .git
        git init
        git add --all
        git commit -m "Initial commit"
    else
        reset=$(tput sgr0)
        info=$(tput setaf 4)
        warning=$(tput setaf 3)
        bold=$(tput bold)
        link='https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup#_your_identity'

        echo "${warning}warn${reset} Missing or incorrect git user email."
        echo 'Expected email ending with @mentormate.com. For example:'
        echo '  john.doe@mentormate.com'
        echo 'Received:'
        echo "  $email"
        echo "${info}info${reset} Visit ${bold}${link}${reset} for how to setup your user name and email."
    fi
fi
