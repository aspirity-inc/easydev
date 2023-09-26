import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';

import type { KnownTarget } from 'styled-components/dist/types';

export type BaseComponentType = BaseBoxProps;

export type BoxProps = BaseBoxProps;

export type BaseBoxProps = ComponentPropsWithoutRef<KnownTarget> & {
  children?: ReactNode | ReactNode[];
  as?: KnownTarget;
  className?: string;
  style?: CSSProperties;
};
