import type { Template } from 'tinacms';
import { miniCTA } from './mini-cta';

export const largeArticlePreviewBlockSchema: Template = {
  name: 'largeArticlePreview',
  label: 'Large Article Preview',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'boolean',
      name: 'featured',
      label: 'Filter to show featured articles',
    },
    miniCTA,
  ],
  ui: {
    defaultItem: {
      title: 'Read my latest article',
      featured: false,
      titleAction: {
        title:
          'We have got lot more exciting blogs for you. Feel free to explore them.',
        label: 'View All Blogs',
        link: '/articles',
        showTopBorder: false,
      },
    },
  },
};
