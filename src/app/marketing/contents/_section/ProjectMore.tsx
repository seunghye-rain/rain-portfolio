import { Divider, ProjectCard, ScrollReveal } from '@/shared/components/ui';
import type { ImageRatio } from '@/shared/constants/imageRatio';

const CARD_SECTIONS: { title: string; imageRatio: ImageRatio }[] = [
  { title: '롱폼 영상', imageRatio: 'default' },
  { title: '숏폼 영상', imageRatio: 'portrait' },
  { title: '카드 뉴스', imageRatio: 'portrait' },
];

const PLACEHOLDER_CARDS = [1, 2, 3];

export const ProjectMore = () => {
  return (
    <ScrollReveal className='flex w-full flex-col items-start gap-[4rem]'>
      {CARD_SECTIONS.map((section, index) => (
        <div key={section.title} className='flex w-full flex-col items-start gap-[4rem]'>
          <h3 className='display-sb-32 text-black-10'>{section.title}</h3>
          <div className='flex flex-wrap gap-[5.6rem]'>
            {PLACEHOLDER_CARDS.map((card) => (
              <ProjectCard
                key={card}
                href='#'
                title='영상 제목'
                description='영상 설명'
                imageRatio={section.imageRatio}
              />
            ))}
          </div>
          {index < CARD_SECTIONS.length - 1 && <Divider />}
        </div>
      ))}
    </ScrollReveal>
  );
};
