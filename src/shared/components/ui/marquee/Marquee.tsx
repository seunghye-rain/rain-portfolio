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
  return (
    <ScrollReveal direction='fade' className='w-full overflow-hidden'>
      <div className={cn('animate-marquee flex w-max items-center', className)}>
        {items.map((item) => (
          <div key={`${keyExtractor(item)}-original`}>{renderItem(item)}</div>
        ))}
        {items.map((item) => (
          <div key={`${keyExtractor(item)}-clone`} aria-hidden>
            {renderItem(item)}
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
};
