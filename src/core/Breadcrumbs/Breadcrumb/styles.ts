import { css, styled } from 'styled-components';

import { getTextVariants } from '@core/Typography/Text/styles.ts';

export type StyledBreadcrumbPropsType = {
  disabled?: boolean;
};

export const StyledLink = styled('a')<StyledBreadcrumbPropsType>`
  --hoverColor: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};
  --transition: ${({ theme }) => theme.transition.default};
  ${getTextVariants()};

  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['200'])};
  text-decoration: none;
  transition: color var(--transition), text-decoration-color var(--transition);
  cursor: pointer;

  &:hover,
  &:focus-visible {
    color: var(--hoverColor);
  }

  ${({ disabled, theme }) =>
    disabled &&
    css`
      color: ${theme.colors.surface['500']};
      cursor: default;
      pointer-events: none;
    `};
`;
