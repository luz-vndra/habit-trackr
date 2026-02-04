"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardNav() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    pathname.startsWith(href)
      ? "text-sm font-medium"
      : "text-sm text-neutral-400 hover:text-current";

  return (
    <div className="flex gap-6">
      <Link href="/habits" className={linkClass("/habits")}>
        Habits
      </Link>
      {/* <Link href="/analytics" className={linkClass("/analytics")}>
        Analytics
      </Link> */}
    </div>
  );
}
