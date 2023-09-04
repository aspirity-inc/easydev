import { styled } from 'styled-components';

import { StyledLayoutProps } from './types';

export const StyledLayout = styled('div')<StyledLayoutProps>`
  display: grid;
  box-sizing: border-box;
  min-height: 100svh;
  //TODO: if height is really necessary here?
  height: ${({ $height }) => $height && `${$height}px`};
  grid-template-rows: auto 1fr auto;
`;
