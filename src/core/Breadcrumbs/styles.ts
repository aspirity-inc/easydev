import { css, styled } from 'styled-components';

import { getTextVariants } from '@core/Typography/Text/styles.ts';

import { StyledBreadcrumbPropsType } from './types';

export const StyledSeparator = styled('div')`
  margin: 0 4px;
  ${getTextVariants()};
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['50'])};

  & > div {
    display: block;
  }
`;

export const StyledBreadcrumbs = styled('div')`
  display: flex;
  align-items: center;
`;

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

export const StyledUserLink = styled('a')<StyledBreadcrumbPropsType>`
  --hoverColor: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};
  --transition: ${({ theme }) => theme.transition.default};

  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.success['900'] : theme.colors.error['600'])};
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
