import { cn } from '@/lib/utils';

type DividerProps = {
  className?: string;
};

export const Divider = ({ className }: DividerProps) => {
  return <div className={cn('bg-black-4 h-[0.1rem] w-full', className)} />;
};
