import Image from 'next/image';

import { cn } from '@/lib/utils';
import type { ImageRatio } from '@/shared/constants/imageRatio';
import { IMAGE_RATIO_CLASS } from '@/shared/constants/imageRatio';

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  imageRatio?: ImageRatio;
};

export const ProjectCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  imageRatio = 'default',
}: ProjectCardProps) => {
  return (
    <a
      href={href}
      className='border-black-4 bg-black-1 flex w-[30rem] flex-col items-start gap-[1rem] rounded-[1.6rem] border pb-[1.2rem]'
    >
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-t-[1.6rem]',
          IMAGE_RATIO_CLASS[imageRatio],
        )}
      >
        <Image src={imageSrc} alt={imageAlt} fill className='object-cover object-center' />
      </div>
      <div className='flex w-full flex-col items-start gap-[1rem] px-[1.6rem]'>
        <p className='font-18-sb text-black-10 line-clamp-2'>{title}</p>
        <p className='font-16-rg text-black-7'>{description}</p>
      </div>
    </a>
  );
};
