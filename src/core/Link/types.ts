import type { BaseComponentType } from '@core/Box/types.ts';

export type StyledLinkProps = {
  $disabled?: boolean;
  $defaultUnderline?: boolean;
};

export type LinkProps = BaseComponentType & {
  disabled?: boolean;
  defaultUnderline?: boolean;
};
