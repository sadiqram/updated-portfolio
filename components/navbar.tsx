"use client";

import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
// add fancy underline animation

// add theme toggle


export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-center gap-8">
      {links.map((link, index) => {
        const isActive = pathname === link.href;

        return (
          <Link
            href={link.href}
            key={index}
            className="relative group capitalize font-medium"
          >
            <span
              className={`transition-colors duration-300 ${
                isActive
                  ? "text-[var(--color-text)]"
                  : "text-[var(--color-nav-muted)] group-hover:text-[var(--color-text)]"
              }`}
            >
              {link.name}
            </span>

            {/* underline animation */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-[var(--color-primary)] transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        );
      })}

      {/* theme toggle button */}
      <ThemeToggle />
    </nav>
  );
}
