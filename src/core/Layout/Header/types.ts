import type { CSSProperties } from 'react';

import type { BaseLayoutProps } from '../types';

export type HeaderProps = BaseLayoutProps & {
  fix?: boolean;
  height?: number;
  backgroundColor?: CSSProperties['backgroundColor'];
};

export type StyledHeaderProps = {
  $backgroundColor?: CSSProperties['backgroundColor'];
  $fix?: boolean;
  $height?: number;
};
