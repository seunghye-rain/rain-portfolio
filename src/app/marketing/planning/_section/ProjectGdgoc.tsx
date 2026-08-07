import Image from 'next/image';

import { MainTextLayout } from '@/shared/components/layout';
import { ScrollReveal } from '@/shared/components/ui';

import { imgPlanningGdgocAction1, imgPlanningGdgocAction2 } from '../assets';
import { GDGOC_DESCRIPTION } from '../mocks/gdgocProject';

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

      <ScrollReveal className='flex w-full flex-col items-start gap-[4rem]'>
        <h3 className='display-sb-32 text-black-10'>Action - DevFesta</h3>
        <Image src={imgPlanningGdgocAction1} alt='GDGoC 기획' className='w-full rounded-[0.8rem]' />
      </ScrollReveal>

      <ScrollReveal className='flex w-full flex-col items-start gap-[4rem]'>
        <h3 className='display-sb-32 text-black-10'>Action - Home Coming Day</h3>
        <Image src={imgPlanningGdgocAction2} alt='GDGoC 기획' className='w-full rounded-[0.8rem]' />
      </ScrollReveal>
    </>
  );
};
