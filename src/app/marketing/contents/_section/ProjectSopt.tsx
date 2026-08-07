import Image from 'next/image';

import { MainTextLayout } from '@/shared/components/layout';
import { ContentWriteBox, CtaButton, NumberedItem, ScrollReveal } from '@/shared/components/ui';

import {
  imgContentsSoptPart1,
  imgContentsSoptPart2,
  imgContentsSoptSoptlist1,
  imgContentsSoptSoptlist2,
} from '../assets';
import {
  SOPT_ACTION_ITEMS,
  SOPT_DESCRIPTION,
  SOPT_OBJECT,
  SOPT_RESULT_ITEMS,
  SOPT_STAT_BOXES,
} from '../mocks/soptProject';

export const ProjectSopt = () => {
  return (
    <>
      <ScrollReveal className='flex w-full items-start gap-[3.5rem]'>
        <Image
          src='/imgs/project-sopt/img-sopt-logo.png'
          alt='SOPT'
          width={300}
          height={300}
          className='size-[30rem] shrink-0 object-contain'
        />
        <MainTextLayout
          title='국내 최대 규모 IT벤처 창업 동아리 SOPT 미디어팀 운영'
          period={SOPT_DESCRIPTION.period}
          content={SOPT_DESCRIPTION.paragraphs}
        />
      </ScrollReveal>

      <div className='flex w-full items-start justify-center gap-[8rem]'>
        <ScrollReveal direction='fade' className='sticky top-[24.4rem] shrink-0'>
          <Image
            src='/imgs/project-sopt/img-sopt-media-phone.png'
            alt='SOPT 미디어팀 인스타그램 화면'
            width={341}
            height={700}
            className='h-[70rem] w-[34.1rem] object-contain'
          />
        </ScrollReveal>

        <ScrollReveal
          direction='right'
          className='flex w-[78.3rem] flex-col items-start gap-[2.5rem]'
        >
          <MainTextLayout title={SOPT_OBJECT.title} content={SOPT_OBJECT.paragraphs} />

          <div className='flex flex-col items-start gap-[2.4rem]'>
            <h3 className='display-sb-32 text-black-10'>Action</h3>
            <div className='flex flex-col items-start gap-[2rem]'>
              {SOPT_ACTION_ITEMS.map((item) => (
                <NumberedItem key={item.heading} {...item} />
              ))}
            </div>
          </div>

          <div className='flex flex-col items-start gap-[2.4rem]'>
            <h3 className='display-sb-32 text-black-10'>Result</h3>
            <div className='flex flex-col items-start gap-[2rem]'>
              {SOPT_RESULT_ITEMS.map((item) => (
                <NumberedItem key={item.heading} {...item} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal className='flex gap-[8.6rem]'>
        {SOPT_STAT_BOXES.map((stat) => (
          <ContentWriteBox
            key={stat.title}
            variant='stat'
            title={stat.title}
            description={stat.description}
          />
        ))}
      </ScrollReveal>

      <ScrollReveal className='flex w-full flex-col items-start'>
        <div className='flex flex-col gap-[4rem]'>
          <h3 className='display-sb-32 text-black-10'>대표 콘텐츠 - SOPTLIST</h3>
          <div className='flex w-full flex-col gap-[2.4rem]'>
            <Image
              src={imgContentsSoptSoptlist1}
              alt='SOPTLIST'
              className='w-full rounded-[0.8rem]'
            />
            <Image
              src={imgContentsSoptSoptlist2}
              alt='SOPTLIST'
              className='w-full rounded-[0.8rem]'
            />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className='flex w-full flex-col items-start'>
        <div className='flex flex-col gap-[4rem]'>
          <h3 className='display-sb-32 text-black-10'>대표 콘텐츠 - 파트장 영통 팬사인회</h3>
          <div className='flex w-full flex-col gap-[2.4rem]'>
            <Image src={imgContentsSoptPart1} alt='SOPTLIST' className='w-full rounded-[0.8rem]' />
            <Image src={imgContentsSoptPart2} alt='SOPTLIST' className='w-full rounded-[0.8rem]' />
          </div>
        </div>
      </ScrollReveal>

      <div>
        <CtaButton href='/marketing/contents?tab=more'>콘텐츠 더보기</CtaButton>
      </div>
    </>
  );
};
