import { cn } from '@/lib/utils';
import { SectionTitle, SkillTile } from '@/shared/components/ui';

import type { SkillCategory } from '../mocks/skills';
import { SKILL_CATEGORIES } from '../mocks/skills';

const SkillCategoryBox = ({ title, items }: SkillCategory) => {
  return (
    <div className='border-yellow-1 bg-yellow-5/60 flex w-[41.3rem] flex-col items-center gap-[3.2rem] rounded-[1.6rem] border-[0.15rem] px-[2rem] py-[3.35rem] max-lg:w-full'>
      <p className='title-30-eb text-black-9'>{title}</p>
      <div className='flex flex-1 items-center'>
        <div
          className={cn(
            'flex flex-wrap items-start justify-center gap-x-[2.2rem] gap-y-[2.4rem]',
            items.length > 4 && 'max-w-[26.6rem]',
          )}
        >
          {items.map((item) => (
            <SkillTile
              key={item.label}
              imageSrc={item.src}
              imageAlt={item.label}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const SkillSection = () => {
  return (
    <div className='flex flex-col items-center gap-[4rem]'>
      <SectionTitle id='resume-skill-title' title='SKILL' />
      <div className='flex gap-[2.1rem] max-lg:w-full max-lg:flex-col max-lg:items-center'>
        {SKILL_CATEGORIES.map((category) => (
          <SkillCategoryBox key={category.title} {...category} />
        ))}
      </div>
    </div>
  );
};
