import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "quote", type: "text", rows: 4 })
  ],
  name: "testimonial",
  title: "Testimonial",
  type: "document"
});
