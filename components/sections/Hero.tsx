'use client';
import dynamic from 'next/dynamic';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { profile } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { Typewriter } from '@/components/effects/Typewriter';

const NeuralNetwork = dynamic(() => import('@/components/three/NeuralNetwork'), { ssr: false, loading: () => null });

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0 opacity-60">
        <NeuralNetwork />
      </div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-bg/30 to-bg pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-bg-card/60 backdrop-blur-sm mb-8 text-sm font-mono">
          <Sparkles className="h-3.5 w-3.5 text-accent-cyan" />
          <span className="text-text-muted">Available for AI/ML internships</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan" />
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
          <span className="block text-text-muted text-2xl sm:text-3xl md:text-4xl font-normal mb-3">Hi, I'm</span>
          <span className="gradient-text">
            <Typewriter phrases={[profile.name, 'AI/ML Engineer']} />
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="#projects" size="lg">
            View Work <ArrowDown className="h-4 w-4" />
          </Button>
          <Button href="#contact" variant="outline" size="lg">
            Get in Touch
          </Button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-muted hover:text-accent-cyan transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-muted hover:text-accent-purple transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-text-muted hover:text-accent-pink transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
