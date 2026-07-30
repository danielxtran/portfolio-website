"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavTabProps = {
  href: string;
  label: string;
};

export default function NavTab({ href, label }: NavTabProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`rounded-full px-4 py-1.5 font-body text-sm transition-colors ${
        isActive ? "bg-ink text-paper" : "text-ink/70 hover:text-ink"
      }`}
    >
      {label}
    </Link>
  );
}
