# next-deploy-action
A GitHub action to build and export a [NextJS] site statically, allowing the site to be deployed with GitHub pages, or served via a web server such as Nginx

[![Shellcheck](https://github.com/tsg-iitkgp/next-build-export-action/actions/workflows/shellcheck.yaml/badge.svg)](https://github.com/tsg-iitkgp/next-build-export-action/actions/workflows/shellcheck.yaml)

[![Build](https://github.com/tsg-iitkgp/next-build-export-action/actions/workflows/sample-site.yaml/badge.svg)](https://github.com/tsg-iitkgp/next-build-export-action/actions/workflows/sample-site.yaml)

**Note:** With the very limited information of NextJS that I have, deploying with this method does not allow using all features that NextJS offers. The recommended way of deploying is using Vercel. All caveats are listed [in this documentation](https://nextjs.org/docs/advanced-features/static-html-export)


This action is heavily plagarized from [pranitbauva1997/zola-deploy-action](https://github.com/pranitbauva1997/zola-deploy-action), which builds and deploys websites using the Zola static site generator.

## Usage

This example will build and export on push to any branch, then deploy to branch specified in PAGES_BRANCH (`build` by default)

```
on: push
name: Build, export and publish to branch on push
jobs:
  build-export-and-deploy:
    name: Build, export and publish sample site to the `sample-site-build` branch
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - name: Build with the latest action rev
        uses: tsg-iitkgp/next-build-export-action@main
        env:
          BUILD_DIR .
          PAGES_BRANCH: sample-site-build
          TOKEN: ${{ secrets.TOKEN }}
```

This example will build and deploy on master branch to gh-pages branch.
Additionally will build only on pull requests.
```
on:
  push:
    branches:
      - master 
  pull_request:
jobs:
  build:
    runs-on: ubuntu-latest
    if: github.ref != 'refs/heads/master'
    steps:
      - name: 'Checkout'
        uses: actions/checkout@master
      - name: 'Build only' 
        uses: tsg-iitkgp/next-build-export-action@main
        env:
          BUILD_DIR: .
          BUILD_ONLY: true
  build_and_deploy:
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/master'
    steps:
      - name: 'Checkout'
        uses: actions/checkout@master
      - name: 'Build and deploy'
        uses: tsg-iitkgp/next-build-export-action@main
        env:
          BUILD_DIR: .
          PAGES_BRANCH: sample-site-build
          TOKEN: ${{ secrets.TOKEN }}
```

[NextJS]: http://nextjs.org/
