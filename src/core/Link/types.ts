import { ComponentPropsWithoutRef, ReactNode } from 'react';

export type StyledLinkProps = {
  $disabled?: boolean;
  $defaultUnderline?: boolean;
};

export type LinkProps = ComponentPropsWithoutRef<'a'> & {
  children: ReactNode | ReactNode[] | string;
  disabled?: boolean;
  defaultUnderline?: boolean;
};
