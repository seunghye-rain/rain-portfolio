import { IconAwards } from '@/shared/assets';
import { SectionTitle } from '@/shared/components/ui';

import { AWARDS } from '../mocks/awards';

export const AwardsSection = () => {
  return (
    <div className='flex flex-col items-center gap-[4rem]'>
      <SectionTitle id='resume-awards-title' title='AWARDS' />
      <ul className='flex flex-col items-center gap-[2rem]'>
        {AWARDS.map((award) => (
          <li key={award} className='flex items-center gap-[0.8rem]'>
            <IconAwards className='size-[2.6rem]' />
            <span className='title-20-md text-black-10'>{award}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
