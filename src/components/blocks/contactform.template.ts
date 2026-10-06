import type { Template } from 'tinacms';

export const contactFormBlockSchema: Template = {
  name: 'contactForm',
  label: 'Contact Form',
  fields: [
    {
      type: 'string',
      label: 'Button Label',
      name: 'buttonLabel',
    },
    {
      type: 'boolean',
      name: 'withPadding',
      label: 'Use section padding on top and bottom',
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
      buttonLabel: 'Send a message',
      withPadding: false,
      width: 'narrow',
    },
  },
};
