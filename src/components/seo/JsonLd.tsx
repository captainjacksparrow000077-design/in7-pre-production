type JsonLdData = Record<string, unknown> | Record<string, unknown>[];

/**
 * Renders a JSON-LD structured data script. Server Component by default so the
 * markup is present in the initial HTML for crawlers.
 */
export default function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
