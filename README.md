# Pears - A Hugo Starter Kit

<p align="center">
  <img src="https://brrad.com/readme/dance.jpg" alt="starter logo"><br>
    <br>
    <strong>A starter kit for building static sites quickly, easily, and efficiently.</strong>
  <br>
  	<br>
    <img src="https://img.shields.io/github/workflow/status/bradp/starter/build/main?style=flat-square" alt="Build Status">
    <a href="https://www.github.com/bradp/starter/releases/"><img src="https://img.shields.io/github/v/release/bradp/starter?style=flat-square" alt="Latest Release"></a>
    <img src="https://img.shields.io/github/last-commit/bradp/starter?style=flat-square" alt="Last commit">
    <br>
    <br>
   <!--<a href="">View live demo →</a>-->
</p>

## 🍐 About Pears

<p align="center">
  <img src="https://brrad.com/readme/dog.jpg" alt="this is going to be a screen shot" width="400"><br>
  <em>once version 1 is ready, that dog will be a screenshot of a sample site. But for now enjoy that fancy pup.</em>
</p>

There are a few [Hugo](https://gohugo.io) starter kits available. None of them fit what I was looking for. I decided to make my own starter kit, filled with the things I used to quickly build static sites. This isn't a theme you add to a Hugo setup and extend, it's a toolbox for you to modify to your exact needs.

:warning: Currently, Pears is in a **very very early** state of development. Things will break and change. All contributions are welcome to get to a stable release.

## 🏆 Goals

- Super simple to use and develop with. No messing with settings and configurations.
- Easy to use for those who are not familiar with Hugo. They shouldn't have to learn more than the basics.
- Powered by tools that are focused on a quick and efficient development cycle.
- Pre-packed with shortcodes & partials for a ton of different components.

## 🎉️ What's included?

- **🚧 [Hugo](https://gohugo.io)** - The fastest framework for building static sites

- **🎨 [TailwindCSS](https://tailwind.css)**, **[Tailwind Forms](https://github.com/tailwindlabs/tailwindcss-forms)**, and **[Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography)** Utility-first CSS framework to build your site without ever having to leave your HTML.

- **🔧️ [PostCSS](https://github.com/postcss/postcss)**, **[autoprefixer](https://github.com/postcss/autoprefixer)**, and **[PurgeCSS](https://github.com/FullHuman/purgecss)** Trim your CSS files (including Tailwind's) to be _only_ the classes and rules you actually use in your markup.

- **🌈️ [Prettier](https://github.com/prettier/prettier)** and **[stylelint](https://github.com/stylelint/stylelint)** Write better code without having to think about formatting.

## 🚀️ Getting Started

Getting set up for using this project requires install a few different things. Don't worry, it's easy.

### Requirements

You will need to [install Hugo](https://gohugo.io/getting-started/installing/) if you don't already have it. There are [pre-built binary files](https://github.com/gohugoio/hugo/releases) available for almost every platform.

Most of the included scripts and commands present are reliant on [Yarn](https://classic.yarnpkg.com/en/). If you haven't used it, but are familiar with [npm](https://www.npmjs.com/), it's the exact same experience with a few minor details. Again, there are plenty of ways to [install Yarn](https://classic.yarnpkg.com/en/docs/install/) on the platform of your choice.

### Installing

All you need to do is clone the project and install the dependencies.

```sh
git clone https://github.com/bradp/pears
yarn install
```

## ⚡️ Usage

There are a variety of commands available to help your development.

The commands mostly follow the format of `command : component : enviroment`.

You can also run `yarn run` to see a full list of commands.

#### Main Commands

|      Command      | Action                                                   |
| :---------------: | :------------------------------------------------------- |
|   `yarn start`    | Builds all files & starts up the development server      |
|   `yarn build`    | Builds all files for a local or staging environment      |
| `yarn build:prod` | Builds all files for a deployment to a production server |
|    `yarn lint`    | Check your CSS & JS\* files for errors                   |
|   `yarn format`   | Fix formatting errors automatically                      |

<small>_JS linting & formatting is coming soon._</small>

#### Development

|       Command       | Action                           |
| :-----------------: | :------------------------------- |
|  `yarn build:css:`  | Build just the CSS               |
|  `yarn build:hugo`  | Build Hugo files                 |
|   `yarn lint:fix`   | Fix linting errors automatically |
| `yarn format:check` | Check formatting errors          |

#### Production

|        Command         | Action                                       |
| :--------------------: | :------------------------------------------- |
| `yarn build:css:prod`  | Build just the CSS for production deployment |
| `yarn build:hugo:prod` | Build Hugo for production deployment         |

<small>All `build` commands support prepending `:dev` or `:prod` at the end. More environments may be available in the future.</small>

## 🔮️ Roadmap

See the [open issues](https://github.com/bradp/starter/issues) for a list of proposed features (and known issues).

## 📕️ License

Distributed under the MIT License. See `LICENSE` for more information.
