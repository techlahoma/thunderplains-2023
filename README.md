# Deploying to GitHub Pages

This example supports deloying a statically exported Next.js application to GitHub Pages.

The `out` directory should not be ignored by version control.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [yarn](https://yarnpkg.com/lang/en/docs/cli/create/), [pnpm](https://pnpm.io), or [bun](https://bun.sh/docs/cli/bun-create) to bootstrap the example:

```bash
npx create-next-app --example github-pages nextjs-github-pages
# or
yarn create next-app --example github-pages nextjs-github-pages
# or
pnpm create next-app --example github-pages nextjs-github-pages
# or
bun create next-app --example github-pages nextjs-github-pages
```

### Deploy to GitHub Pages

This repo has been setup to deploy with GitHub Pages.

Run this to deploy:

```
npm run deploy
```

## Development

### Dependencies

`npm`, `yarn`, `pnpm`, or `bun` are all acceptable package managers. Please choose _one_ package manager:

- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm)
- [yarn](https://yarnpkg.com/getting-started/install)
- [pnpm](https://pnpm.io/installation)
- [bun](https://bun.sh/docs/installation)

### Setup

- [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the [Thunderplains repo](https://github.com/techlahoma/thunderplains-2023).
- Clone the forked repo
  ```bash
  # clone the forked repo (replace <github-user-name> with your github username)
  git clone https://github.com/<github-user-name>/thunderplains-2023.git
  cd thunderplains-2023/
  ```
- Choosing _one_ package manager from above, run one of these commands to setup the project's dependencies
  ```bash
  npm install
  # or
  yarn install
  # or
  pnpm install
  # or
  bun install
  ```

### Running the development server

- Run the development server
  ```bash
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  # or
  bun run dev
  ```
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the rendered page
