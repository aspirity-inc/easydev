import type { CSSProperties } from 'react';

import type { BaseComponentType } from '@core/Box/types.ts';

export type ColProps = BaseComponentType & {
  // the number of columns that item occupies
  size?: number;
  columns?: number;
  alignContent?: CSSProperties['alignContent'];
  alignSelf?: CSSProperties['alignSelf'];
  grow?: CSSProperties['flexGrow'];
  shrink?: CSSProperties['flexShrink'];
};

export type StyledColProps = {
  $basis?: CSSProperties['flexBasis'];
  $alignContent?: CSSProperties['alignContent'];
  $alignSelf?: CSSProperties['alignSelf'];
  $grow?: CSSProperties['flexGrow'];
  $shrink?: CSSProperties['flexShrink'];
};
