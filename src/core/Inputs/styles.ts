import { styled, css } from 'styled-components';

import { InputBaseStatus } from '@core/Inputs/types';
import { StyledInputLabelText } from '@core/Typography/styles';
import { getTextVariants } from '@core/Typography/Text/styles';

export const getBaseInputStyles = ($filled: boolean) => {
  return css`
    box-sizing: border-box;
    height: 100%;
    padding: 24px 60px 8px 16px;

    color: ${({ theme }) => theme.colors.surface['900']};
    ${getTextVariants('body2')};

    border: 1px solid transparent;
    border-radius: 8px;
    ${getBackgroundColor($filled)};
    ${({ theme }) => getInputTransition(theme.transition.default)};

    &:placeholder-shown::placeholder {
      opacity: 0;
    }

    &:focus-visible::placeholder {
      transition: opacity ${({ theme }) => theme.transition.default};
      opacity: 1;
    }

    // States
    &:hover:not([disabled]) {
      background-color: ${({ theme }) => theme.colors.surface['50']};
      border-color: ${({ theme }) => theme.colors.secondary['300']};
      ${({ theme }) => theme.shadows.blue};
    }

    &:focus-visible:not([disabled]) {
      outline: 0;
      background-color: ${({ theme }) => theme.colors.surface['50']};
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
  color: ${({ theme }) => theme.colors.surface['600']};
  transition: transform ${({ theme }) => theme.transition.default};
  transform: translateY(-50%);
`;

export const getStatusBorder = (status: InputBaseStatus) => {
  switch (status) {
    case 'warning':
      return css`
        border-color: ${({ theme }) => theme.colors.warning['500']};
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
        border-color: ${({ theme }) => theme.colors.secondary['400']};
      `
    : css``;
};

export const getBackgroundColor = ($filled: boolean) => {
  return $filled
    ? css`
        background-color: ${({ theme }) => theme.colors.surface['50']};
      `
    : css`
        background-color: ${({ theme }) => theme.colors.surface['300']};
      `;
};

export const getDisabledState = ($filled: boolean) => {
  return $filled
    ? css`
        &:disabled {
          background-color: ${({ theme }) => theme.colors.surface['50']};
          color: ${({ theme }) => theme.colors.surface['500']};
          border-color: ${({ theme }) => theme.colors.surface['300']};
          cursor: default;
        }
      `
    : css`
        &:disabled {
          background-color: ${({ theme }) => theme.colors.surface['200']};
          cursor: default;
        }

        &[disabled]::placeholder {
          color: ${({ theme }) => theme.colors.surface['500']};
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
        color: ${({ theme }) => theme.colors.warning['500']};
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
