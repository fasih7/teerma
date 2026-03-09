import Link from "next/link";

interface BreadcrumbsProps {
  countryName: string;
}

export default function Breadcrumbs({ countryName }: BreadcrumbsProps) {
  return (
    <nav
      className="py-4 border-b border-white/10"
      style={{ color: "#C9BDB5" }}
      aria-label="Breadcrumb"
    >
      <div className="container mx-auto px-4">
        <ol className="flex items-center gap-2 text-sm font-medium flex-wrap">
          <li>
            <Link
              href="/"
              className="hover:underline transition-colors"
              style={{ color: "#F2E8DC" }}
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true" style={{ color: "#C9BDB5" }}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li>
            <Link
              href="/#countries"
              className="hover:underline transition-colors"
              style={{ color: "#F2E8DC" }}
            >
              Countries
            </Link>
          </li>
          <li aria-hidden="true" style={{ color: "#C9BDB5" }}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li className="font-semibold" style={{ color: "#4BBFB8" }} aria-current="page">
            {countryName}
          </li>
        </ol>
      </div>
    </nav>
  );
}
