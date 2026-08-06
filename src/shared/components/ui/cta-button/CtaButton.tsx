import Link from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  rel?: string;
};

export const CtaButton = ({ href, children, target, rel }: CtaButtonProps) => {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className='bg-yellow-3 text-black-9 title-26-sb inline-flex items-center justify-center self-start rounded-[6rem] px-[3rem] py-[1.6rem] whitespace-nowrap'
    >
      {children}
    </Link>
  );
};
