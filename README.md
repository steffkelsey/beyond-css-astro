# Beyond CSS Astro Project

This is an implementation of the Travel Food Fun blog project from Kevin Powell's
BeyondCSS course. The design system is from Kevin Powell using SCSS. The site is
built with Astro and some of the content (Articles, Authors) is managed by
TinaCMS.

## 🚀 Project Structure

Inside of the project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── content/
│       └── articles/
│       └── authors/
│   └── pages/
│       └── index.astro
│   └── styles/
└── package.json
```

Astro looks for `.astro` or `.md{x}` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

The articles and authors are in the `src/content/articles` and `src/content/authors`
folders respectively. Each article has its own `md` file and each author has its own
`json` file. The Collections are built using TinaCMS and the details on querying
the Tina GraphQL is in the `src/lib/tina/data.ts` file. The exported functions and
types from

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check out Kevin's course [here](https://www.beyondcss.dev/).
