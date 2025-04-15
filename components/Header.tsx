'use client'
import Link from 'next/link';
import Nav from './navbar';
import MobileNav from './ui/MobileNav';
import MobileDock from './MobileDock';


export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] transition-colors duration-300 px-4 xl:px-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-xl font-semibold  text-[var(--color-text)] transition-colors duration-300">
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
          <MobileDock />
        </div>
      </div>
    </header>
  );
}


