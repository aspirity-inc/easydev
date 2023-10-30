import { forwardRef } from 'react';

import { KeyboardArrowDownIcon, KeyboardArrowUpIcon } from '@icons';

import { StyledIcon, StyledTargetButton } from './styles';
import type { TargetProps } from '../../../types';

export const TargetButton = forwardRef<HTMLDivElement, TargetProps>(
  ({ children, open, withIcon = true, icon, ...props }, ref) => {
    const getDropdownIcon = () =>
      icon || <StyledIcon>{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</StyledIcon>;

    return (
      <StyledTargetButton ref={ref} $open={open} {...props}>
        {children}
        {withIcon && getDropdownIcon()}
      </StyledTargetButton>
    );
  }
);
