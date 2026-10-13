import Link from "next/link";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/**
 * Crawlable breadcrumb navigation. `items` is the full path including the
 * current page as the last item (rendered as plain text). Shares the same
 * `{ name, path }` shape as `breadcrumbJsonLd` so markup and structured data
 * stay in sync.
 */
export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {isCurrent ? (
                <span aria-current="page" className="text-gray-300 line-clamp-1 max-w-[260px]">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}