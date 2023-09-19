import { styled } from 'styled-components';

import type { StyledFooterProps } from './types';

export const StyledFooter = styled('footer')<StyledFooterProps>`
  width: 100%;
  background-color: ${({ $backgroundColor }) => $backgroundColor || 'transparent'};
  //TODO: if height is really necessary here?
  height: ${({ $height }) => $height && `${$height}px`};
`;
