import { titleTagVariants } from '../constants';
import type { TypographyBaseType } from '../types';

export type TitleTagVariantsType = (typeof titleTagVariants)[number];

export type TitleProps = TypographyBaseType & {
  variant?: TitleTagVariantsType;
};

export type StyledTitleProps = {
  $variant?: TitleTagVariantsType;
};
