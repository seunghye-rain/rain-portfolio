import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { ScrollReveal } from '../scroll-reveal';

type MarqueeProps<T> = {
  items: T[];
  keyExtractor: (item: T) => string;
  renderItem: (item: T) => ReactNode;
  className?: string;
};

// translateX(-50%)로 매끄럽게 도는 트릭은 절반 폭(=트랙 전체의 절반)이 뷰포트보다 넓어야
// 어느 시점에도 빈 공간이 보이지 않는다. 아이템 수가 적어 한 세트 폭이 좁을 때를 대비해
// 넉넉하게 반복해서, 화면이 넓어도 절반 폭이 항상 뷰포트를 덮도록 한다.
const REPEAT_COUNT = 8;
const COPY_KEYS = Array.from({ length: REPEAT_COUNT }, (_, index) => `copy-${index}`);

export const Marquee = <T,>({ items, keyExtractor, renderItem, className }: MarqueeProps<T>) => {
  return (
    <ScrollReveal direction='fade' className='w-full overflow-hidden'>
      <div className={cn('animate-marquee flex w-max items-center', className)}>
        {COPY_KEYS.map((copyKey, copyIndex) =>
          items.map((item) => (
            <div key={`${copyKey}-${keyExtractor(item)}`} aria-hidden={copyIndex > 0 || undefined}>
              {renderItem(item)}
            </div>
          )),
        )}
      </div>
    </ScrollReveal>
  );
};
