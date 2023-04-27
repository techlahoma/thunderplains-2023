#!/bin/bash
GIT_REPO_URL=$(git config --get remote.origin.url)
BUILD_FOLDER="out"

# Build
npm run build

# Deploy
cd $BUILD_FOLDER
git init .
git remote add origin $GIT_REPO_URL
git checkout -b gh-pages
git add .
git commit -am "Static site deploy"
git push origin gh-pages --force
cd ..
rm -rf $BUILD_FOLDER
