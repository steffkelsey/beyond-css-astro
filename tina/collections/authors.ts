import type { Collection } from "tinacms";

export const AuthorsCollection: Collection = {
  name: "author",
  label: "Authors",
  path: "src/content/authors",
  format: "json",
  ui: {
    router({ document }) {
      return `/authors/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: "string",
      name: "name",
      label: "Name",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "image",
      label: "Image",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      required: true,
      ui: {
        component: "textarea",
      },
    },
  ],
}
