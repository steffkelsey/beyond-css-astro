import type { Template } from 'tinacms';

export const heroBlockSchema: Template = {
  name: 'hero',
  label: 'Hero',
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
      name: 'extraLargeTitle',
      label: 'Toggle extra large title font',
    },
    {
      type: 'string',
      label: 'Sub Title',
      name: 'subtitle',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'boolean',
      name: 'withPadding',
      label: 'Use section padding on top and bottom',
    },
  ],
  ui: {
    defaultItem: {
      title: 'Title',
      extraLargeTitle: true,
      subtitle: 'Subtitle lorem ipsum',
      withPadding: true,
    },
  },
};
