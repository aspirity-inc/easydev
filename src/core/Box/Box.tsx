import { styled } from 'styled-components';

import type { BoxProps } from './types.ts';

const StyledBox = styled('div')``;

export const Box = ({ children, ...props }: BoxProps) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};
