export const IMAGE_RATIO_CLASS = {
  default: 'aspect-[300/169]',
  portrait: 'aspect-[4/5]',
  tall: 'aspect-[9/16]',
  wide: 'aspect-[16/9]',
} as const;

export type ImageRatio = keyof typeof IMAGE_RATIO_CLASS;
