import { research } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { FileText } from 'lucide-react';

export function Research() {
  return (
    <section id="research" className="section">
      <div className="container-narrow">
        <SectionHeading eyebrow="Research" title="Publication" />
        <ScrollReveal>
          <article className="relative p-8 md:p-10 rounded-2xl border border-accent-purple/30 bg-gradient-to-br from-bg-card/60 to-bg-card/20 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent-purple/10 blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-accent-purple/15 text-accent-purple border border-accent-purple/30">
                  <FileText className="h-3.5 w-3.5" /> {research.status}
                </div>
                <span className="text-xs font-mono text-text-muted">IEEE · 2025</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary leading-tight">
                {research.title}
              </h3>
              <p className="mt-3 text-accent-cyan font-mono text-sm">{research.venue}</p>
              <p className="mt-6 text-text-muted leading-relaxed">{research.abstract}</p>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
