import type { Collection } from "tinacms";

export const ArticlesCollection: Collection = {

  name: "article",
  label: "Articles",
  path: "src/content/articles",
  format: "md",
  ui: {
    router({ document }) {
      return `/articles/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "SubTitle",
      required: true,
    },
    {
      type: "reference",
      name: "author",
      label: "Author",
      required: true,
      collections: ['author'],
      ui: {
      optionComponent: (
        props: { name?: string },
        _internalSys: { path: string }
      ) => {
          return props.name;
        },
      },
    },
    {
      type: "image",
      name: "imageSrc",
      label: "Featured Image",
      required: true,
    },
    {
      type: "string",
      name: "imageAlt",
      label: "Alt Text for Featured Image",
      description: "Describe the image",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Publish Date",
      required: true,
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
        min: 1,
      },
      required: true,
    },
    {
      type: "boolean",
      name: "featured",
      label: "Featured Post",
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Tagline",
      isBody: true,
    },
  ],
  defaultItem: () => {
    return {
      featured: false,
      date: new Date().toISOString(),
    }
  },
}

