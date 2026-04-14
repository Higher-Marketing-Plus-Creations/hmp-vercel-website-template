import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schemaTypes } from "@/sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? process.env.SANITY_PROJECT_ID ?? "missing-project-id";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? process.env.SANITY_DATASET ?? "production";

export const hasSanityEnv = projectId !== "missing-project-id";

export const sanityStudioConfig = defineConfig({
  dataset,
  name: "default",
  plugins: [structureTool(), visionTool()],
  projectId,
  schema: {
    types: schemaTypes
  },
  title: "Higher Marketing Plus Studio"
});

export default sanityStudioConfig;
