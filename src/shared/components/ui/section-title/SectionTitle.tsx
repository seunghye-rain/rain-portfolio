import type { ComponentType } from 'react';

import type { IconProps } from '@/shared/assets';
import { IconRain } from '@/shared/assets';

type SectionTitleProps = {
  title: string;
  showIcon?: boolean;
  icon?: ComponentType<IconProps>;
  id?: string;
};

export const SectionTitle = ({
  title,
  showIcon = true,
  icon: Icon = IconRain,
  id,
}: SectionTitleProps) => {
  return (
    <div className='flex items-center'>
      {showIcon && (
        <div className='px-[2.9rem] py-[2.2rem]'>
          <Icon className='size-[4.2rem]' />
        </div>
      )}
      <div className='flex flex-col items-start pr-[2.9rem]'>
        <h2 id={id} className='display-sb-36 text-black-10 whitespace-nowrap'>
          {title}
        </h2>
        <div className='bg-yellow-1/30 mt-[-1.2rem] h-[1.2rem] w-full' />
      </div>
    </div>
  );
};
