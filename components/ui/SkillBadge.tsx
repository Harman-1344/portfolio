import { cn } from '@/lib/utils';

type Props = { label: string; className?: string };

export function SkillBadge({ label, className }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-mono',
        'bg-bg-card border border-border text-text-primary',
        'hover:border-accent-cyan/60 hover:text-accent-cyan hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]',
        'transition-all duration-200 cursor-default',
        className,
      )}
    >
      {label}
    </span>
  );
}
