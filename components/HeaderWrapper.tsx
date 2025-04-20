"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import MobileDock from './MobileDock';
import ThemeToggle from "@/components/ThemeToggle";

export default function HeaderWrapper() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm hidden md:block">
        <div className="container mx-auto px-4 xl:px-0">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-xl font-bold">
                Sadiq R.
              </Link>
            </div>
            <nav className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => scrollToSection("skills")} className="relative group">
                Skills
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("experience")} className="relative group">
                Experience
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("projects")} className="relative group">
                Projects
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("contact")} className="relative group">
                Contact
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Button>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>
      <MobileDock />
    </>
  );
}
