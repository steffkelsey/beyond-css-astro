import { OGImageRoute } from "astro-og-canvas"
import { listArticles } from "../../lib/tina/data"

const articlesCollection = await listArticles()
const m = articlesCollection.map(article => {
  return [article._sys.filename, article]
})
const pages = Object.fromEntries(m)

export const { getStaticPaths, GET } = await OGImageRoute({
  //param: "route",
  pages: pages,

  getImageOptions: (path, page) => ({
    title: page.title,
    description: page.subtitle,
    logo: {
      path: "public/images/logo.png",
    },
    bgGradient: [
      [255, 227, 160],
      [255, 255, 255],
    ],

    font: {
      title: {
        color: [2, 37, 71],
        size: 120,
        weight: "ExtraBold",
        lineHeight: 1,
      },
      description: {
        color: [2, 37, 71],
        size: 50,
        lineHeight: 1.2,
      },
    },
  }),
})
