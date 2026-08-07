import { cn } from '@/lib/utils';

type ContentWriteBoxProps = {
  title: string;
  description: string | string[];
  boldPhrases?: string[];
  variant?: 'default' | 'stat';
};

const escapeRegularExpression = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const CONTAINER_CLASS_NAME = {
  default: 'rounded-[1.6rem] px-[5rem] py-[4rem]',
  stat: 'w-[50rem] rounded-[3rem] px-[4rem] py-[3.5rem]',
};

const DESCRIPTION_CLASS_NAME = {
  default: 'title-20-rg text-black-9 flex w-[40rem] flex-col gap-[1.2rem]',
  stat: 'title-20-md text-black-9 flex flex-col items-center gap-[0.4rem] text-center',
};

export const ContentWriteBox = ({
  title,
  description,
  boldPhrases = [],
  variant = 'default',
}: ContentWriteBoxProps) => {
  const paragraphs = Array.isArray(description) ? description : [description];
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
    <div
      className={cn(
        'border-yellow-1 bg-yellow-5/60 flex flex-col items-center justify-center gap-[2.5rem] border-[1.5px]',
        CONTAINER_CLASS_NAME[variant],
      )}
    >
      <span className='title-30-eb text-black-10 text-center'>{title}</span>
      <div className={DESCRIPTION_CLASS_NAME[variant]}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{renderParagraph(paragraph)}</p>
        ))}
      </div>
    </div>
  );
};
