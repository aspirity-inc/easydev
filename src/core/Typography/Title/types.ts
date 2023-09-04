import { CSSProperties } from 'react';

import { TypographyBaseType } from '../types';

export const titleTagVariants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export type TitleTagVariantsType = (typeof titleTagVariants)[number];

export type TitleProps = TypographyBaseType & {
  variant?: TitleTagVariantsType;
};

export type StyledTitleProps = {
  variant?: TitleTagVariantsType;
  $bgColor?: CSSProperties['backgroundColor'];
  $color?: CSSProperties['color'];
};
