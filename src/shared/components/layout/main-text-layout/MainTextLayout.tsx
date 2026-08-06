import { cn } from '@/lib/utils';

type MainTextLayoutProps = {
  title: string;
  content: string | string[];
  className?: string;
};

export const MainTextLayout = ({ title, content, className }: MainTextLayoutProps) => {
  const paragraphs = Array.isArray(content) ? content : [content];

  return (
    <div className={cn('flex flex-col items-start gap-[2.4rem]', className)}>
      <div className='display-sb-32 text-black-10'>
        {title.split('\n').map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className='title-20-rg text-black-9 flex flex-col gap-[1.2rem]'>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};
