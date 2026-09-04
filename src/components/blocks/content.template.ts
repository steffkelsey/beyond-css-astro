import type { Template } from 'tinacms';

export const contentBlockSchema: Template = {
  name: 'content',
  label: 'Content',
  fields: [
    { type: 'rich-text', label: 'Body', name: 'body' },
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
      body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.',
      withPadding: true,
      width: 'regular',
    },
  },
};
