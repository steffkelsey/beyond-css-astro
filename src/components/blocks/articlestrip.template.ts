import type { Template } from 'tinacms';

export const articleStripBlockSchema: Template = {
  name: 'articleStrip',
  label: 'Article Strip',
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
      name: 'withPadding',
      label: 'Use section padding on top and bottom',
    },
    {
      type: 'boolean',
      name: 'featured',
      label: 'Filter to show featured articles',
    },
    {
      type: 'boolean',
      name: 'blogsActionTopBorder',
      label: 'Show top border on View All Blogs',
    },
  ],
  ui: {
    defaultItem: {
      title: 'Title',
      withPadding: true,
      featured: false,
      blogsActionTopBorder: true,
    },
  },
};
