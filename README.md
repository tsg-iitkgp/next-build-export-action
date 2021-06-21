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

## Secrets

 * `TOKEN`: [Personal Access key] with the appropriate scope. If the
    repository is public the `public_repo` scope suffices, for private
    repositories the full `repo` scope is required. We need this to push
    the site files back to the repo.
    
    ( Actions already provides a `GITHUB_TOKEN` which is an installation token and does not trigger a GitHub Pages builds hence we need a personal access token )

## Environment Variables
* `PAGES_BRANCH`: The git branch of your repo to which the built static files will be pushed. Default is `build` branch
* `REPOSITORY`: The target repository to push to. Default is `GITHUB_REPOSITORY`(current repository). Set this variable if you want to deploy to other repo.
* `BUILD_DIR`: The path from the root of the repo where we should run the `yarn build` command. Default is `.` (current directory)
* `BUILD_ONLY`: Set to value `true` if you don't want to deploy after `yarn build`.
* `GITHUB_HOSTNAME`: The Github hostname to use in your action. This is to account for Enterprise instances where the base URL differs from the default, which is `github.com`.
* `OUTPUT_DIR`: The output directory for published HTML/CSS/JS files. Defaults to `out` for NextJS projects


[NextJS]: http://nextjs.org/
[Personal Access key]: https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
