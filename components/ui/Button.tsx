import { cn } from '@/lib/utils';
import Link from 'next/link';
import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary: 'bg-gradient-primary text-bg hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]',
  outline: 'border border-border text-text-primary hover:border-accent-cyan hover:text-accent-cyan',
  ghost: 'text-text-muted hover:text-text-primary',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-14 px-8 text-base',
};

const base = 'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

type CommonProps = { variant?: Variant; size?: Size; className?: string; children: ReactNode };

type ButtonAsButton = CommonProps & ComponentPropsWithoutRef<'button'> & { href?: never };
type ButtonAsLink = CommonProps & { href: string; external?: boolean };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const cls = cn(base, variants[variant], sizes[size], className);

  if ('href' in props && props.href) {
    if (props.external) {
      return <a href={props.href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
    }
    return <Link href={props.href} className={cls}>{children}</Link>;
  }
  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as ButtonAsButton;
  return <button className={cls} {...rest}>{children}</button>;
}
