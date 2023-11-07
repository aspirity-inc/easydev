import type { ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types.ts';

import type { ProgressBarTypeBase } from '..';

export type ProgressBarPropsType = BaseComponentType &
  Omit<ProgressBarTypeBase, '$size' | '$rounded'> & {
    customTitle?: ReactNode;
    size?: 'small' | 'default';
    rounded?: boolean;

    progressWrapProps?: Pick<BaseComponentType, 'style'>;
    progressTitleWrapProps?: Pick<BaseComponentType, 'style'>;
    progressSubTitleWrapProps?: Pick<BaseComponentType, 'style'>;
  };
