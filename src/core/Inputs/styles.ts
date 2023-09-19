import { styled, css } from 'styled-components';

import { StyledInputLabelText } from '@core/Typography/styles';
import { getTextVariants } from '@core/Typography/Text/styles';

import type { InputBaseStatus } from './types';

export const getBaseInputStyles = ($filled: boolean) => {
  return css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 24px 60px 8px 16px;

    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};
    ${getTextVariants('body2')};
    font-family: inherit;

    border: 1px solid ${({ theme }) => theme.colors.surface['400']};
    border-radius: 8px;
    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['900']};

    ${({ theme }) => getInputTransition(theme.transition.default)};

    &:placeholder-shown::placeholder {
      opacity: 0;
    }

    &:focus-visible::placeholder {
      transition: opacity ${({ theme }) => theme.transition.default};
      opacity: 1;
    }

    &:hover:not([disabled]) {
      border-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.secondary['300'] : theme.colors.secondary['100']};
      ${({ theme }) => theme.shadows.blue};
    }

    &:focus-visible:not([disabled]) {
      outline: 0;
      ${({ theme }) => theme.shadows.blue};
    }

    ${getDisabledState($filled || false)};
  `;
};

export const StyledLabelText = styled(StyledInputLabelText)`
  position: absolute;
  left: 16px;
  top: 50%;
  display: block;
  user-select: none;
  transform-origin: center left;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['600'] : theme.colors.surface['300'])};
  transition: transform ${({ theme }) => theme.transition.default}, color ${({ theme }) => theme.transition.default};
  transform: translateY(-50%);
`;

export const getStatusBorder = (status: InputBaseStatus) => {
  switch (status) {
    case 'warning':
      return css`
        border-color: ${({ theme }) =>
          theme.type === 'light' ? theme.colors.warning['700'] : theme.colors.warning['500']};
      `;
    case 'error':
      return css`
        border-color: ${({ theme }) => theme.colors.error['500']};
      `;
    case 'loading':
      return css`
        border-color: ${({ theme }) => theme.colors.secondary['500']};
      `;
    case 'success':
      return css`
        border-color: ${({ theme }) => theme.colors.success['500']};
      `;
    default:
      return css``;
  }
};

export const getDefaultBorder = (filled: boolean) => {
  return filled
    ? css`
        border-color: ${({ theme }) =>
          theme.type === 'light' ? theme.colors.secondary['400'] : theme.colors.secondary['100']};
      `
    : css``;
};

export const getDisabledState = ($filled: boolean) => {
  return $filled
    ? css`
        &:disabled {
          color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['400'])};
          border-color: ${({ theme }) => theme.colors.surface['400']};
          cursor: default;
        }
      `
    : css`
        &:disabled {
          cursor: default;
        }

        &[disabled]::placeholder {
          color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['400'])};
        }
      `;
};

export const getInputTransition = (transitionValue: string) => css`
  transition: background-color ${transitionValue}, border-color ${transitionValue}, box-shadow ${transitionValue};
`;

export const getStatusColor = (status: InputBaseStatus) => {
  switch (status) {
    case 'warning':
      return css`
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.warning['700'] : theme.colors.warning['500'])};
      `;
    case 'error':
      return css`
        color: ${({ theme }) => theme.colors.error['500']};
      `;
    case 'loading':
      return css`
        color: ${({ theme }) => theme.colors.secondary['500']};
      `;
    case 'success':
      return css`
        color: ${({ theme }) => theme.colors.success['500']};
      `;
    default:
      return css``;
  }
};
