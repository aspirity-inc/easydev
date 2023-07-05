import { getTextBodyVariants } from '@core/Typography/Text/styles';
import styled, { css } from 'styled-components';

export type InputStatus = 'default' | 'warning' | 'error' | 'loading' | 'success';

type InputProps = {
  $filled: boolean;
  $showLabel: boolean;
  $status: InputStatus;
};

type LabelProps = {
  $filled: boolean;
};

type StatusProps = {
  $status: InputStatus;
};

export const IconWrapper = styled('div')`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
`;

export const StyledWrapper = styled('div')`
  position: relative;
  width: 284px;
  height: 56px;
`;

export const StyledInput = styled('input')<InputProps>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  padding-top: ${({ $showLabel }) => ($showLabel ? '24px' : '8px')};

  color: ${({ theme }) => theme.colors.surface['900']};
  ${getTextBodyVariants(2)};

  border: 0;
  border-radius: 8px;
  ${({ $filled }) => getBackgroundColor($filled)};
  ${({ $filled, $status }) => getBorder($filled, $status)};
  ${({ theme }) => getInputTransition(theme.transition.default)};

  &::placeholder {
    color: ${({ theme }) => theme.colors.surface['600']};
  }

  // States
  &:hover:not([disabled]) {
    background-color: ${({ theme }) => theme.colors.surface['50']};
    border: 1px solid ${({ theme }) => theme.colors.secondary['300']};
    ${({ theme }) => theme.shadows.blue};
  }

  &:focus:not([disabled]) {
    outline: 0;
    background-color: ${({ theme }) => theme.colors.surface['50']};
    border: 1px solid ${({ theme }) => theme.colors.secondary['400']};
    ${({ theme }) => theme.shadows.blue};
  }

  ${({ $filled }) => getDisabledState($filled || false)};
`;

export const StyledLabel = styled('label')<LabelProps>`
  position: absolute;
  top: 8px;
  left: 16px;

  color: ${({ theme }) => theme.colors.surface['600']};
  user-select: none;

  ${StyledInput}:disabled & {
    color: ${({ theme }) => theme.colors.surface['500']};
  }
`;

export const StyledStatus = styled('div')<StatusProps>`
  margin-top: 8px;

  &::first-letter {
    text-transform: uppercase;
  }

  ${({ $status }) => getStatusColor($status)};
`;

const getBorder = (filled: boolean, status: InputStatus) => {
  switch (status) {
    case 'warning':
      return css`
        border: 1px solid ${({ theme }) => theme.colors.warning['500']};
      `;
    case 'error':
      return css`
        border: 1px solid ${({ theme }) => theme.colors.error['500']};
      `;
    case 'loading':
      return css`
        border: 1px solid ${({ theme }) => theme.colors.secondary['500']};
      `;
    case 'success':
      return css`
        border: 1px solid ${({ theme }) => theme.colors.success['500']};
      `;
    default:
      return filled
        ? css`
            border: 1px solid ${({ theme }) => theme.colors.secondary['400']};
          `
        : css``;
  }
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
          border: 1px solid ${({ theme }) => theme.colors.surface['300']};
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

const getInputTransition = (transitionValue: string) => css`
  transition: background-color ${transitionValue}, border-color ${transitionValue}, box-shadow ${transitionValue};
`;

export const getStatusColor = (status: InputStatus) => {
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
