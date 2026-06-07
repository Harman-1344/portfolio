'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { profile, navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'bg-bg/80 backdrop-blur-lg border-b border-border' : 'bg-transparent',
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-primary text-bg font-mono">H</span>
          <span className="hidden sm:inline">Harmanjit</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-text-muted hover:text-text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-muted hover:text-accent-cyan transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-muted hover:text-accent-purple transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#contact" className="ml-2 inline-flex h-9 items-center rounded-full bg-gradient-primary px-4 text-sm font-medium text-bg hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all">
            Hire Me
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-text-primary" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-lg">
          <ul className="px-6 py-4 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-text-muted hover:text-text-primary">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4 pt-2">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="h-5 w-5 text-text-muted" /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5 text-text-muted" /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail className="h-5 w-5 text-text-muted" /></a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
