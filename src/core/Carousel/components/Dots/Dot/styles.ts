import { css, styled } from 'styled-components';

import type { StyledDotProps } from '@core/Carousel';

export const StyledDot = styled('button')<StyledDotProps>`
  width: 8px;
  height: 8px;

  padding: 0;
  border: none;

  background-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['900']};
  border: 1px solid
    ${({ theme }) => (theme.type === 'light' ? theme.colors.tretiary['500'] : theme.colors.tretiary['300'])};
  border-radius: 50%;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition.default},
    border-color ${({ theme }) => theme.transition.default};

  &:focus-visible,
  &:active,
  &:focus {
    outline: none;
  }

  ${({ $active }) =>
    $active &&
    css`
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.tretiary['500'] : theme.colors.tretiary['300']};
    `}
`;
