import { ScrollReveal } from '@/shared/components/ui';

import { ActivitiesSection } from './components/ActivitiesSection';
import { AwardsSection } from './components/AwardsSection';
import { ProfileSection } from './components/ProfileSection';
import { SkillSection } from './components/SkillSection';

export default function ResumePage() {
  return (
    <div className='flex flex-col items-center gap-[10rem] max-lg:gap-[5rem]'>
      <section aria-labelledby='resume-profile-title' className='w-full'>
        <ProfileSection />
      </section>

      <section aria-labelledby='resume-skill-title' className='w-full'>
        <ScrollReveal>
          <SkillSection />
        </ScrollReveal>
      </section>

      <section aria-labelledby='resume-awards-title' className='w-full'>
        <ScrollReveal>
          <AwardsSection />
        </ScrollReveal>
      </section>

      <section aria-labelledby='resume-activities-title' className='w-full'>
        <ScrollReveal>
          <ActivitiesSection />
        </ScrollReveal>
      </section>
    </div>
  );
}
