"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MobileDock from './MobileDock';

export default function HeaderWrapper() {
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 xl:px-0">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-xl font-bold">
                Sadiq R.
              </Link>
            </div>
            <nav className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => scrollToSection("skills")}>
                Skills
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("experience")}>
                Experience
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("projects")}>
                Projects
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("contact")}>
                Contact
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <MobileDock />
    </>
  );
}
