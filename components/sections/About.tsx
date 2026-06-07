import { profile } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/effects/ScrollReveal';

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-narrow">
        <SectionHeading eyebrow="About" title="Who I Am" subtitle="Bridging AI research with production-ready systems." />
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <p className="text-lg text-text-muted leading-relaxed">{profile.bio}</p>
            <div className="grid grid-cols-2 gap-4">
              {profile.stats.map((s) => (
                <div key={s.label} className="p-5 rounded-xl border border-border bg-bg-card/40 text-center hover:border-accent-cyan/40 transition-colors">
                  <div className="font-display text-3xl font-bold gradient-text">{s.value}</div>
                  <div className="mt-1 text-xs font-mono uppercase tracking-wider text-text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
