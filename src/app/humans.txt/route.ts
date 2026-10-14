import {
  EDITORIAL_AUTHOR,
  PUBLISHER_NAME,
  SITE_URL,
} from "@/lib/constants";

// Static content generated at build time. humans.txt publishes the site's
// editorial attribution and origin, matching the values used in structured data.
export const dynamic = "force-static";

function buildHumansTxt(): string {
  return [
    "/* TEAM */",
    `Publisher: ${PUBLISHER_NAME}`,
    `Editorial: ${EDITORIAL_AUTHOR}`,
    `Location: India`,
    "",
    "/* SITE */",
    `Origin: ${SITE_URL}`,
    "Language: en-IN",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    `Index for language models: ${SITE_URL}/llms.txt`,
    "Standards: HTML5, CSS3, JavaScript",
    "",
  ].join("\n");
}

export function GET() {
  return new Response(buildHumansTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
