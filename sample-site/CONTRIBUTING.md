# Contributing Guidelines

Hi :wave: there, welcome to Gymkhana site revamp project. We are glad that you considered contributing! Here are a few points that will help you have a great time coding and contributing.

## Guidelines

- We do not commit to `main` branch directly. We open pull requests and merge them in main after review.

### We are using:

- [yarn](https://yarnpkg.com/en/) to manage packages.
- [Next.js](https://nextjs.org/) handles the routing and is the framework we use.
- [Netlify](https://tsg-site.netlify.app/) to deploy the site.
- Dependabot to warn us for dependencies with security problems.

## Contribution Workflow

- Create a Branch and Commit your changes.
  - Name the branch carefully. For example `feature-card-component`, `bugfix-overlay`. Do not use generic names such as `develop`, `work`, your username etc.
  - Name the commits meaningfully. For help read [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/).
- Check if the solution works by testing it locally.
- Submit a PR with an appropriate name including the term `Fixes #{issue number}` if it fixes that particular issue.
- Be attentive and respond to comments and suggestions in the opened PR.
- We will merge your PR after reviewing and testing it.

## Project Structure

The files are setup as follows:

```
components/
|____(different components to be used in pages)
lib/
|____posts.js 
pages/
|____api/
|____posts/ (used to dynamically route blogs)
|____(other pages)
posts/
|____(markdown files that get rendered on the page)
public/
|____images/
| |____(All the image content)
styles/
|____(Styles for components filetype:scss)

```

We expect you to follow the same structure and organize your files accordingly.

## Building and running locally

First install all the dependencies using yarn (:warning: not npm​) by running `$ yarn` in the root directory.

Everything including building and serving locally is pre-configured in the `package.json` file. You can run the command `$yarn dev` to start a live server.

## Deployment Process

Each commit to main branch is built and deployed by Netlify to https://tsg-site.netlify.app/. You only need to test locally using `$ yarn dev`. You do not need to build it and push the build files.

## Workspace Setup

This setup is recommended but not enforced. Please note that we expect clean well formated code and these tools make it easier for us to have a consistent code style throughout the codebase.

### Yarn

We use [yarn](https://yarnpkg.com/en/) as the package manager. Please do not use `npm` with this project to manage dependencies. It will result in clashing dependencies and may cause unintended errors.

To add new dependency use `yarn add`, so if you need to run `npm install <package>` run `yarn add <package>`.

### VSCode

The text editor of choice. You can choose any other as long as they support [prettier](https://prettier.io/).

#### Extension - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

#### Extension - [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

#### Configuration - Settings.json

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": false,
  "printWidth": 120
}
```