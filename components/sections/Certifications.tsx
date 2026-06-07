import { certifications } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { Award } from 'lucide-react';

export function Certifications() {
  return (
    <section id="certifications" className="section bg-bg-soft/30">
      <div className="container-narrow">
        <SectionHeading eyebrow="Certifications" title="Credentials" />
        <ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((c) => (
              <div key={c.name} className="group p-5 rounded-xl border border-border bg-bg-card/40 hover:border-accent-cyan/40 transition-all flex items-start gap-3">
                <div className="shrink-0 grid place-items-center w-10 h-10 rounded-lg bg-gradient-primary/10 text-accent-cyan group-hover:scale-110 transition-transform">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary leading-snug">{c.name}</p>
                  <p className="mt-1 text-xs font-mono text-text-muted">{c.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
