'use client';
import { useState } from 'react';
import { skills, type SkillCategory } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillBadge } from '@/components/ui/SkillBadge';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { cn } from '@/lib/utils';

const categories = Object.keys(skills) as SkillCategory[];

export function Skills() {
  const [active, setActive] = useState<SkillCategory | 'All'>('All');
  return (
    <section id="skills" className="section bg-bg-soft/30">
      <div className="container-narrow">
        <SectionHeading eyebrow="Skills" title="Tech Stack" subtitle="Languages, frameworks, and AI/NLP techniques I work with." />
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              onClick={() => setActive('All')}
              className={cn('px-4 py-1.5 rounded-full text-sm font-mono border transition-all',
                active === 'All' ? 'bg-gradient-primary text-bg border-transparent' : 'border-border text-text-muted hover:text-text-primary')}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn('px-4 py-1.5 rounded-full text-sm font-mono border transition-all',
                  active === c ? 'bg-gradient-primary text-bg border-transparent' : 'border-border text-text-muted hover:text-text-primary')}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {categories
              .filter((c) => active === 'All' || active === c)
              .flatMap((c) => skills[c].map((s) => <SkillBadge key={`${c}-${s}`} label={s} />))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
