import { Github, ExternalLink, Star } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = {
  title: string;
  tagline: string;
  description: string;
  tech: readonly string[];
  github: string;
  live?: string | null;
  featured?: boolean;
};

export function ProjectCard({ title, tagline, description, tech, github, live, featured }: Props) {
  return (
    <article
      className={cn(
        'group relative h-full p-6 md:p-8 rounded-2xl border border-border bg-bg-card/50 backdrop-blur-sm',
        'hover:border-accent-purple/40 transition-all duration-300',
        'hover:shadow-[0_0_40px_rgba(168,85,247,0.1)] hover:-translate-y-1',
        'flex flex-col',
      )}
    >
      {featured && (
        <div className="absolute -top-3 right-6 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono bg-gradient-primary text-bg">
          <Star className="h-3 w-3" /> Featured
        </div>
      )}
      <div className="mb-4">
        <h3 className="font-display text-2xl font-bold text-text-primary group-hover:gradient-text transition-all">
          {title}
        </h3>
        <p className="mt-1 text-sm text-accent-cyan font-mono">{tagline}</p>
      </div>
      <p className="text-text-muted leading-relaxed mb-6 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t) => (
          <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-bg/60 text-text-muted border border-border/60">
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 pt-4 border-t border-border/60">
        <Link href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent-cyan transition-colors">
          <Github className="h-4 w-4" /> Code
        </Link>
        {live && (
          <Link href={live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent-purple transition-colors">
            <ExternalLink className="h-4 w-4" /> Live
          </Link>
        )}
      </div>
    </article>
  );
}
