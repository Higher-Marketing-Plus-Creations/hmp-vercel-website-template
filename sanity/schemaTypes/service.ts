import { defineArrayMember, defineField, defineType } from "sanity";

export const serviceType = defineType({
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "string" }),
    defineField({ name: "label", type: "string" }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({ name: "heroTitle", type: "string" }),
    defineField({ name: "heroDescription", type: "text", rows: 4 }),
    defineField({ name: "seoTitle", type: "string" }),
    defineField({ name: "seoDescription", type: "text", rows: 3 }),
    defineField({ name: "outcomes", of: [defineArrayMember({ type: "string" })], type: "array" }),
    defineField({ name: "deliverables", of: [defineArrayMember({ type: "string" })], type: "array" }),
    defineField({ name: "process", of: [defineArrayMember({ type: "string" })], type: "array" }),
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
    }),
    defineField({
      name: "relatedCaseStudySlugs",
      of: [defineArrayMember({ type: "string" })],
      type: "array"
    }),
    defineField({
      name: "relatedInsightSlugs",
      of: [defineArrayMember({ type: "string" })],
      type: "array"
    })
  ],
  name: "service",
  title: "Service",
  type: "document"
});
