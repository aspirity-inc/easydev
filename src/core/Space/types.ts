import type { CSSProperties } from 'react';

import type { BaseComponentType } from '@core/Box/types.ts';

export type StylesSpaceProps = {
  $size?: number;
  $alignItems?: CSSProperties['alignItems'];
  $justifyContent?: CSSProperties['justifyContent'];
  $direction?: CSSProperties['flexDirection'];
};

export type SpaceProps = BaseComponentType & {
  size?: number;
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  direction?: CSSProperties['flexDirection'];
};
