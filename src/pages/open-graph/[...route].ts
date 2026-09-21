import { OGImageRoute } from 'astro-og-canvas';
import { listArticles } from '../../lib/tina/data';
import type { CmsArticle } from '../../lib/tina/data';

const articlesCollection: CmsArticle[] = await listArticles();
const m = new Map(
  articlesCollection.map(
    (article) => [article._sys.filename, article] as const,
  ),
);
const pages = Object.fromEntries(m);

export const { getStaticPaths, GET } = await OGImageRoute({
  pages: pages,

  getImageOptions: (_, page) => ({
    title: page.title,
    description: page.subtitle,
    logo: {
      path: 'public/images/logo.png',
    },
    bgGradient: [
      [255, 227, 160],
      [255, 255, 255],
    ],

    font: {
      title: {
        color: [2, 37, 71],
        size: 120,
        weight: 'ExtraBold',
        lineHeight: 1,
      },
      description: {
        color: [2, 37, 71],
        size: 50,
        lineHeight: 1.2,
      },
    },
  }),
});
