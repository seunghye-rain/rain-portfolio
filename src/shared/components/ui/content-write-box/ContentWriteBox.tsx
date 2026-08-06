type ContentWriteBoxProps = {
  title: string;
  description: string | string[];
};

export const ContentWriteBox = ({ title, description }: ContentWriteBoxProps) => {
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <div className='border-yellow-1 bg-yellow-5/60 flex flex-col items-center justify-center gap-[2.5rem] rounded-[1.6rem] border-[1.5px] px-[5rem] py-[4rem]'>
      <span className='title-30-eb text-black-10 text-center'>{title}</span>
      <div className='title-20-rg text-black-9 flex w-[40rem] flex-col gap-[1.2rem]'>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};
