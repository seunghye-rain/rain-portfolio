import { Accordion, SectionTitle } from '@/shared/components/ui';

import { ACTIVITIES } from '../mocks/activities';

export const ActivitiesSection = () => {
  return (
    <div className='flex flex-col items-center gap-[4rem]'>
      <SectionTitle id='resume-activities-title' title='ACTIVITIES' />
      <div className='flex w-full max-w-[110rem] flex-col items-center gap-[1.6rem]'>
        {ACTIVITIES.map((activity) => (
          <div key={activity.title} className='flex justify-center'>
            <Accordion
              key={activity.title}
              title={activity.title}
              period={activity.period}
              details={activity.details}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
