
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

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
// fancy underline animation

{/* <nav className="flex items-center justify-center gap-8">
{links.map((link, index) => {
  const isActive = pathname === link.href;

  return (
    <Link
      key={index}
      href={link.href}
      className={`relative group capitalize font-medium transition-colors duration-300 ${
        isActive ? 'text-white' : 'text-gray-400'
      }`}
    >
      {link.name}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-[#ff004f] transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      ></span>
    </Link>
  );
})}
</nav> */}
export default function Nav() {
    const pathname = usePathname();
    
    return (
        <nav className="flex items-center justify-center gap-8">
            {links.map((link, index) => {
                return <Link href={link.href} key={index} className={`${link.href === pathname && 'text-white border-b-2 border-[#ff004f]'} capitalize font-medium hover:  transition-all`}>
                    {link.name}
                </Link>

            })}
        </nav>
    )
}