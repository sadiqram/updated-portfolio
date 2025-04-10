'use client';

import { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark =
      stored === 'dark' ||
      (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);

    setIsDark(prefersDark);
    document.documentElement.classList.toggle('light', !prefersDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('light', !newMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-xl p-2 rounded-full transition  hover:text-white"
      aria-label="Toggle Theme"
    >
      {isDark ? <BsSun className="text-gray-300 transition-all duration-300 transform hover:scale-110 " /> : <BsMoon className="text-black transition-all duration-300 transform hover:scale-110" />}
    </button>
  );
}
