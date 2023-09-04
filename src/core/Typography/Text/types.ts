import { CSSProperties } from 'react';

import { TypographyBaseType } from '../types';

export const tagVariants = ['p', 'span'] as const;

export const textVariants = ['body1', 'body2', 'body3', 'body4', 'caption'] as const;

export type TagVariantsType = (typeof tagVariants)[number];

export type TextVariantsType = (typeof textVariants)[number];

export type ValidateEllipsisType = {
  ellipsis: EllipsisType;
};

export type EllipsisType = { rows: number };
export type StyledTextProps = {
  variant?: TextVariantsType;
  ellipsis?: EllipsisType;
  $bgColor?: CSSProperties['backgroundColor'];
  $color?: CSSProperties['color'];
};

export type TextProps = TypographyBaseType & {
  tag?: keyof Pick<HTMLElementTagNameMap, TagVariantsType>;
  variant?: TextVariantsType;
  ellipsis?: EllipsisType;
};
