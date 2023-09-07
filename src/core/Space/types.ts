import { CSSProperties, ReactNode } from 'react';

export type StyledSpaceProps = {
  $size?: number;
  $alignItems?: CSSProperties['alignItems'];
  $justifyContent?: CSSProperties['justifyContent'];
  $direction?: CSSProperties['flexDirection'];
};

export type SpaceProps = {
  children: ReactNode | ReactNode[];
  size?: number;
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  direction?: CSSProperties['flexDirection'];
};
