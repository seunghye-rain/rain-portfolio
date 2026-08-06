import Image, { type StaticImageData } from 'next/image';

import { cn } from '@/lib/utils';
import type { ImageRatio } from '@/shared/constants/imageRatio';
import { IMAGE_RATIO_CLASS } from '@/shared/constants/imageRatio';

import type { Platform } from '../platform-chip';
import { PlatformChip } from '../platform-chip';

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  href: string;
  imageRatio?: ImageRatio;
  platform?: Platform;
};

export const ProjectCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  imageRatio = 'default',
  platform,
}: ProjectCardProps) => {
  return (
    <a
      href={href}
      className='border-black-4 bg-black-1 flex w-[30rem] flex-col items-start gap-[1rem] rounded-[1.6rem] border pb-[1.2rem] shadow-[0_0.4rem_1.2rem_0_rgba(0,0,0,0.06)]'
    >
      <div
        className={cn(
          'bg-black-4 relative w-full overflow-hidden rounded-t-[1.6rem]',
          IMAGE_RATIO_CLASS[imageRatio],
        )}
      >
        {imageSrc && (
          <Image src={imageSrc} alt={imageAlt ?? ''} fill className='object-cover object-center' />
        )}
      </div>
      <div className='flex w-full flex-col items-start gap-[1rem] px-[1.6rem]'>
        <div className='flex w-full items-center justify-between gap-[0.8rem]'>
          <p className='font-18-bd text-black-10 line-clamp-2'>{title}</p>
          {platform && <PlatformChip platform={platform} />}
        </div>
        <p className='font-16-rg text-black-7'>{description}</p>
      </div>
    </a>
  );
};
