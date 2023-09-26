import { textTagVariants, textVariants } from '../constants';
import type { TypographyBaseType } from '../types';

export type TagVariantsType = (typeof textTagVariants)[number];
export type TextVariantsType = (typeof textVariants)[number];

export type EllipsisType = { rows: number };

export type StyledTextProps = {
  $variant?: TextVariantsType;
  $ellipsis?: EllipsisType;
};

export type TextProps = TypographyBaseType & {
  as?: keyof Pick<HTMLElementTagNameMap, TagVariantsType>;
  variant?: TextVariantsType;
  ellipsis?: EllipsisType;
};
