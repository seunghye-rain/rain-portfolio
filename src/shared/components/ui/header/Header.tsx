import Image from 'next/image';
import Link from 'next/link';

import { NAV_ITEMS } from '@/shared/constants/navItems';

import { HeaderMobileMenu } from './HeaderMobileMenu';
import { HeaderNavLink } from './HeaderNavLink';

export const Header = () => {
  return (
    <header className='bg-black-1 border-black-5 fixed inset-x-0 top-0 z-50 flex h-[6.4rem] w-full items-center justify-between border-b px-[2rem] lg:grid lg:h-[9.8rem] lg:grid-cols-[minmax(26.3rem,1fr)_max-content_minmax(0,1fr)] lg:px-[8rem]'>
      <Link href='/' aria-label='홈으로 이동' className='lg:justify-self-start'>
        <Image
          src='/imgs/logo.png'
          alt='양승혜 포트폴리오'
          width={263}
          height={62}
          className='h-auto w-[14rem] lg:w-[26.3rem]'
        />
      </Link>
      <nav className='hidden items-stretch gap-[3rem] lg:flex lg:justify-self-center'>
        {NAV_ITEMS.map((item) => (
          <HeaderNavLink key={item.href} href={item.href} label={item.label} />
        ))}
      </nav>
      <div aria-hidden className='hidden lg:block' />
      <HeaderMobileMenu />
    </header>
  );
};
