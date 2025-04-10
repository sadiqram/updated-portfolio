
'use client'

import { Sheet, SheetContent, SheetTrigger , SheetTitle, SheetHeader} from '@/components/ui/sheet'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {CiMenuFries} from 'react-icons/ci'

const links = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'Projects',
        href: '/projects'
    },
    {
        name: 'Contact',
        href: '/contact'
    }
]

export default function MobileNav() {
    const pathname = usePathname();
  
    return (
      <Sheet>
        <SheetTrigger className="flex items-center justify-center">
          <CiMenuFries className="text-[32px] text-[var(--color-text)] hover:text-[var(--color-primary)] transition-all duration-300" />
        </SheetTrigger>
  
        <SheetContent className="flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
          {/* Required by Radix for accessibility */}
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
  
          {/* Nav Links */}
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