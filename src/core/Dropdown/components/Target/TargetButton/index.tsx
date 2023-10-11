import { forwardRef } from 'react';

import { StyledIcon, StyledTargetButton } from './styles';
import type { TargetProps } from '../../../types';

export const TargetButton = forwardRef<HTMLDivElement, TargetProps>(
  ({ children, open, withIcon = true, icon, ...props }, ref) => {
    const getDropdownIcon = () =>
      icon || (
        <StyledIcon className="material-symbols-outlined">
          {open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
        </StyledIcon>
      );

    return (
      <StyledTargetButton ref={ref} $open={open} {...props}>
        {children}
        {withIcon && getDropdownIcon()}
      </StyledTargetButton>
    );
  }
);
