import Link from 'next/link';
import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type TabProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

type TabsListProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

type TabItemProps = {
  value: string;
  activeValue: string;
  href: string;
  children: ReactNode;
  className?: string;
};

const Tab = ({ className, children, ...props }: TabProps) => {
  return (
    <div className={cn('w-full', className)} {...props}>
      {children}
    </div>
  );
};

const TabsList = ({ className, children, ...props }: TabsListProps) => {
  return (
    <div
      role='tablist'
      className={cn('flex items-end gap-[3.6rem] px-[2rem] pt-[1.6rem]', className)}
      {...props}
    >
      {children}
    </div>
  );
};

const TabItem = ({ value, activeValue, href, children, className }: TabItemProps) => {
  const isActive = value === activeValue;

  return (
    <Link
      role='tab'
      aria-selected={isActive}
      href={href}
      scroll={false}
      className={cn(
        'title-26-md flex items-center justify-center border-b-[0.2rem] px-[0.4rem] pb-[1rem] transition-colors duration-200',
        isActive ? 'border-yellow-1 text-yellow-1' : 'text-black-7 border-transparent',
        className,
      )}
    >
      {children}
    </Link>
  );
};

export const Tabs = Object.assign(Tab, { List: TabsList, Item: TabItem });
