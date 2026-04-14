import { defineArrayMember, defineField, defineType } from "sanity";

export const insightType = defineType({
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "string" }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({ name: "category", type: "string" }),
    defineField({ name: "publishedAt", type: "date" }),
    defineField({ name: "readTime", type: "string" }),
    defineField({ name: "takeaways", of: [defineArrayMember({ type: "string" })], type: "array" }),
    defineField({ name: "serviceSlugs", of: [defineArrayMember({ type: "string" })], type: "array" }),
    defineField({
      name: "sections",
      of: [
        defineArrayMember({
          fields: [
            defineField({ name: "heading", type: "string" }),
            defineField({ name: "body", of: [defineArrayMember({ type: "string" })], type: "array" })
          ],
          type: "object"
        })
      ],
      type: "array"
    })
  ],
  name: "insight",
  title: "Insight",
  type: "document"
});
