import { projects } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { ScrollReveal } from '@/components/effects/ScrollReveal';

export function Projects() {
  return (
    <section id="projects" className="section bg-bg-soft/30">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          subtitle="AI/ML systems built end-to-end — from data to deployed demo."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.08}>
              <ProjectCard
                title={p.title}
                tagline={p.tagline}
                description={p.description}
                tech={p.tech}
                github={p.github}
                live={p.live}
                featured={p.featured}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
