import { buildLlmsFullTxt } from "@/lib/llms";

// Static content generated at build time from the site's content sources.
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
