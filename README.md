# WDD-331 Advanced CSS

## Simple, Efficient, Build system

This repo includes some of the code linting libraries mentioned in class, but packaged in a convenient repo.

## Get Started

### Setup VSCode Editor

1. Install these two extensions

-   [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

2. Modify your User Preferences.

Open search bar by

-   Mac: `cmd + shift + P`
-   Windows: `ctrl + shift + P`

then, type and select `Preferences: Open Settings (JSON)`

Add these settings:

```json
"editor.formatOnSave": true,
"css.validate": false,
"scss.validate": false,
"editor.defaultFormatter": "esbenp.prettier-vscode",

"editor.insertSpaces": true,
"editor.tabSize": 4,
"editor.detectIndentation": false,

"prettier.tabWidth": 4,
"prettier.useTabs": true,
```

### Download, install, and build project files

```sh
git clone https://github.com/diegoavalon/wdd-331.git
cd wdd-331
npm install
npm start
```

## Usage

A full project is as simples as creating a new directory within `./assignments/`, add a `.html`, `.scss`, and `.js` to process your css.

For example, I might want to create a project called "Final Project". Here is what I would do:

-   Create a new directory `./assignments/final-project/`
-   Add my index file `./assignments/final-project/index.html`. I could copy the example found at `./assignments/week-1/index.html` and edit as needed.
-   Add my Sass file `./assignments/final-project/main.scss`.
-   Then create my js file needed to process Sass to normal CSS `./assignments/final-project/main.js`. I would just need to import the `.scss` file like in the example `./assignments/week-1/main.js`
-   Start my dev server by running `npm start` in my terminal.
-   When ready, I could navigate to `http://localhost:3000/assignments/final-project/` and actively develop with a pleasant developer experience.

## Features

-   Eslint/Prettier with recommended configurations
-   SCSS/CSS/Modules
-   Hot module reloading (HMR)
-   And every feature available to the [Vite](https://vitejs.dev/) build system.
