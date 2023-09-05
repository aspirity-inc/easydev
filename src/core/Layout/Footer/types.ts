import { CSSProperties } from 'react';

import { BaseLayoutProps } from '../types';

export type FooterProps = BaseLayoutProps & {
  height?: number;
  backgroundColor?: CSSProperties['backgroundColor'];
};

export type StyledFooterProps = {
  $backgroundColor?: CSSProperties['backgroundColor'];
  $height?: number;
};
