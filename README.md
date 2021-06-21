# next-deploy-action
A GitHub action to build and export a NextJS site statically, allowing the site to be deployed with GitHub pages, or served via a web server such as Nginx

[![Shellcheck](https://github.com/tsg-iitkgp/next-build-export-action/actions/workflows/shellcheck.yaml/badge.svg)](https://github.com/tsg-iitkgp/next-build-export-action/actions/workflows/shellcheck.yaml)

**Note:** With the very limited information of NextJS that I have, deploying with this method does not allow using all features that NextJS offers. The recommended way of deploying is using Vercel. All caveats are listed [in this documentation](https://nextjs.org/docs/advanced-features/static-html-export)


This action is heavily plagarized from [pranitbauva1997/zola-deploy-action](https://github.com/pranitbauva1997/zola-deploy-action), which builds and deploys websites using the Zola static site generator.
