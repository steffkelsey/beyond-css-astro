import type { Template } from 'tinacms';

export const articlePaginatorBlockSchema: Template = {
  name: 'articlePaginator',
  label: 'Article Paginator',
  fields: [
    {
      type: 'boolean',
      name: 'withPadding',
      label: 'Toggle padding',
      description: 'Use section padding on top and bottom',
    },
    {
      type: 'string',
      name: 'width',
      label: 'Component width',
      description: 'Sets component width from full-bleed on down to narrow',
      options: [
        { label: 'Narrow', value: 'narrow' },
        { label: 'Regular', value: 'regular' },
        { label: 'Full-Bleed', value: 'full-bleed' },
      ],
    },
  ],
  ui: {
    defaultItem: {
      withPadding: true,
      width: 'regular',
    },
  },
};
