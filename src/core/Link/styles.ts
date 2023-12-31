import { css, styled } from 'styled-components';

import { Box } from '@core/Box';
import { getTextVariants } from '@core/Typography/Text/styles';

import type { StyledLinkProps } from './types';

export const StyledLink = styled(Box)<StyledLinkProps>`
  --hoverColor: ${({ theme }) => (theme.type === 'light' ? theme.colors.link['300'] : theme.colors.link['400'])};
  --transition: ${({ theme }) => theme.transition.default};
  ${getTextVariants('body2')}

  ${({ $defaultUnderline }) =>
    css`
      text-decoration: ${$defaultUnderline ? 'underline' : 'underline transparent'};
    `}

  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.link['300'] : theme.colors.link['500'])};
  text-underline-offset: 5px;
  text-decoration-thickness: 1px;
  transition: color var(--transition), text-decoration-color var(--transition);
  cursor: pointer;

  &:hover {
    color: var(--hoverColor);
    text-decoration-color: var(--hoverColor);
  }

  &:focus-visible {
    color: ${({ theme }) => theme.colors.link['400']};
  }

  &:active {
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.link['500'] : theme.colors.link['300'])};
  }

  ${({ $disabled, theme }) =>
    $disabled &&
    css`
      color: ${theme.type === 'light' ? theme.colors.secondary['300'] : theme.colors.secondary['900']};
      cursor: default;
      pointer-events: none;
    `}
`;
