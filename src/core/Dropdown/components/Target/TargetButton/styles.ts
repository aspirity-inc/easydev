import { css, styled } from 'styled-components';

import { getTextVariants } from '@core/Typography/Text/styles';

import type { StyledTargetProps } from '../../../types';

export const StyledIcon = styled('div')``;

export const StyledTargetButton = styled('button')<StyledTargetProps>`
  --transition: ${({ theme }) => theme.transition.default};

  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  margin: 0;
  padding: 10px 16px;
  outline: none;
  background-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};
  border: 1px solid
    ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['500'])};
  border-radius: 8px;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.secondary['600'] : theme.colors.secondary['600'])};
  ${getTextVariants('body2')};
  transition: box-shadow var(--transition), border-color var(--transition);
  cursor: pointer;

  ${StyledIcon} {
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['500'])};
  }

  &:focus {
    outline: none;
  }

  &:hover:not([disabled]) {
    border-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.secondary['300'] : theme.colors.secondary['500']};
    ${({ theme }) => theme.shadows.blue};
  }

  ${({ $open }) =>
    $open &&
    css`
      border-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.secondary['300'] : theme.colors.secondary['500']};
    `}

  &:disabled {
    border-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['500']};

    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['500'])};
    cursor: default;

    ${StyledIcon} {
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['500'])};
    }
  }
`;
