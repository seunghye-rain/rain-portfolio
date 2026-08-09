import Image from 'next/image';

import { IconGithub, IconLinkedin } from '@/shared/assets';
import { FeatureTextLayout } from '@/shared/components/layout';
import { IconButton } from '@/shared/components/ui';

import { EDUCATIONS } from '../mocks/education';

export const ProfileSection = () => {
  return (
    <div className='flex items-center gap-[12rem]'>
      <div
        className='size-[35rem] shrink-0 overflow-hidden rounded-full'
        style={{
          backgroundImage:
            'linear-gradient(136deg, rgb(221, 224, 230) 3.3%, rgb(213, 220, 233) 95.9%)',
        }}
      >
        <Image
          src='/imgs/skill-content/img-profile.png'
          alt='양승혜'
          width={350}
          height={350}
          className='animate-fade-in size-full object-cover'
          priority
        />
      </div>

      <div className='animate-fade-in flex flex-col items-start gap-[2.4rem]'>
        <h1 id='resume-profile-title' className='flex items-center gap-[0.8rem]'>
          <span className='display-sb-36 text-black-10'>양승혜</span>
          <span className='display-sb-36 text-black-10'>|</span>
          <span className='title-32-md text-black-8'>Yang Seunghye</span>
          <span className='title-23-md text-black-10 opacity-80'>2000.03.07</span>
        </h1>

        <div className='flex items-center gap-[3.6rem]'>
          {/* @TODO 추후 필요시 주석 삭제 */}
          {/* <IconButton
                href='tel:010-7137-2307'
                icon={IconPhoneWhite}
                ariaLabel='전화'
                width={4.8}
                height={4.8}
                iconSize={4}
                className='bg-yellow-6'
              />
              <IconButton
                href='mailto:seunghye0307@naver.com'
                icon={IconMail}
                ariaLabel='이메일'
                width={6}
                height={6}
                iconSize={6}
              /> */}
          <IconButton
            href='https://github.com/seunghye-rain'
            icon={IconGithub}
            ariaLabel='깃허브'
            width={6}
            height={6}
            iconSize={6}
          />
          <IconButton
            href='https://www.linkedin.com/in/seunghye-yang-927786391/'
            icon={IconLinkedin}
            ariaLabel='링크드인'
            width={6}
            height={6}
            iconSize={6}
          />
        </div>

        <div className='flex flex-col items-start gap-[1.8rem]'>
          {EDUCATIONS.map((education) => (
            <FeatureTextLayout
              key={education.title}
              title={education.title}
              subtitle={education.period}
              titleClassName='title-23-sb text-black-10'
              subtitleClassName='title-20-md text-black-9/80'
            />
          ))}
        </div>
      </div>
    </div>
  );
};
