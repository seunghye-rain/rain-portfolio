import Image from 'next/image';
import Link from 'next/link';

import { NAV_ITEMS } from '@/shared/constants/navItems';

import { HeaderNavLink } from './HeaderNavLink';

export const Header = () => {
  return (
    <header className='bg-black-1 border-black-5 fixed inset-x-0 top-0 z-50 grid h-[9.8rem] w-full grid-cols-[minmax(26.3rem,1fr)_max-content_minmax(0,1fr)] items-center border-b px-[8rem]'>
      <Link href='/' aria-label='홈으로 이동' className='justify-self-start'>
        <Image src='/imgs/logo.png' alt='양승혜 포트폴리오' width={263} height={62} />
      </Link>
      <nav className='flex items-stretch gap-[3rem] justify-self-center'>
        {NAV_ITEMS.map((item) => (
          <HeaderNavLink key={item.href} href={item.href} label={item.label} />
        ))}
      </nav>
      <div aria-hidden />
    </header>
  );
};
