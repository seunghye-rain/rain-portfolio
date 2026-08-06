import Link from 'next/link';
import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type TabsProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

type TabsListProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

type TabItemProps = {
  value: string;
  activeValue: string;
  children: ReactNode;
  className?: string;
} & ({ href: string; onClick?: never } | { href?: never; onClick: () => void });

const Tabs = ({ className, children, ...props }: TabsProps) => {
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

const TabItem = ({ value, activeValue, children, className, href, onClick }: TabItemProps) => {
  const isActive = value === activeValue;
  const itemClassName = cn(
    'title-26-md flex items-center justify-center border-b-[0.2rem] px-[0.4rem] pb-[1rem] transition-colors duration-200',
    isActive ? 'border-yellow-1 text-yellow-1' : 'text-black-7 border-transparent',
    className,
  );

  if (href) {
    return (
      <Link
        role='tab'
        aria-selected={isActive}
        href={href}
        scroll={false}
        className={itemClassName}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type='button'
      role='tab'
      aria-selected={isActive}
      onClick={onClick}
      className={itemClassName}
    >
      {children}
    </button>
  );
};

const CompoundTabs = Object.assign(Tabs, { List: TabsList, Item: TabItem });

export { CompoundTabs as Tabs };
