import { defineArrayMember, defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  fields: [
    defineField({ name: "companyName", type: "string" }),
    defineField({ name: "contactEmail", type: "string" }),
    defineField({ name: "supportPhone", type: "string" }),
    defineField({ name: "siteUrl", type: "string" }),
    defineField({ name: "defaultTitle", type: "string" }),
    defineField({ name: "defaultDescription", type: "text", rows: 3 }),
    defineField({ name: "footerTagline", type: "string" }),
    defineField({ name: "footerBlurb", type: "text", rows: 3 }),
    defineField({ name: "primaryCtaLabel", type: "string" }),
    defineField({ name: "primaryCtaHref", type: "string" }),
    defineField({ name: "secondaryCtaLabel", type: "string" }),
    defineField({ name: "secondaryCtaHref", type: "string" }),
    defineField({
      name: "heroMetrics",
      of: [
        defineArrayMember({
          fields: [
            defineField({ name: "label", type: "string" }),
            defineField({ name: "value", type: "string" })
          ],
          type: "object"
        })
      ],
      type: "array"
    })
  ],
  name: "siteSettings",
  title: "Site Settings",
  type: "document"
});
