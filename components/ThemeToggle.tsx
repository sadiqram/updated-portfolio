'use client';

import { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const {  setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure we only render after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <button
        className="text-xl p-2 rounded-full transition-all duration-300 hover:bg-accent opacity-0"
        aria-label="Theme toggle placeholder"
      >
        <BsSun className="text-[var(--color-text)] transition-all duration-300 transform hover:scale-110" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-xl p-2 rounded-full transition hover:text-white"
      aria-label="Toggle Theme"
    >
      {resolvedTheme === 'dark' ? (
        <BsSun className="text-gray-300 transition-all duration-300 transform hover:scale-110" />
      ) : (
        <BsMoon className="text-black transition-all duration-300 transform hover:scale-110" />
      )}
    </button>
  );
}
