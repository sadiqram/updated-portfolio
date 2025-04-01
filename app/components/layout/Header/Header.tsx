import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Sadiq R.
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-gray-600">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
} 