import type { Template } from 'tinacms';

export const ctaBlockSchema: Template = {
  name: 'cta',
  label: 'CTA',
  fields: [
    { type: 'string', label: 'Title', name: 'title' },
    { type: 'string', label: 'Sub Title', name: 'subtitle' },
    {
      type: 'boolean',
      name: 'withImage',
      label: 'Show Background image',
      description: 'Use component style that includes a background image',
    },
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
      title: 'Want to get the latest insights on Travel Fun Food?',
      subtitle: "We promise, we won't spam you",
      withImage: true,
      withPadding: true,
      width: 'regular',
    },
  },
};
