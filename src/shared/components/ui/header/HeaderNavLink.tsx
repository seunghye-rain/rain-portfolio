'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

type HeaderNavLinkProps = {
  href: string;
  label: string;
};

export const HeaderNavLink = ({ href, label }: HeaderNavLinkProps) => {
  const pathname = usePathname();
  const isActive =
    href === '/' ? pathname === href : pathname.startsWith(`${href}/`) || pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'flex h-[3.8rem] items-center rounded-[1rem] py-[0.6rem] transition-all duration-200 ease-out',
        isActive
          ? 'bg-yellow-5 text-yellow-1 px-[2.4rem]'
          : 'text-black-7 hover:text-yellow-1 px-[1.8rem]',
      )}
    >
      <span className='title-20-sb whitespace-nowrap'>{label}</span>
    </Link>
  );
};
