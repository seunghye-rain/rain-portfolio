'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/shared/constants/navItems';

import { HeaderNavLink } from './HeaderNavLink';

export const HeaderMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  return (
    <div className='lg:hidden'>
      <button
        type='button'
        aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className='flex size-[3.2rem] flex-col items-center justify-center gap-[0.5rem]'
      >
        <span
          className={cn(
            'bg-black-10 h-[0.2rem] w-[2.2rem] transition-transform duration-200 ease-out',
            isOpen && 'translate-y-[0.7rem] rotate-45',
          )}
        />
        <span
          className={cn(
            'bg-black-10 h-[0.2rem] w-[2.2rem] transition-opacity duration-200 ease-out',
            isOpen && 'opacity-0',
          )}
        />
        <span
          className={cn(
            'bg-black-10 h-[0.2rem] w-[2.2rem] transition-transform duration-200 ease-out',
            isOpen && '-translate-y-[0.7rem] -rotate-45',
          )}
        />
      </button>

      {isOpen && (
        <nav
          aria-label='모바일 내비게이션'
          className='bg-black-1 border-black-5 absolute inset-x-0 top-full flex flex-col gap-[0.8rem] border-b p-[2rem]'
        >
          {NAV_ITEMS.map((item) => (
            <HeaderNavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>
      )}
    </div>
  );
};
