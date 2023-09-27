import { forwardRef } from 'react';

import { StyledTarget } from './styles';
import { TargetProps } from '../../types';

export const Target = forwardRef<HTMLDivElement, TargetProps>(({ children, ...otherProps }, ref) => {
  return (
    <StyledTarget ref={ref} {...otherProps}>
      {children}
    </StyledTarget>
  );
});
