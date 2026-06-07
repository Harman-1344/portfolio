'use client';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type Props = { phrases: string[]; typingSpeed?: number; deletingSpeed?: number; pauseMs?: number; className?: string };

export function Typewriter({ phrases, typingSpeed = 80, deletingSpeed = 40, pauseMs = 800, className }: Props) {
  const [text, setText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    if (!current) return;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), pauseMs);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setDeleting(false);
          setPhraseIdx((p) => (p + 1) % phrases.length);
        }
      }
    }, deleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIdx, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className={cn('inline-block', className)}>
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-accent-cyan ml-1 animate-pulse align-middle" />
    </span>
  );
}
