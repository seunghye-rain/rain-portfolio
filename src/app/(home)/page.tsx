import Image from 'next/image';

import { IconGithub, IconLinkedin } from '@/shared/assets';
import { MainTextLayout } from '@/shared/components/layout';
import { CtaButton, IconButton, ScrollReveal, SectionTitle } from '@/shared/components/ui';

import { ADVANTAGES } from './constants/advantages';

export default function Home() {
  return (
    <div className='flex flex-col items-center gap-[10rem]'>
      <section aria-labelledby='home-hero-title'>
        <div className='flex flex-col items-center gap-[10rem]'>
          <Image
            src='/imgs/home-logo.png'
            alt='Portfolio'
            width={1230}
            height={374}
            className='animate-fade-in h-auto w-[123rem]'
            priority
          />

          <div className='flex flex-col items-center gap-[4rem]'>
            <h1 id='home-hero-title' className='display-sb-50 text-black-10 text-center'>
              <span className='text-yellow-1'>양승혜</span>의<br />
              포트폴리오 입니다.
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
          </div>

          <p className='font-23-rg text-black-8 text-center tracking-[0.2rem]'>
            직접 제작한 콘텐츠로 사람들을 끌어들이는{' '}
            <span className='text-black-10 font-medium'>마케터</span>이자 사용자를 먼저 생각하는{' '}
            <span className='text-black-10 font-medium'>프론트엔드 개발자</span>입니다.
            <br />
            다양한 형태의 콘텐츠를 직접 기획부터 편집까지 하고, React로 웹과 앱을 만듭니다.
            <br />
            <br />
            새로운 도구 앞에서 망설이지 않고, 배운 건 바로 적용해봅니다.
            <br />
            꼼꼼하고 체계적으로, 그리고 누구보다 즐겁게 함께 일합니다.
          </p>
        </div>
      </section>

      <section aria-labelledby='home-advantages-title'>
        <ScrollReveal className='flex flex-col items-center gap-[4rem]'>
          <SectionTitle id='home-advantages-title' title='Advantages' showIcon={false} />
          <div className='grid grid-cols-2 gap-x-[8rem] gap-y-[4rem]'>
            {ADVANTAGES.map((advantage) => (
              <MainTextLayout
                key={advantage.title}
                className='w-[50rem]'
                title={advantage.title}
                content={advantage.paragraphs}
                boldPhrases={advantage.boldPhrases}
              />
            ))}
          </div>
        </ScrollReveal>
      </section>

      <ScrollReveal>
        <CtaButton href='/resume'>이력서 보러 가기</CtaButton>
      </ScrollReveal>
    </div>
  );
}
