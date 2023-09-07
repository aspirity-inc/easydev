import { ReactNode, CSSProperties } from 'react';

export const CardVariants = ['outline', 'shadow'] as const;
export type CardVariantsType = (typeof CardVariants)[number];

export const CardDirection = ['column', 'row'] as const;
export type CardDirectionType = (typeof CardDirection)[number];

export type CardProps = {
  variant?: CardVariantsType;
  direction?: CardDirectionType;
  media?: ReactNode;
  maxWidth?: CSSProperties['maxWidth'];
  borderedMedia?: boolean;
  children: ReactNode;
};

export type StyledCardProps = {
  $variant?: CardVariantsType;
  $direction?: CardDirectionType;
  $maxWidth?: CSSProperties['maxWidth'];
};

export type StyledMediaProps = {
  $direction: CardDirectionType;
  $borderedMedia: boolean;
};
