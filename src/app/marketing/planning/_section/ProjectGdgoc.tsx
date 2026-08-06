import Image from 'next/image';

import { MainTextLayout } from '@/shared/components/layout';
import { ScrollReveal } from '@/shared/components/ui';

import { GDGOC_ACTION_ITEMS, GDGOC_DESCRIPTION } from '../mocks/gdgocProject';

export const ProjectGdgoc = () => {
  return (
    <>
      <ScrollReveal className='flex w-full items-start gap-[4rem]'>
        <Image
          src='/imgs/project-sopt/img-gdgoc-logo.png'
          alt='GDGoC Ewha'
          width={300}
          height={300}
          className='size-[30rem] shrink-0 object-contain'
        />
        <MainTextLayout
          title={GDGOC_DESCRIPTION.title}
          period={GDGOC_DESCRIPTION.period}
          content={GDGOC_DESCRIPTION.paragraphs}
        />
      </ScrollReveal>

      <ScrollReveal className='flex w-full flex-col items-start gap-[3.2rem]'>
        <h3 className='display-sb-32 text-black-10'>Action</h3>
        <div className='flex w-full flex-col gap-[2.4rem]'>
          {GDGOC_ACTION_ITEMS.map((item) => (
            <div
              key={item}
              className='bg-black-1 flex h-[72rem] w-full items-center justify-center rounded-[1.6rem]'
            >
              <p className='title-20-md text-black-9'>{item}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </>
  );
};
