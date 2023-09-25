import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type TabProps = ComponentPropsWithoutRef<'button'> & {
  title: ReactNode;
  disabled?: boolean;
  active: boolean;
  onClick: () => void;
};

export type StyledTabProps = {
  $disabled?: boolean;
};
