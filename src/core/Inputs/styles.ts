import { styled, css } from 'styled-components';

import { Text } from '@core/Typography';
import { getTextBodyVariants } from '@core/Typography/Text/styles';

import { InputBaseStatus, InputProps, LabelProps, StatusProps } from './types';

export const IconWrapper = styled('div')`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
`;

export const StyledInputWrapper = styled('div')`
  position: relative;
  height: 56px;
`;

export const StyledInput = styled('input')<InputProps>`
  box-sizing: border-box;
  height: 100%;
  padding: 8px 60px 8px 16px;
  padding-top: ${({ $showLabel }) => ($showLabel ? '24px' : '8px')};

  color: ${({ theme }) => theme.colors.surface['900']};
  ${getTextBodyVariants(2)};

  border: 1px solid transparent;
  border-radius: 8px;
  ${({ $filled }) => getBackgroundColor($filled)};
  ${({ $filled, $status }) => ($status ? getStatusBorder($status) : getDefaultBorder($filled))};
  ${({ theme }) => getInputTransition(theme.transition.default)};

  &::placeholder {
    transition: opacity ${({ theme }) => theme.transition.default};
    opacity: ${({ $showLabel }) => ($showLabel ? 1 : 0)};
  }

  // States
  &:hover:not([disabled]) {
    background-color: ${({ theme }) => theme.colors.surface['50']};
    border-color: ${({ theme }) => theme.colors.secondary['300']};
    ${({ theme }) => theme.shadows.blue};
  }

  &:focus:not([disabled]) {
    outline: 0;
    background-color: ${({ theme }) => theme.colors.surface['50']};
    border-color: ${({ theme, $status }) => ($status ? getStatusBorder($status) : theme.colors.secondary['400'])};
    ${({ theme }) => theme.shadows.blue};
  }

  ${({ $filled }) => getDisabledState($filled || false)};
`;

export const StyledLabel = styled('label')<LabelProps>`
  position: absolute;
  left: 16px;
  top: 50%;
  user-select: none;
  color: ${({ theme }) => theme.colors.surface['600']};
  transition: transform ${({ theme }) => theme.transition.default};

  ${({ $showAsLabel }) => {
    return $showAsLabel
      ? css`
          transform: translateY(-18px);
        `
      : css`
          transform: translateY(-50%);
        `;
  }};
`;

export const StyledLabelText = styled(Text)<LabelProps>`
  display: block;
  transform-origin: center left;
  transition: transform ${({ theme }) => theme.transition.default};

  ${({ $showAsLabel }) => {
    return (
      !$showAsLabel &&
      css`
        transform: scale(1.33, 1.33);
      `
    );
  }};
`;

export const StyledStatus = styled('div')<StatusProps>`
  color: ${({ theme }) => theme.colors.surface['600']};

  &::first-letter {
    text-transform: uppercase;
  }

  ${({ $status }) => $status && getStatusColor($status)};
`;

export const StyledMessageWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

export const StyledExtraMessage = styled('div')`
  color: ${({ theme }) => theme.colors.surface['600']};
`;

const getStatusBorder = (status: InputBaseStatus) => {
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

const getDefaultBorder = (filled: boolean) => {
  return filled
    ? css`
        border-color: ${({ theme }) => theme.colors.secondary['400']};
      `
    : css``;
};

const getBackgroundColor = ($filled: boolean) => {
  return $filled
    ? css`
        background-color: ${({ theme }) => theme.colors.surface['50']};
      `
    : css`
        background-color: ${({ theme }) => theme.colors.surface['300']};
      `;
};

const getDisabledState = ($filled: boolean) => {
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

export const StyledWrapper = styled('div')<{ $disabled: boolean }>`
  width: fit-content;

  ${({ $disabled }) => {
    return (
      $disabled &&
      css`
        ${StyledLabel} {
          color: ${({ theme }) => theme.colors.surface['500']};
        }

        ${StyledStatus} {
          color: ${({ theme }) => theme.colors.surface['500']};
        }

        ${IconWrapper} {
          cursor: default;
        }
      `
    );
  }}
`;

const getInputTransition = (transitionValue: string) => css`
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
