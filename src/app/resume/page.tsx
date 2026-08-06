import { ScrollReveal } from '@/shared/components/ui';

import { ActivitiesSection } from './components/ActivitiesSection';
import { AwardsSection } from './components/AwardsSection';
import { ProfileSection } from './components/ProfileSection';
import { SkillSection } from './components/SkillSection';

export default function ResumePage() {
  return (
    <div className='flex flex-col items-center gap-[10rem]'>
      <section aria-labelledby='resume-profile-title'>
        <ProfileSection />
      </section>

      <section aria-labelledby='resume-skill-title'>
        <ScrollReveal>
          <SkillSection />
        </ScrollReveal>
      </section>

      <section aria-labelledby='resume-awards-title'>
        <ScrollReveal>
          <AwardsSection />
        </ScrollReveal>
      </section>

      <section aria-labelledby='resume-activities-title'>
        <ScrollReveal>
          <ActivitiesSection />
        </ScrollReveal>
      </section>
    </div>
  );
}
