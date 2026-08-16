import Link from 'next/link';

import { IconCircledright } from '@/shared/assets';
import { ContentWriteBox } from '@/shared/components/ui';

type HoverableContentBoxProps = {
  href: string;
  title: string;
  description: string[];
  boldPhrases: string[];
};

export const HoverableContentBox = ({
  href,
  title,
  description,
  boldPhrases,
}: HoverableContentBoxProps) => {
  return (
    <Link
      href={href}
      className='group relative block self-start overflow-hidden rounded-[1.6rem] max-lg:w-full'
    >
      <ContentWriteBox title={title} description={description} boldPhrases={boldPhrases} />
      <div className='bg-black-7/60 absolute inset-0 flex items-center justify-center gap-[2rem] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
        <span className='display-sb-42 text-black-10'>더 알아보기</span>
        <span className='bg-black-1 flex size-[5rem] shrink-0 items-center justify-center rounded-full'>
          <IconCircledright className='size-[7.2rem] -rotate-45' />
        </span>
      </div>
    </Link>
  );
};
