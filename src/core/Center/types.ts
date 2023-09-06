import { ComponentPropsWithoutRef } from 'react';

export type StyledWrapperProps = {
  $inline?: boolean;
  $gap?: number;
};

export type CenterProps = ComponentPropsWithoutRef<'div'> & {
  inline?: boolean;
  gap?: number;
};
