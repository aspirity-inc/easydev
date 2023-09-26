import type { ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types.ts';

export const CardVariants = ['outline', 'shadow'] as const;
export type CardVariantsType = (typeof CardVariants)[number];

export const CardDirection = ['column', 'row'] as const;
export type CardDirectionType = (typeof CardDirection)[number];

export type CardProps = BaseComponentType & {
  variant?: CardVariantsType;
  direction?: CardDirectionType;
  media?: ReactNode;
  borderedMedia?: boolean;
};

export type StyledCardProps = {
  $variant?: CardVariantsType;
  $direction?: CardDirectionType;
};

export type StyledMediaProps = {
  $direction: CardDirectionType;
  $borderedMedia: boolean;
};
