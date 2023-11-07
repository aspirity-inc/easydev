import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types';

export type TabProps = ComponentPropsWithoutRef<'button'> & {
  title: ReactNode;
  disabled?: boolean;
  active: boolean;
  onClick: () => void;

  tabSubtitleProps?: Pick<BaseComponentType, 'style'>;
};

export type StyledTabProps = {
  $disabled?: boolean;
};
