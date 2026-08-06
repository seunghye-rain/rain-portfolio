'use client';

import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { useInView } from '@/shared/hooks/useInView';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
};

export const ScrollReveal = ({ children, className }: ScrollRevealProps) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-[4rem] opacity-0',
        className,
      )}
    >
      {children}
    </div>
  );
};
