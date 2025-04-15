"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from 'react';

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
  {
    name: "Skills",
    href: "/skills",
  },
];

export default function MobileNav() {
    const pathname = usePathname();
    const [sheetBg, setSheetBg] = useState('rgba(0, 0, 0, 0.5)');
  
    useEffect(() => {
      const isLight = document.documentElement.classList.contains('light');
      setSheetBg(isLight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.5)');
    }, []);
  
    return (
      <Sheet>
        <SheetTrigger className="flex items-center justify-center">
          <CiMenuFries className="text-[32px] text-[var(--color-text)] hover:text-[var(--color-primary)] transition-all duration-300" />
        </SheetTrigger>
  
        <SheetContent
          className="flex flex-col text-[var(--color-text)] transition-colors duration-300 backdrop-blur-md"
          style={{ backgroundColor: sheetBg }}
        >
          <SheetHeader>
            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
          </SheetHeader>
  
          {/* Logo */}
          <div className="mt-32 mb-40 text-center text-2xl">
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Sadiq <span className="text-[var(--color-primary)]">R.</span>
              </h1>
            </Link>
          </div>
  
          {/* Nav */}
          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  href={link.href}
                  key={index}
                  className={`text-2xl font-semibold capitalize transition-colors duration-300 ${
                    isActive
                      ? 'text-[var(--color-primary)]'
                      : 'text-[var(--color-text)] hover:text-[var(--color-primary)]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }