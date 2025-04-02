
'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
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
        <SheetTrigger className='flex items-center justify-center'>
            <CiMenuFries className='text-[32px] text-white hover:text-[#ff004f] transition-all duration-300' />
        </SheetTrigger>

        <SheetContent  className='flex flex-col bg-[#000000]'>
            
            <div className='mt-32 mb-40 text-center text-2xl' >
                <Link href='/'>
                    <h1 className='text-4xl font-semibold'> Sadiq <span className='text-[#ff004f]'>R.</span></h1>
                </Link>
                </div>
            <nav className='flex flex-col justify-center items-center gap-8'>
                {links.map((link, index) => (
                     <Link href={link.href} key={index} className={`${link.href == pathname} $text-xl capitalize hover:text-[#ff004f] transition-all duration-300`}>
                        <h1 className='text-2xl font-semibold'>{link.name}</h1>
                    </Link>
                ))}


            </nav>


        </SheetContent>
    </Sheet>
   )
}