import { education } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container-narrow">
        <SectionHeading eyebrow="Education" title="Academic Path" />
        <ScrollReveal>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent" />
            <ul className="space-y-8">
              {education.map((e) => (
                <li key={e.school} className="relative pl-14">
                  <div className="absolute left-0 top-0 grid place-items-center w-9 h-9 rounded-full bg-bg border border-accent-cyan/50">
                    <GraduationCap className="h-4 w-4 text-accent-cyan" />
                  </div>
                  <div className="p-5 rounded-xl border border-border bg-bg-card/40 hover:border-accent-purple/40 transition-colors">
                    <div className="flex items-baseline justify-between gap-4 flex-wrap">
                      <h3 className="font-display text-lg font-semibold text-text-primary">{e.school}</h3>
                      <span className="text-xs font-mono text-accent-cyan">{e.period}</span>
                    </div>
                    <p className="mt-1 text-text-muted">{e.degree}</p>
                    <p className="mt-2 text-sm font-mono text-text-subtle">{e.grade}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
