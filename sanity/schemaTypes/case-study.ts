import { defineArrayMember, defineField, defineType } from "sanity";

export const caseStudyType = defineType({
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "string" }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({ name: "challenge", type: "text", rows: 4 }),
    defineField({ name: "strategy", type: "text", rows: 4 }),
    defineField({ name: "implementation", type: "text", rows: 4 }),
    defineField({ name: "result", type: "text", rows: 4 }),
    defineField({ name: "highlights", of: [defineArrayMember({ type: "string" })], type: "array" }),
    defineField({ name: "serviceSlugs", of: [defineArrayMember({ type: "string" })], type: "array" })
  ],
  name: "caseStudy",
  title: "Case Study",
  type: "document"
});
