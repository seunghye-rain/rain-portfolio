import { Divider, ProjectCard, ScrollReveal } from '@/shared/components/ui';
import type { ImageRatio } from '@/shared/constants/imageRatio';

import type { MoreProjectCard } from '../mocks/moreProject';
import { CARDNEWS_PROJECTS, LONGFORM_PROJECTS, SHORTFORM_PROJECTS } from '../mocks/moreProject';

const CARD_SECTIONS: { title: string; imageRatio: ImageRatio; projects: MoreProjectCard[] }[] = [
  { title: '롱폼 영상', imageRatio: 'default', projects: LONGFORM_PROJECTS },
  { title: '숏폼 영상', imageRatio: 'portrait', projects: SHORTFORM_PROJECTS },
  { title: '카드 뉴스', imageRatio: 'portrait', projects: CARDNEWS_PROJECTS },
];

export const ProjectMore = () => {
  return (
    <div className='flex w-full flex-col items-start gap-[4rem]'>
      {CARD_SECTIONS.map((section, index) => (
        <ScrollReveal key={section.title} className='flex w-full flex-col items-start gap-[4rem]'>
          <h3 className='display-sb-32 text-black-10'>{section.title}</h3>
          <div className='grid grid-cols-4 gap-x-[2.6rem] gap-y-[5.6rem]'>
            {section.projects.map((project) => (
              <ProjectCard
                key={project.href}
                href={project.href}
                title={project.title}
                description={project.description}
                imageSrc={project.image}
                imageAlt={project.title}
                imageRatio={section.imageRatio}
                target='_blank'
                rel='noopener noreferrer'
              />
            ))}
          </div>
          {index < CARD_SECTIONS.length - 1 && <Divider />}
        </ScrollReveal>
      ))}
    </div>
  );
};
