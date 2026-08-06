import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { ScrollReveal } from '../scroll-reveal';

type MarqueeProps<T> = {
  items: T[];
  keyExtractor: (item: T) => string;
  renderItem: (item: T) => ReactNode;
  className?: string;
};

export const Marquee = <T,>({ items, keyExtractor, renderItem, className }: MarqueeProps<T>) => {
  const loopItems = [...items, ...items];

  return (
    <ScrollReveal direction='fade' className='w-full overflow-hidden'>
      <div className={cn('animate-marquee flex w-max items-center', className)}>
        {loopItems.map((item, index) => (
          <div key={`${keyExtractor(item)}-${index}`}>{renderItem(item)}</div>
        ))}
      </div>
    </ScrollReveal>
  );
};
