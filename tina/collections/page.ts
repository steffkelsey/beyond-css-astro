import type { Collection } from 'tinacms';
import { ctaBlockSchema } from '../../src/components/blocks/cta.template';
import { dividerBlockSchema } from '../../src/components/blocks/divider.template';
import { heroBlockSchema } from '../../src/components/blocks/hero.template';

export const PageCollection: Collection = {
  name: 'page',
  label: 'Pages',
  path: 'src/content/pages',
  format: 'mdx',
  ui: {
    router({ document }) {
      return `/${document._sys.filename}`;
    },
  },
  fields: [
    {
      name: 'seoTitle',
      label: 'Meta Title (SEO)',
      type: 'string',
      isTitle: true,
      required: true,
      description:
        "Shown in the browser tab and search results — not on the page itself. To change the heading visitors see at the top of the page, edit the Headline of the page's Hero block (if it has one) in Page Sections below.",
    },
    {
      name: 'withGradient',
      label: 'Show gradient',
      description:
        'Include background gradient at the top of the page (must force refresh)',
      type: 'boolean',
    },
    {
      type: 'object',
      list: true,
      name: 'blocks',
      label: 'Page Sections',
      description:
        'The visible content of the page. When the page starts with a Hero block, its Headline is the main on-page heading — edit that to change what visitors see at the top.',
      ui: { visualSelector: true },
      templates: [ctaBlockSchema, dividerBlockSchema, heroBlockSchema],
    },
  ],
  defaultItem: () => {
    return {
      withGradient: false,
    };
  },
};
