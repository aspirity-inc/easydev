import { css, styled } from 'styled-components';

export const StyledTarget = styled('button')<{ $width?: string }>`
  margin: 0;
  padding: 0;
  outline: none;
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }

  ${({ $width }) =>
    $width === 'full' &&
    css`
      width: 100%;
    `}
`;
