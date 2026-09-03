import type { Template } from 'tinacms';

export const dividerBlockSchema: Template = {
  name: 'divider',
  label: 'Divider',
  fields: [
    {
      type: 'boolean',
      name: 'withPadding',
      label: 'Use section padding on top and bottom',
    },
  ],
  ui: {
    defaultItem: {
      withPadding: true,
    },
  },
};
