import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './navbar';
export default function Header() {
  return (
    <header className='py-8 xl:py-12'>
        <div className="container mx-auto flex items-center justify-between">
            {/* logo */}
            <Link href="/" >
                <h1 className='text-4xl font-semibold'>
                    Sadiq <span className='text-[#ff004f]'>R.</span>
                    </h1>
            </Link>
            
            {/* only show on desktop screen sizes */}
            <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
                <Button>
                    Contact
                </Button>
            </Link>
            </div>

            {/* only show on mobile screen sizes */}
            <div className="xl:hidden">
                
            </div>
            
        </div>
    </header>
  );
}


