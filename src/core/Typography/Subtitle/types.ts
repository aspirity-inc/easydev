import { CSSProperties } from 'react';

import { TypographyBaseType } from '../types';

export const tagVariants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'] as const;

export const levelVariants = [1, 2, 3, 4, 5] as const;

export type LevelVariantsType = (typeof levelVariants)[number];

export type StyledSubtitleProps = {
  level?: LevelVariantsType;
  $bgColor?: CSSProperties['backgroundColor'];
  $color?: CSSProperties['color'];
};

export type TagVariantsType = (typeof tagVariants)[number];
export type SubtitleProps = TypographyBaseType & {
  tag?: keyof Pick<HTMLElementTagNameMap, TagVariantsType>;
  level?: LevelVariantsType;
};
