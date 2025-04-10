import Link from 'next/link';
// import { Button } from './ui/button';
import Nav from './navbar';
import MobileNav from './ui/MobileNav';



export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Sadiq <span className="text-[var(--color-primary)]">R.</span>
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


// export default function Header() {
//   return (
//     <header className='py-8 xl:py-12 text-white'>
//         <div className="container mx-auto flex justify-between items-center">
//             {/* logo */}
//             <Link href="/" >
//                 <h1 className='text-4xl font-semibold'>
//                     Sadiq <span className='text-[#ff004f]'>R.</span>
//                     </h1>
//             </Link>
            
//             {/* only show on desktop screen sizes */}
//             <div className="hidden xl:flex items-center gap-8">
//             <Nav />
//             {/* <Link href="/contact">
//                 <Button>
//                     Contact
//                 </Button>
//             </Link> */}
//             </div>

//             {/* only show on mobile screen sizes */}
//             <div className="xl:hidden">
//                 <MobileNav />
                
//             </div>
            
//         </div>
//     </header>
//   );
// }


