'use client';

import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { useInView } from '@/shared/hooks/useInView';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'right' | 'fade';
};

const HIDDEN_CLASS_NAME = {
  up: 'translate-y-[4rem] opacity-0',
  right: 'translate-x-[4rem] opacity-0',
  fade: 'opacity-0',
};

const VISIBLE_CLASS_NAME = {
  up: 'translate-y-0 opacity-100',
  right: 'translate-x-0 opacity-100',
  fade: 'opacity-100',
};

export const ScrollReveal = ({ children, className, direction = 'up' }: ScrollRevealProps) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isInView ? VISIBLE_CLASS_NAME[direction] : HIDDEN_CLASS_NAME[direction],
        className,
      )}
    >
      {children}
    </div>
  );
};
