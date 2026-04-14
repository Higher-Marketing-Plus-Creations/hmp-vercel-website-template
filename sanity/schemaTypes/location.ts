import { defineArrayMember, defineField, defineType } from "sanity";

export const locationType = defineType({
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "string" }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({ name: "intro", type: "text", rows: 5 }),
    defineField({ name: "serviceSlugs", of: [defineArrayMember({ type: "string" })], type: "array" }),
    defineField({
      name: "faq",
      of: [
        defineArrayMember({
          fields: [
            defineField({ name: "question", type: "string" }),
            defineField({ name: "answer", type: "text", rows: 3 })
          ],
          type: "object"
        })
      ],
      type: "array"
    })
  ],
  name: "location",
  title: "Location",
  type: "document"
});
