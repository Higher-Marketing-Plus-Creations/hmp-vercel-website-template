"use client";

import dynamic from "next/dynamic";

import { hasSanityEnv, sanityStudioConfig } from "@/sanity.config";

const NextStudio = dynamic(() => import("next-sanity/studio").then((mod) => mod.NextStudio), {
  ssr: false
});

export default function StudioPage() {
  if (!hasSanityEnv) {
    return (
      <section className="section section-surface">
        <div className="eyebrow">Sanity Studio</div>
        <h1 className="page-title">Add Sanity credentials to activate the CMS workspace.</h1>
        <p className="section-intro">
          Configure `SANITY_PROJECT_ID`, `SANITY_DATASET`, and the matching public environment variables to turn on the embedded Studio. Until then, the site continues to work with local fallback content.
        </p>
      </section>
    );
  }

  return <NextStudio config={sanityStudioConfig} />;
}
