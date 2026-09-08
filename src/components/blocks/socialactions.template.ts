import type { Template } from 'tinacms';
import type { SocialAction } from '../../lib/tina/data';

export const socialActionsBlockSchema: Template = {
  name: 'socialActions',
  label: 'Social Actions',
  fields: [
    {
      type: 'object',
      label: 'Actions',
      name: 'actions',
      list: true,
      ui: {
        defaultItem: {
          title: 'Follow us on Twitter',
          type: 'twitter',
          icon: '/images/twitter_white.svg',
          link: 'https://twitter.com/tff',
        },
        itemProps: (i: SocialAction) => ({ label: i.title ?? '' }),
      },
      fields: [
        { type: 'string', label: 'Title', name: 'title' },
        {
          type: 'string',
          label: 'Type',
          name: 'type',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'Twitter', value: 'twitter' },
          ],
        },
        {
          name: 'icon',
          label: 'Icon',
          description:
            'Any icon from the /public/images folder or subfolders eg: /images/instagram.svg',
          type: 'image',
        },
        { type: 'string', label: 'Link', name: 'link' },
      ],
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
      withPadding: true,
      width: 'regular',
    },
  },
};
