'use client';

import { useEffect, useRef } from 'react';

import { SectionTitle, Tabs } from '@/shared/components/ui';

const TAB_ITEMS = [
  { value: 'all', label: 'ALL', href: '/develop?platform=all' },
  { value: 'web', label: 'WEB', href: '/develop?platform=web' },
  { value: 'app', label: 'APP', href: '/develop?platform=app' },
] as const;

type ProjectFilterTabsProps = {
  activePlatform: string;
};

export const ProjectFilterTabs = ({ activePlatform }: ProjectFilterTabsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prevPlatformRef = useRef(activePlatform);

  useEffect(() => {
    const hasChanged = prevPlatformRef.current !== activePlatform;
    prevPlatformRef.current = activePlatform;
    if (!hasChanged) return;

    const bottom = ref.current?.getBoundingClientRect().bottom;
    if (bottom === undefined) return;
    window.scrollTo({ top: window.scrollY + bottom, behavior: 'smooth' });
  }, [activePlatform]);

  return (
    <div
      ref={ref}
      className='bg-black-1 sticky top-[9.8rem] z-40 -mx-[8rem] flex w-[calc(100%+16rem)] flex-col items-center px-[8rem]'
    >
      <SectionTitle id='develop-project-title' title='Project' emoji='💻' />
      <Tabs>
        <Tabs.List className='justify-center'>
          {TAB_ITEMS.map((tab) => (
            <Tabs.Item
              key={tab.value}
              value={tab.value}
              activeValue={activePlatform}
              href={tab.href}
              size='lg'
            >
              {tab.label}
            </Tabs.Item>
          ))}
        </Tabs.List>
      </Tabs>
    </div>
  );
};
