import { forwardRef } from 'react';

import { styled } from 'styled-components';

import type { BoxProps } from './types.ts';

const StyledBox = styled('div')``;

export const Box = forwardRef<HTMLDivElement, BoxProps>(({ children, ...props }, ref) => {
  return (
    <StyledBox ref={ref} {...props}>
      {children}
    </StyledBox>
  );
});
