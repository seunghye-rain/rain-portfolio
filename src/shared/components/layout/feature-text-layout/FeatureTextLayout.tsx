import { cn } from '@/lib/utils';

type FeatureTextLayoutProps = {
  title: string;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export const FeatureTextLayout = ({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
}: FeatureTextLayoutProps) => {
  return (
    <div className='flex items-center gap-[0.5rem]'>
      <p className={cn('title-20-md text-black-10 whitespace-nowrap', titleClassName)}>{title}</p>
      <p className={cn('font-16-md text-black-9/80 whitespace-nowrap', subtitleClassName)}>
        {subtitle}
      </p>
    </div>
  );
};
