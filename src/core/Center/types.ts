import { ComponentPropsWithoutRef } from 'react';

export type StyledCenterProps = {
  $inline?: boolean;
  $gap?: number;
};

export type CenterProps = ComponentPropsWithoutRef<'div'> & {
  inline?: boolean;
  gap?: number;
};
