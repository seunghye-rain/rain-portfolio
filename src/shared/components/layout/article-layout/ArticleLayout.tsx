import Image from 'next/image';

type ArticleLayoutProps = {
  title: string;
  content: string;
  date: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const ArticleLayout = ({ title, content, date, imageSrc, imageAlt }: ArticleLayoutProps) => {
  return (
    <div className='flex w-full items-center gap-[3rem]'>
      {imageSrc && (
        <div className='relative h-[24rem] w-[32rem] shrink-0 overflow-hidden rounded-[1.6rem]'>
          <Image src={imageSrc} alt={imageAlt ?? title} fill className='object-cover' />
        </div>
      )}
      <div className='flex min-w-0 flex-1 flex-col items-start gap-[2.4rem]'>
        <p className='title-23-eb text-black-10'>{title}</p>
        <p className='font-16-md text-black-8'>{content}</p>
        <p className='caption-14-rg text-black-7'>{date}</p>
      </div>
    </div>
  );
};
