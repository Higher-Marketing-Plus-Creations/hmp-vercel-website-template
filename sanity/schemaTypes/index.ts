import { caseStudyType } from "@/sanity/schemaTypes/case-study";
import { insightType } from "@/sanity/schemaTypes/insight";
import { locationType } from "@/sanity/schemaTypes/location";
import { serviceType } from "@/sanity/schemaTypes/service";
import { siteSettingsType } from "@/sanity/schemaTypes/site-settings";
import { testimonialType } from "@/sanity/schemaTypes/testimonial";

export const schemaTypes = [
  siteSettingsType,
  serviceType,
  caseStudyType,
  insightType,
  locationType,
  testimonialType
];
