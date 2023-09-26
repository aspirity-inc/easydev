import type { CSSProperties } from 'react';

import type { BaseComponentType } from '@core/Box/types.ts';

export type FlexProps = BaseComponentType & {
  direction?: CSSProperties['flexDirection'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  wrap?: CSSProperties['flexWrap'];
  gap?: number;
  rowGap?: number;
  columnGap?: number;
  inline?: boolean;
};

export type StyledFlexProps = {
  $direction?: CSSProperties['flexDirection'];
  $align?: CSSProperties['alignItems'];
  $justify?: CSSProperties['justifyContent'];
  $wrap?: CSSProperties['flexWrap'];
  $gap?: number;
  $rowGap?: number;
  $columnGap?: number;
  $inline?: boolean;
};
