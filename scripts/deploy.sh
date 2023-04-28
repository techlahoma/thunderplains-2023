#!/bin/bash
GIT_BRANCH=$(git symbolic-ref -q HEAD)
GIT_REPO_URL=$(git config --get remote.origin.url)
BUILD_FOLDER="out"

# Build
npm run build

# Deploy & setup
cd $BUILD_FOLDER
rm .DS_Store
git init .
git remote add origin $GIT_REPO_URL
git checkout -b gh-pages || (echo "Cannot chekout gh-pages branch!" && exit 1)
# git pull origin gh-pages --rebase || (echo "Unable to pull remote changes on gh-pages branch!" && exit 1)

# Add CNAME file if present
cp ../CNAME .

# Ensure static assets can be served properly
touch .nojekyll

git add .
git commit -am "Static site deploy"
git push origin gh-pages --force
cd ..
rm -rf $BUILD_FOLDER
