// import { IconLetter, IconPhone } from '@/shared/assets';

export const Footer = () => {
  return (
    <footer className='border-black-4 bg-black-2 flex w-full items-center justify-between border-t px-[8rem] py-[3rem]'>
      <div className='px-[3.6rem] py-[1.8rem]'>
        <p className='font-16-rg text-black-6'>Copyright © 2026 양승혜</p>
      </div>
      {/* @TODO 추후 필요시 주석 삭제 */}
      {/* <div className='flex flex-col items-start gap-[1rem] px-[1.8rem]'>
        <a href='mailto:seunghye0307@naver.com' className='flex items-center gap-[0.8rem]'>
          <IconLetter className='size-[2.4rem]' />
          <span className='font-18-md text-black-8'>seunghye0307@naver.com</span>
        </a>
        <a href='tel:010-7137-2307' className='flex items-center gap-[0.8rem]'>
          <IconPhone className='size-[2.4rem]' />
          <span className='font-18-md text-black-8'>010-7137-2307</span>
        </a>
      </div> */}
    </footer>
  );
};
