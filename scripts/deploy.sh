#!/bin/bash
GIT_REPO_URL=$(git config --get remote.origin.url)
BUILD_FOLDER="out"

# Deploy & setup
cd $BUILD_FOLDER
git init .
git remote add origin $GIT_REPO_URL
git checkout -b gh-pages
git pull origin gh-pages --rebase

# Build
npm run build

# Add CNAME file if present
cp ../CNAME .

# Ensure static assets can be served properly
touch .nojekyll

git add .
git commit -am "Static site deploy"
git push origin gh-pages
cd ..
rm -rf $BUILD_FOLDER
