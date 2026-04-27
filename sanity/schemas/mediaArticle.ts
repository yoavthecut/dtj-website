import { defineField, defineType } from "sanity";

export const mediaArticle = defineType({
  name: "mediaArticle",
  title: "Media Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Article Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(200),
    }),
    defineField({
      name: "outlet",
      title: "Outlet / Publication",
      description: "Name of the publication (e.g. The Jerusalem Post, Israel National News)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "External URL",
      description: "Direct link to the article on the outlet's website",
      type: "url",
      validation: (Rule) =>
        Rule.required().uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      description: "Short summary shown in the article card",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: "mainImage",
      title: "Cover Image",
      description: "Upload the article's hero image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Published, newest first",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      outlet: "outlet",
      media: "mainImage",
    },
    prepare({ title, outlet, media }: { title?: string; outlet?: string; media?: unknown }) {
      return { title, subtitle: outlet, media: media as never };
    },
  },
});
