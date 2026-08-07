import { cn } from '@/lib/utils';

type MainTextLayoutProps = {
  title: string;
  period?: string;
  content: string | string[];
  boldPhrases?: string[];
  className?: string;
};

const escapeRegularExpression = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const MainTextLayout = ({
  title,
  period,
  content,
  boldPhrases = [],
  className,
}: MainTextLayoutProps) => {
  const paragraphs = Array.isArray(content) ? content : [content];
  const boldPhrasePattern = new RegExp(
    `(${boldPhrases.map(escapeRegularExpression).join('|')})`,
    'g',
  );

  const renderParagraph = (paragraph: string) => {
    if (!boldPhrases.some((phrase) => paragraph.includes(phrase))) return paragraph;

    return paragraph.split(boldPhrasePattern).map((part) =>
      boldPhrases.includes(part) ? (
        <strong key={part} className='title-20-md text-black-10'>
          {part}
        </strong>
      ) : (
        part
      ),
    );
  };

  return (
    <div className={cn('flex flex-col items-start gap-[2.4rem]', className)}>
      <div className='flex flex-col items-start gap-[1.2rem]'>
        <h3 className='display-sb-32 text-black-10'>
          {title.split('\n').map((line) => (
            <p key={line}>{line}</p>
          ))}
        </h3>
        {period && <p className='title-23-md text-black-10'>{period}</p>}
      </div>
      <div className='title-20-rg text-black-9 flex flex-col gap-[1.2rem]'>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{renderParagraph(paragraph)}</p>
        ))}
      </div>
    </div>
  );
};
