# 🍐️&nbsp;&nbsp;Pears - A Static Site Starter Kit

<p align="center">
  <img src="https://brrad.com/readme/pears.jpg" height="300" alt="illustration of pears">
  <br>
  <br>
  <strong>
    A starter kit for building static sites quickly, easily, and efficiently.
  </strong>
  <br>
  <br>
  <img src="https://img.shields.io/github/workflow/status/bradp/pears/Hugo%20Build?style=flat-square" alt="Build Status">
    <a href="https://www.github.com/bradp/pears/releases/">
      <img src="https://img.shields.io/github/v/release/bradp/pears?style=flat-square" alt="Latest Release">
    </a>
  <img src="https://img.shields.io/github/last-commit/bradp/pears?style=flat-square" alt="Last commit">
  <br>
  <br>
  <a href="https://pears.cloud/">View live demo →</a>
  <br>
  <br>
    :warning: Currently, Pears is in an <strong>early</strong> state of development. Things may break & change.
</p>


## 🏆 Goals

- Super simple to use and develop with. No messing with settings and configurations.
- Easy to use for those who are not familiar with Hugo. They shouldn't have to learn more than the basics.
- Powered by tools that are focused on a quick and efficient development cycle.
- Pre-packed with shortcodes & partials for a ton of different components.

## 🎉️ What's included?

  🚧&nbsp;&nbsp; **[Hugo](https://gohugo.io)** - The fastest framework for building static sites

  🎨&nbsp;&nbsp; **[TailwindCSS](https://tailwind.css)**, **[Tailwind Forms](https://github.com/tailwindlabs/tailwindcss-forms)**, and **[Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography)** Utility-first CSS framework to build your site without ever having to leave your HTML.

  🔧️&nbsp;&nbsp; **[PostCSS](https://github.com/postcss/postcss)**, **[autoprefixer](https://github.com/postcss/autoprefixer)**, and **[PurgeCSS](https://github.com/FullHuman/purgecss)** Trim your CSS files (including Tailwind's) to be _only_ the classes and rules you actually use in your markup.

  🌈️ &nbsp;&nbsp;**[Prettier](https://github.com/prettier/prettier)** and **[stylelint](https://github.com/stylelint/stylelint)** Write better code without having to think about formatting.

  🔍️ &nbsp;&nbsp;**[ESLint](https://eslint.org)** Never run into JS errors again.


## 🚀️ Getting Started

Getting set up for using this project requires install a few different things. Don't worry, it's easy.

### Requirements

You will need to [install Hugo](https://gohugo.io/getting-started/installing/) if you don't already have it. There are [pre-built binary files](https://github.com/gohugoio/hugo/releases) available for almost every platform.

### Installing

Once you have Yarn and Hugo installed on your system, all you need to do is grab a copy of Pears and install the dependencies.

```
git clone https://github.com/bradp/pears <your-new-site-name>
cd <your-new-site-name>
npm i
```

## ⚡️ Usage

 - To start up your local development environment: `npm start`
 - To see a full list of available commands: `npm run`

#### Main Commands
Command | Action
:- | :-
`npm start` | Builds all files & starts up the development server
`npm build` | Builds all files for a local or staging environment
`npm build:prod` | Builds all files for a deployment to a production server
`npm lint` | Check your CSS & JS files for errors Append `:fix` to automatically fix
`npm format` | Fix formatting errors automatically

#### Building & Linting
Command | Action
:- | :-
`npm lint:css` | Lint CSS files Append `:fix` to automatically fix
`npm lint:js` | Lint JS files. Append `:fix` to automatically fix
`npm format:check` | Check formatting errors without automatically fixing

<small>Remember, you can always check <code>yarn run</code> to see  full list of commands!</small>


## 🔮️ Roadmap

See the [open issues](https://github.com/bradp/starter/issues) for a list of proposed features (and known issues).

## 📕️ License

Distributed under the MIT License. See `LICENSE` for more information.
