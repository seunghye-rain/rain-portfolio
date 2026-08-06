'use client';

import { useEffect, useRef } from 'react';

import { IconSmartphone } from '@/shared/assets';
import { SectionTitle, Tabs } from '@/shared/components/ui';

const TAB_ITEMS = [
  { value: 'sopt', label: 'SOPT', href: '/marketing/contents?tab=sopt' },
  { value: 'youtube', label: 'YouTube', href: '/marketing/contents?tab=youtube' },
  { value: 'more', label: '더보기', href: '/marketing/contents?tab=more' },
] as const;

type ProjectTabsProps = {
  activeTab: string;
};

export const ProjectTabs = ({ activeTab }: ProjectTabsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prevTabRef = useRef(activeTab);

  useEffect(() => {
    const hasChanged = prevTabRef.current !== activeTab;
    prevTabRef.current = activeTab;
    if (!hasChanged) return;

    const bottom = ref.current?.getBoundingClientRect().bottom;
    if (bottom === undefined) return;
    window.scrollTo({ top: window.scrollY + bottom, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div
      ref={ref}
      className='bg-black-1 sticky top-[9.8rem] z-40 -mx-[8rem] flex w-[calc(100%+16rem)] flex-col items-center px-[8rem]'
    >
      <SectionTitle id='marketing-contents-project-title' title='Project' icon={IconSmartphone} />
      <Tabs>
        <Tabs.List className='justify-center'>
          {TAB_ITEMS.map((tab) => (
            <Tabs.Item
              key={tab.value}
              value={tab.value}
              activeValue={activeTab}
              href={tab.href}
              size='md'
            >
              {tab.label}
            </Tabs.Item>
          ))}
        </Tabs.List>
      </Tabs>
    </div>
  );
};
