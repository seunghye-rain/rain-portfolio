type NumberedItemProps = {
  heading: string;
  paragraphs: string[];
  bulleted?: boolean;
};

export const NumberedItem = ({ heading, paragraphs, bulleted = false }: NumberedItemProps) => {
  return (
    <div className='flex w-full flex-col items-start gap-[0.8rem]'>
      <p className='title-20-sb text-black-9'>{heading}</p>
      {paragraphs.map((paragraph) =>
        bulleted ? (
          <div key={paragraph} className='flex w-full items-start gap-[0.4rem]'>
            <span aria-hidden className='title-20-rg text-black-9'>
              •
            </span>
            <p className='title-20-rg text-black-9 min-w-0 flex-1'>{paragraph}</p>
          </div>
        ) : (
          <p key={paragraph} className='title-20-rg text-black-9 w-full'>
            {paragraph}
          </p>
        ),
      )}
    </div>
  );
};
