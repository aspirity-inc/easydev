import { css, styled } from 'styled-components';

import { StyledHeaderProps } from './types';

export const StyledHeader = styled('header')<StyledHeaderProps>`
  width: 100%;
  background-color: ${({ $backgroundColor }) => $backgroundColor || 'transparent'};
  ${({ $fix }) => getFixStyles($fix)};
  //TODO: if height is really necessary here?
  height: ${({ $height }) => $height && `${$height}px`};
`;

export const getFixStyles = (fix?: boolean) => {
  if (fix) {
    return css`
      position: sticky;
      top: 0;
      z-index: 1;
    `;
  }
};
