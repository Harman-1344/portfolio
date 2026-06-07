import { cn } from '@/lib/utils';

type Props = { eyebrow?: string; title: string; subtitle?: string; align?: 'left' | 'center'; className?: string };

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', className }: Props) {
  return (
    <div className={cn('mb-16', align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <div className={cn('mb-3 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-cyan', align === 'center' && 'justify-center')}>
          <span className="h-px w-8 bg-accent-cyan/50" /> {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
        {title.includes(' ') ? (
          <>
            {title.split(' ').slice(0, -1).join(' ')} <span className="gradient-text">{title.split(' ').slice(-1)[0]}</span>
          </>
        ) : (
          <span className="gradient-text">{title}</span>
        )}
      </h2>
      {subtitle && <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
