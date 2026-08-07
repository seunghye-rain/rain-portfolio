import Image from 'next/image';

type SkillTileProps = {
  imageSrc: string;
  imageAlt: string;
  label: string;
};

export const SkillTile = ({ imageSrc, imageAlt, label }: SkillTileProps) => {
  return (
    <div className='flex w-[7.4rem] flex-col items-center justify-center gap-[0.8rem]'>
      <div className='bg-black-1 relative size-[7.4rem] overflow-hidden rounded-[1.6rem]'>
        <Image src={imageSrc} alt={imageAlt} fill className='object-cover' />
      </div>
      <p className='font-16-md text-black-10 text-center'>{label}</p>
    </div>
  );
};
