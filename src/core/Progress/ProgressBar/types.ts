import { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react';

import type { ProgressBarTypeBase } from '..';

export type ProgressBarWrapType = {
  $progressColor?: CSSProperties['color'];
};

export type ProgressBarPropsType = ComponentPropsWithoutRef<'div'> &
  Omit<ProgressBarTypeBase, '$progressColor' | '$progressBackground' | '$size' | '$rounded'> &
  Omit<ProgressBarWrapType, '$isTitle' | '$progressColor'> & {
    customTitle?: ReactNode;
    progressColor?: CSSProperties['color'];
    progressBackground?: CSSProperties['color'];
    size?: 'small' | 'default';
    rounded?: boolean;
  };
