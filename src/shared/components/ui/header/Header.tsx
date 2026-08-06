import Image from 'next/image';

import { NAV_ITEMS } from '@/shared/constants/navItems';

import { HeaderNavLink } from './HeaderNavLink';

export const Header = () => {
  return (
    <header className='bg-black-1 border-black-5 fixed inset-x-0 top-0 z-50 flex h-[9.8rem] w-full items-center gap-[12.6rem] border-b pl-[8rem]'>
      <Image src='/imgs/logo.png' alt='양승혜 포트폴리오' width={263} height={62} />
      <nav className='flex items-stretch gap-[3rem]'>
        {NAV_ITEMS.map((item) => (
          <HeaderNavLink key={item.href} href={item.href} label={item.label} />
        ))}
      </nav>
    </header>
  );
};
