'use client';

import { useEffect, useRef } from 'react';

import { IconSmartphone } from '@/shared/assets';
import { SectionTitle, Tabs } from '@/shared/components/ui';

const TAB_ITEMS = [
  { value: 'sopt', label: 'SOPT', href: '/marketing/planning?tab=sopt' },
  { value: 'gdgoc', label: 'GDGoC', href: '/marketing/planning?tab=gdgoc' },
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

    const el = ref.current;
    if (!el) return;

    // sticky 상태에서는 getBoundingClientRect가 화면에 고정된 현재 위치를 돌려줘서
    // 실제 문서상 위치를 알 수 없다. 잠깐 static으로 풀어 원래 위치를 잰 뒤 되돌린다.
    const prevPosition = el.style.position;
    el.style.position = 'static';
    const naturalTop = el.getBoundingClientRect().top + window.scrollY;
    el.style.position = prevPosition;

    window.scrollTo({ top: naturalTop, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div
      ref={ref}
      className='bg-black-1 sticky top-[9.8rem] z-40 -mx-[8rem] flex w-[calc(100%+16rem)] flex-col items-center px-[8rem]'
    >
      <SectionTitle id='marketing-planning-project-title' title='Project' icon={IconSmartphone} />
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
