// components/Typewriter.tsx
'use client';

import { useTypewriter, Cursor } from 'react-simple-typewriter';

interface TypewriterProps {
  words: string[];
  loop?: boolean;
  className?: string;
}

export default function Typewriter({ words, loop = true, className = '' }: TypewriterProps) {
  const [text] = useTypewriter({
    words,
    loop,
    typeSpeed: 120,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <span className={`inline-block ${className}`}>
      {text}
      <Cursor cursorStyle="|" />
    </span>
  );
}
