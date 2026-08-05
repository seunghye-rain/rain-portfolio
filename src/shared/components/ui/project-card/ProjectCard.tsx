import Image from 'next/image';

import { cn } from '@/lib/utils';

const IMAGE_RATIO_CLASS: Record<'default' | 'portrait', string> = {
  default: 'aspect-[300/169]',
  portrait: 'aspect-[4/5]',
};

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageRatio?: 'default' | 'portrait';
};

export const ProjectCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imageRatio = 'default',
}: ProjectCardProps) => {
  return (
    <div className='border-black-4 bg-black-1 flex w-[30rem] flex-col items-start gap-[1rem] rounded-[1.6rem] border pb-[1.2rem]'>
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-t-[1.6rem]',
          IMAGE_RATIO_CLASS[imageRatio],
        )}
      >
        <Image src={imageSrc} alt={imageAlt} fill className='object-cover' />
      </div>
      <div className='flex w-full flex-col items-start gap-[1rem] px-[1.6rem]'>
        <p className='font-18-bd text-black-10 whitespace-nowrap'>{title}</p>
        <p className='font-16-md text-black-7'>{description}</p>
      </div>
    </div>
  );
};
