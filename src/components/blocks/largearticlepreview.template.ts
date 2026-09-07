import type { Template } from 'tinacms';

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
    {
      type: 'object',
      label: 'Mini-CTA',
      name: 'titleAction',
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
          ui: { component: 'textarea' },
        },
        { type: 'string', label: 'Label', name: 'label' },
        { type: 'string', label: 'Link', name: 'link' },
        {
          type: 'boolean',
          name: 'showTopBorder',
          label: 'Show top border on Mini-CTA',
        },
      ],
    },
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
