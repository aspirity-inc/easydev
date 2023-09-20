import { styled, css } from 'styled-components';

import { Center } from '@core/Center';

import { getDefaultBorder } from '../styles';
import type { StyledCodeInputProps } from '../types';

export const StyledCodeInputWrapper = styled(Center)<StyledCodeInputProps>`
  padding: 16px;

  border: 1px solid ${({ theme }) => theme.colors.surface['400']};
  ${({ $filled }) => getDefaultBorder($filled || false)};
  border-radius: 8px;
  background-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['900']};

  &:hover:not([disabled]) {
    border-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.secondary['300'] : theme.colors.secondary['100']};
    ${({ theme }) => theme.shadows.blue};
  }

  ${({ $focused }) =>
    $focused &&
    css`
      ${({ theme }) => theme.shadows.blue};
    `};

  ${({ $error }) =>
    $error
      ? css`
          color: ${({ theme }) => theme.colors.error['500']};
        `
      : css`
          color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['100'])};
        `};
`;

export const StyledCodeInput = styled('input')<StyledCodeInputProps>`
  width: 24px;
  height: 24px;
  padding: 0;

  color: inherit;
  font-family: inherit;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
  font-variation-settings: 'wdth' 144, 'GRAD' 20, 'slnt' 0, 'xtra' 468, 'xopq' 96, 'yopq' 79, 'ytlc' 514, 'ytuc' 712,
    'ytas' 750, 'ytde' -203, 'ytfi' 738;
  caret-color: transparent;
  text-align: center;

  background-color: transparent;
  border: 0;
  ${({ $filled, $focused }) => !$filled && getCodeInputBorder($focused)};

  &:placeholder-shown {
    background-color: ${({ theme }) => (theme.type === 'light' ? '#FFF' : theme.colors.surface['800'])};
  }

  &:focus-visible:not([disabled]) {
    outline: 0;
  }
`;

const getCodeInputBorder = ($focused: boolean) => {
  return css`
    border-bottom: 1px solid
      ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['800'] : theme.colors.surface['100'])};

    ${$focused &&
    css`
      &:focus-visible:not([disabled]) {
        border-color: ${({ theme }) => theme.colors.surface['400']};
      }
    `}
  `;
};
