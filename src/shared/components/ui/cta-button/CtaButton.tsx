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
      className='bg-yellow-3 text-black-9 title-26-sb inline-flex items-center justify-center self-start rounded-[6rem] px-[3rem] py-[1.6rem] whitespace-nowrap'
    >
      {children}
    </Link>
  );
};
