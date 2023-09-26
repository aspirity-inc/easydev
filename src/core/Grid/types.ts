import type { CSSProperties } from 'react';

import type { BaseComponentType } from '@core/Box/types.ts';

export type RowProps = BaseComponentType & {
  direction?: CSSProperties['flexDirection'];
  columns?: number;
  columnSpacing?: number;
  rowSpacing?: number;
  wrap?: CSSProperties['flexWrap'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  rowGap?: number;
  columnGap?: number;
};

export type StyledRowProps = {
  $direction?: CSSProperties['flexDirection'];
  $columns?: number;
  $columnSpacing?: number;
  $rowSpacing?: number;
  $wrap?: CSSProperties['flexWrap'];
  $justify?: CSSProperties['justifyContent'];
  $align?: CSSProperties['alignItems'];
  $rowGap?: number;
  $columnGap?: number;
};
