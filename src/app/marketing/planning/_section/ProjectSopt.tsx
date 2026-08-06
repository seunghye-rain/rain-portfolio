import Image from 'next/image';

import { MainTextLayout } from '@/shared/components/layout';
import { ScrollReveal } from '@/shared/components/ui';

import { SOPT_ACTION_ITEMS, SOPT_DESCRIPTION, SOPT_RESULT_ITEMS } from '../mocks/soptProject';

export const ProjectSopt = () => {
  return (
    <>
      <ScrollReveal className='flex w-full items-start gap-[4rem]'>
        <Image
          src='/imgs/project-sopt/img-demoday.png'
          alt='SOPT 데모데이 THE CHECKPOINT'
          width={420}
          height={238}
          className='h-[23.8rem] w-[42rem] shrink-0 rounded-[1.6rem] object-cover'
        />
        <MainTextLayout
          title={SOPT_DESCRIPTION.title}
          period={SOPT_DESCRIPTION.period}
          content={SOPT_DESCRIPTION.paragraphs}
        />
      </ScrollReveal>

      <ScrollReveal className='flex w-full flex-col items-start gap-[3.2rem]'>
        <h3 className='display-sb-32 text-black-10'>Action</h3>
        <div className='flex w-full flex-col gap-[2.4rem]'>
          {SOPT_ACTION_ITEMS.map((item) => (
            <div
              key={item}
              className='bg-black-1 flex h-[72rem] w-full items-center justify-center rounded-[1.6rem]'
            >
              <p className='title-20-md text-black-9'>{item}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className='flex w-full flex-col items-start gap-[3.2rem]'>
        <h3 className='display-sb-32 text-black-10'>Result</h3>
        <div className='flex w-full flex-col gap-[2.4rem]'>
          {SOPT_RESULT_ITEMS.map((item) => (
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
