import { forwardRef } from 'react';

import { StyledTarget } from './styles';
import { TargetProps } from '../../types';

export const Target = forwardRef<HTMLDivElement, TargetProps>(({ children, width, ...otherProps }, ref) => {
  return (
    <StyledTarget ref={ref} $width={width} {...otherProps}>
      {children}
    </StyledTarget>
  );
});
