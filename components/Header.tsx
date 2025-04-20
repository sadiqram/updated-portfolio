'use client'
import Link from 'next/link';
import Nav from './navbar';
import MobileNav from './ui/MobileNav';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 xl:py-6 text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] transition-colors duration-300 px-4 xl:px-0 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-xl font-semibold text-[var(--color-text)] transition-colors duration-300">
            Sadiq Ramanu
          </h1>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}


