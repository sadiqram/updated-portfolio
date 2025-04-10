'use client';

import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import MobileNav from '@/components/ui/MobileNav';

export default function MobileDock() {
  return (
    <div className="xl:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[var(--color-bg)] text-[var(--color-text)] border border-[var(--color-accent-hover)] shadow-xl rounded-full px-6 py-3 flex items-center gap-6 backdrop-blur-md transition-all duration-300">
      {/* Name/Logo */}
      <Link href="/" className="text-xl font-semibold">
        Sadiq <span className="text-[var(--color-primary)]">R.</span>
      </Link>

      {/* Toggle + Menu */}
      <ThemeToggle />
      <MobileNav />
    </div>
  );
}
