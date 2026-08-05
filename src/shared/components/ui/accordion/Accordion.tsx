'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';
import { IconDownbutton, IconSlideup } from '@/shared/assets';
import { FeatureTextLayout } from '@/shared/components/layout';

type AccordionProps = {
  title: string;
  period: string;
  details: string[];
  defaultOpen?: boolean;
};

export const Accordion = ({ title, period, details, defaultOpen = false }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className='bg-black-1 inline-flex flex-col self-start rounded-[2rem] px-[2.4rem] py-[1.4rem]'>
      <div className='flex items-center justify-between gap-[1.6rem]'>
        <FeatureTextLayout title={title} subtitle={period} />
        <button
          type='button'
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className='relative size-[3.5rem] shrink-0 overflow-hidden rounded-full transition-transform duration-300 ease-in-out'
        >
          {isOpen ? <IconSlideup /> : <IconDownbutton />}
        </button>
      </div>
      <div
        className={cn(
          'grid w-0 min-w-full transition-[grid-template-rows] duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className='min-w-0 overflow-hidden'>
          <ul className='bg-yellow-5 mt-[1.6rem] flex w-full min-w-0 flex-col gap-[0.8rem] rounded-[1.6rem] px-[2.4rem] py-[1.4rem]'>
            {details.map((detail) => (
              <li key={detail} className='flex min-w-0 items-start gap-[0.4rem]'>
                <span aria-hidden className='font-18-rg text-black-8'>
                  •
                </span>
                <span className='font-18-rg text-black-8 min-w-0 flex-1'>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
