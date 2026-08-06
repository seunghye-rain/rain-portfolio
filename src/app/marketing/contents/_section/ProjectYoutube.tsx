import Image from 'next/image';

import { MainTextLayout } from '@/shared/components/layout';
import { ContentWriteBox, CtaButton, NumberedItem, ScrollReveal } from '@/shared/components/ui';

import {
  YOUTUBE_ACTION_ITEMS,
  YOUTUBE_DESCRIPTION,
  YOUTUBE_OBJECT,
  YOUTUBE_RESULT_ITEMS,
  YOUTUBE_STAT_BOXES,
} from '../mocks/youtubeProject';

export const ProjectYoutube = () => {
  return (
    <>
      <ScrollReveal className='flex w-full items-start gap-[3.5rem]'>
        <Image
          src='/imgs/project-sopt/img-bbangddoa-logo.png'
          alt='빵또아'
          width={300}
          height={300}
          className='size-[30rem] shrink-0 object-contain'
        />
        <MainTextLayout
          title={YOUTUBE_DESCRIPTION.title}
          period={YOUTUBE_DESCRIPTION.period}
          content={YOUTUBE_DESCRIPTION.paragraphs}
        />
      </ScrollReveal>

      <div className='flex w-full items-start justify-center gap-[8rem]'>
        <ScrollReveal direction='fade' className='sticky top-[24.4rem] shrink-0'>
          <Image
            src='/imgs/project-sopt/img-bbangddoa-phone.png'
            alt='빵또아 유튜브 채널 화면'
            width={341}
            height={700}
            className='h-[70rem] w-[34.1rem] object-contain'
          />
        </ScrollReveal>

        <ScrollReveal
          direction='right'
          className='flex w-[78.3rem] flex-col items-start gap-[2.5rem]'
        >
          <MainTextLayout title={YOUTUBE_OBJECT.title} content={YOUTUBE_OBJECT.paragraphs} />

          <div className='flex flex-col items-start gap-[2.4rem]'>
            <h3 className='display-sb-32 text-black-10'>Action</h3>
            <div className='flex flex-col items-start gap-[2rem]'>
              {YOUTUBE_ACTION_ITEMS.map((item) => (
                <NumberedItem key={item.heading} {...item} />
              ))}
            </div>
          </div>

          <div className='flex flex-col items-start gap-[2.4rem]'>
            <h3 className='display-sb-32 text-black-10'>Result</h3>
            <div className='flex flex-col items-start gap-[2rem]'>
              {YOUTUBE_RESULT_ITEMS.map((item) => (
                <NumberedItem key={item.heading} {...item} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal className='flex gap-[8.6rem]'>
        {YOUTUBE_STAT_BOXES.map((stat) => (
          <ContentWriteBox
            key={stat.title}
            variant='stat'
            title={stat.title}
            description={stat.description}
          />
        ))}
      </ScrollReveal>

      <div>
        <CtaButton
          href='https://www.youtube.com/@bbangddoa_d7'
          target='_blank'
          rel='noopener noreferrer'
        >
          영상 더보기
        </CtaButton>
      </div>
    </>
  );
};
