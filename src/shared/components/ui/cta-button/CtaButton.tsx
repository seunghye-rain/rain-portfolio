import Link from 'next/link';
import type { ReactNode } from 'react';

type CtaButtonProps = {
  href: string;
  children: ReactNode;
};

export const CtaButton = ({ href, children }: CtaButtonProps) => {
  return (
    <Link
      href={href}
      className='bg-yellow-3 text-black-9 display-sb-36 flex h-[9.2rem] w-[34.3rem] items-center justify-center rounded-[4.6rem] px-[2.4rem] whitespace-nowrap'
    >
      {children}
    </Link>
  );
};
