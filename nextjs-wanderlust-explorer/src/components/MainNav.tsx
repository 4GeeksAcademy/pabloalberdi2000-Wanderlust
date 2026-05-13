import Link from "next/link";
import type { ReactElement } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
] as const;

export function MainNav(): ReactElement {
  return (
    <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}