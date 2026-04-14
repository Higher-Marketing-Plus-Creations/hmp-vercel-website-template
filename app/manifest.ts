import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: "#050816",
    description: "Higher Marketing Plus marketing site.",
    display: "standalone",
    name: "Higher Marketing Plus",
    short_name: "HMP",
    start_url: "/",
    theme_color: "#050816"
  };
}
