import type { ComponentType } from 'react';

import { cn } from '@/lib/utils';
import type { IconProps } from '@/shared/assets';

type IconButtonProps = {
  href: string;
  icon: ComponentType<IconProps>;
  width?: number;
  height?: number;
  iconSize?: number;
  className?: string;
};

export const IconButton = ({
  href,
  icon: Icon,
  width = 6,
  height = 6,
  iconSize = 4.5,
  className,
}: IconButtonProps) => {
  return (
    <a
      href={href}
      style={{ width: `${width}rem`, height: `${height}rem` }}
      className={cn(
        'bg-black-1 flex shrink-0 items-center justify-center overflow-hidden rounded-full',
        className,
      )}
    >
      <Icon style={{ width: `${iconSize}rem`, height: `${iconSize}rem` }} />
    </a>
  );
};
