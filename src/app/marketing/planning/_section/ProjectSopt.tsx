import Image from 'next/image';

import { MainTextLayout } from '@/shared/components/layout';
import { ScrollReveal } from '@/shared/components/ui';

import { imgPlanningSoptAction1, imgPlanningSoptAction2 } from '../assets';
import { SOPT_DESCRIPTION } from '../mocks/soptProject';

export const ProjectSopt = () => {
  return (
    <>
      <ScrollReveal className='flex w-full items-start gap-[4rem] max-lg:flex-col max-lg:items-center max-lg:gap-[2rem]'>
        <Image
          src='/imgs/project-sopt/img-demoday.png'
          alt='SOPT 데모데이 THE CHECKPOINT'
          width={420}
          height={238}
          className='h-[23.8rem] w-[42rem] shrink-0 rounded-[1.6rem] object-cover max-lg:h-auto max-lg:w-full'
        />
        <MainTextLayout
          title={SOPT_DESCRIPTION.title}
          period={SOPT_DESCRIPTION.period}
          content={SOPT_DESCRIPTION.paragraphs}
          className='max-lg:w-full'
        />
      </ScrollReveal>

      <ScrollReveal className='flex w-full flex-col items-start gap-[4rem]'>
        <h3 className='display-sb-32 text-black-10'>Action - 홍보 콘텐츠 기획 및 제작</h3>
        <Image
          src={imgPlanningSoptAction1}
          alt='SOPT 홍보 콘텐츠'
          className='w-full rounded-[0.8rem]'
        />
      </ScrollReveal>

      <ScrollReveal className='flex w-full flex-col items-start gap-[4rem]'>
        <h3 className='display-sb-32 text-black-10'>Action - Meta 광고</h3>
        <Image
          src={imgPlanningSoptAction2}
          alt='SOPT 홍보 콘텐츠'
          className='w-full rounded-[0.8rem]'
        />
      </ScrollReveal>
    </>
  );
};
