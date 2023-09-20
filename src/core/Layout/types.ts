import type { CSSProperties, ReactNode } from 'react';

export type BaseLayoutProps = { children: ReactNode; className?: string; style?: CSSProperties };

export type LayoutProps = BaseLayoutProps & {
  height?: number;
};

export type StyledLayoutProps = {
  $height?: number;
};
