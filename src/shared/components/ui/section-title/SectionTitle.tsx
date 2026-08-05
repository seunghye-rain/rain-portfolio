type SectionTitleProps = {
  title: string;
  showIcon?: boolean;
};

export const SectionTitle = ({ title, showIcon = true }: SectionTitleProps) => {
  return (
    <div className='flex items-center'>
      {showIcon && <p className='display-sb-42 text-black-10 px-[2.9rem] py-[2.2rem]'>🌧️</p>}
      <div className='flex flex-col items-start pr-[2.9rem]'>
        <p className='display-sb-36 text-black-10 whitespace-nowrap'>{title}</p>
        <div className='bg-yellow-1/30 mt-[-1.2rem] h-[1.2rem] w-full' />
      </div>
    </div>
  );
};
