import type { CSSProperties } from 'react';

import type { BaseLayoutProps } from '../types';

export type FooterProps = BaseLayoutProps & {
  height?: number;
  backgroundColor?: CSSProperties['backgroundColor'];
};

export type StyledFooterProps = {
  $backgroundColor?: CSSProperties['backgroundColor'];
  $height?: number;
};
