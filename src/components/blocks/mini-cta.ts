import type { TinaField } from 'tinacms';

export const miniCTA: TinaField = {
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
};
