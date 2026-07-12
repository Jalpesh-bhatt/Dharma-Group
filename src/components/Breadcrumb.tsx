import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-2">
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-red-700 transition"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-red-700">
              {item.label}
            </span>
          )}

          {index !== items.length - 1 && (
            <ChevronRight size={16} />
          )}
        </div>
      ))}
    </nav>
  );
}