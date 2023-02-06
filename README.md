# Webflow + Typescript + SCSS + Webpack with HMR + Prettier + ESLint + Visual Studio Code

Basic setup that you can use for your [Webflow](https://webflow.com) website with:

- [Webpack + HMR](https://webpack.js.org/)
- [Typescript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

`jQuery` is declared as an dependance and flagged as external in webpack. Feel free to add more if you import dependencies directly in Webflow.

---

## How to use with Webflow

### First steps

1. Clone the repo by clicking on **Use this template**.
2. Install all of the dependancies with `npm install`
3. Open VSCode.

### Integrate into Webflow

1. Open your webflow site, and add to a page (for ex. home) custom code before `</body>`:

```html
<script type="module" src="http://localhost:8080/home.js"></script>
```

2. In the same place add custom code to `<head>`:

```html
<link rel="stylesheet" href="http://localhost:8080/home.css">
```

### Developing

1. Now let's go back to VSCode and run `npm run serve` and enjoy developing as it was meant to.
2. This boilerplate has HMR implemented, so once you make any changes to the code it will be auto-updated on your webflow site.

---

## Configuration

Open `config.js`.

### Hostname (optional)

Your webflow site url, once specified on `npm run serve` it will open your site in the browser

### Port

Default `8080`. Feel free to change.

### Pages

List of all pages you will be writing your code for. It's used by webpack to create separate entry points and chunks. For ex. we've `home: './src/home.ts`. If you want to add another one then you create a new entry `another: './scr/another.ts` - use `home.ts` as a template.

### Externals

List of all external dependencies that won't be bundled. By default `jQuery` is added.

---

## Scripts

This project is using `npm`, but if you like `yarn` more, then feel free to switch to it. It doesn't really matter.

First, install dependencies:

```sh
npm install
```

To launch a local dev server:

```sh
npm run serve
```

To create a production build:

```sh
npm build
```

To clean the local `/dist` folder:

```sh
npm run clean
```

To lint the code with ESLint and Prettier:

```sh
npm run lint
```

---

## Build commands in VSCode

Once you click `CMD + SHIT + B` on Mac or `CTR + SHIT + B` on Windows you can use prebuild task in VSCode.

### Development

As a name suggests, it runs `npm ren serve`.

### Build

Production-ready build with a sequence of `npm run clean` and `npm build`.
