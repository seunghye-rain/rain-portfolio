type MainTextLayoutProps = {
  title: string;
  content: string;
};

export const MainTextLayout = ({ title, content }: MainTextLayoutProps) => {
  return (
    <div className='flex flex-col items-start gap-[2.4rem]'>
      <p className='display-sb-32 text-black-10'>{title}</p>
      <p className='title-20-md text-black-9'>{content}</p>
    </div>
  );
};
