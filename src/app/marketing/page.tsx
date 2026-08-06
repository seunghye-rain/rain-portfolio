import { ScrollReveal } from '@/shared/components/ui';

import { HoverableContentBox } from './components/HoverableContentBox';
import { CONTENT_BOXES } from './mocks/contentBoxes';

export default function MarketingPage() {
  return (
    <div className='flex flex-col items-center gap-[10rem]'>
      <section aria-labelledby='marketing-hero-title'>
        <div className='flex flex-col items-center gap-[10rem]'>
          <div className='animate-fade-in flex flex-col items-center gap-[4rem]'>
            <h1 id='marketing-hero-title' className='display-sb-50 text-black-10 text-center'>
              안녕하세요,
              <br />
              이용자 관점으로 만들고 증명하는
              <br />
              마케터 <span className='text-yellow-1'>양승혜</span>입니다.
            </h1>
            <p className='font-23-rg text-black-9 text-center tracking-[0.3px]'>
              사용자가 무엇에 반응하는지 관찰하고,
              <br />
              그 답을 콘텐츠와 카피로 만들어 직접 세상에 내놓습니다.
              <br />
              <br />
              기획부터 촬영·편집·업로드까지 가능하며,
              <br />
              생성형 AI를 초안과 카피를 빠르게 만들어내는 도구 등 다방면으로 사용합니다.
              <br />
              발행 후에는 참여·전환 데이터로 검증하고 다음 기획에 반영합니다.
            </p>
          </div>

          <ScrollReveal className='flex gap-[10rem]'>
            {CONTENT_BOXES.map((box) => (
              <HoverableContentBox
                key={box.href}
                href={box.href}
                title={box.title}
                description={box.description}
              />
            ))}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
