import { css, styled } from 'styled-components';

import { Box } from '@core/Box';
import { getTextVariants } from '@core/Typography/Text/styles';

import type { StyledControlProps } from '../../types';
import { StyledChevronIcon } from '../ChevronIcon/styles';

export const StyledTitle = styled(Box)`
  ${getTextVariants('body1')};
  color: inherit;
  transition: color ${({ theme }) => theme.transition.default};
`;

export const StyledSubtitle = styled(Box)`
  ${getTextVariants('body3')};
  font-family: inherit;
  line-height: 1.2;
  font-weight: 186;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['100'])};
`;

export const StyledIcon = styled(Box)`
  transition: color ${({ theme }) => theme.transition.default};
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['300'])};
`;

export const StyledControl = styled('button')<StyledControlProps>`
  width: 100%;
  padding: 16px;
  margin: 0;
  border: none;
  outline: none;

  ${getTextVariants('body2')};
  font-family: inherit;
  line-height: 1.2;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};

  background-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['900']};
  transition: background-color ${({ theme }) => theme.transition.default},
    color ${({ theme }) => theme.transition.default};
  cursor: pointer;

  ${({ $variant, $opened }) => ($variant === 'filled' ? getFilledStyles($opened) : getBorderedStyles($opened))}

  &:disabled {
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['300'])};
    cursor: default;

    & ${StyledSubtitle} {
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['300'])};
    }

    & ${StyledIcon} {
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['600'])};
    }

    & ${StyledChevronIcon} {
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['700'])};
    }
  }
`;

const getFilledStyles = ($opened: boolean) => {
  return css`
    &:hover:not([disabled]) {
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['800']};
    }

    &:focus-visible:not([disabled]),
    &:active:not([disabled]),
    &:focus:not([disabled]) {
      outline: none;
    }

    ${$opened &&
    css`
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['800']};
    `};
  `;
};

const getBorderedStyles = ($opened: boolean) => {
  return css`
    &:hover:not([disabled]) {
      & ${StyledIcon} {
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.primary['800'] : theme.colors.primary['500'])};
      }

      & ${StyledTitle} {
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.primary['800'] : theme.colors.primary['400'])};
      }

      & ${StyledChevronIcon} {
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.primary['700'] : theme.colors.primary['500'])};
      }
    }

    &:focus-visible:not([disabled]),
    &:active:not([disabled]),
    &:focus:not([disabled]) {
      outline: none;
    }

    ${$opened &&
    css`
      & ${StyledChevronIcon} {
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.primary['700'] : theme.colors.primary['500'])};
      }
    `};
  `;
};
