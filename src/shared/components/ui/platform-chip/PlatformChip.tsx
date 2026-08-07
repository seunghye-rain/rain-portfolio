export type Platform = 'app' | 'web';

type PlatformChipProps = {
  platform: Platform;
};

const PLATFORM_LABEL: Record<Platform, string> = {
  app: 'APP',
  web: 'WEB',
};

export const PlatformChip = ({ platform }: PlatformChipProps) => {
  return (
    <span className='bg-status-yellow-bg text-status-yellow-text caption-14-rg inline-flex shrink-0 items-center justify-center rounded-[0.6rem] px-[1.2rem] py-[0.2rem]'>
      {PLATFORM_LABEL[platform]}
    </span>
  );
};
