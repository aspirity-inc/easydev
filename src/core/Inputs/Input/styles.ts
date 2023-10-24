import { styled, css } from 'styled-components';

import { Text } from '@core/Typography';

import { StyledLabelText, getBaseInputStyles, getDefaultBorder, getStatusBorder, getStatusColor } from '../styles';
import type { StyledInputProps, StatusProps, StyledInputLabelProps } from '../types';

export const IconWrapper = styled('div')`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
`;

export const StyledInput = styled('input')<StyledInputProps>`
  ${({ $filled }) => getBaseInputStyles($filled)};

  ${({ $filled, $status }) => ($status ? getStatusBorder($status) : getDefaultBorder($filled))};

  // States
  &:focus-visible:not([disabled]) {
    border-color: ${({ theme, $status }) => ($status ? getStatusBorder($status) : theme.colors.secondary['400'])};
  }
`;

export const StyledInputLabel = styled.label<StyledInputLabelProps>`
  position: relative;
  display: block;
  height: 56px;

  &:hover {
    & ${StyledInput} {
      border-color: ${({ theme, $disabled }) =>
        !$disabled && (theme.type === 'light' ? theme.colors.secondary['300'] : theme.colors.secondary['100'])};
      ${({ theme, $disabled }) => !$disabled && theme.shadows.blue};
    }
  }

  & ${StyledInput}:focus-visible + ${StyledLabelText} {
    transform: scale(0.8) translateY(-28px);
  }

  & ${StyledInput}:not(:placeholder-shown) + ${StyledLabelText} {
    transform: scale(0.8) translateY(-28px);
  }

  & ${StyledInput}:focus-visible:not([disabled]) + ${StyledLabelText} {
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['600'] : theme.colors.secondary['100'])};
  }

  & ${StyledInput}:not(:placeholder-shown):not([disabled]) + ${StyledLabelText} {
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['600'] : theme.colors.secondary['100'])};
  }
`;

export const StyledStatus = styled(Text)<StatusProps>`
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['600'] : theme.colors.surface['200'])};

  &::first-letter {
    text-transform: uppercase;
  }

  ${({ $status }) => $status && getStatusColor($status)};
`;

export const StyledMessageWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: -24px;
  gap: 20px;
  min-height: 16px;
`;

export const StyledExtraMessage = styled(Text)`
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.link['400'] : theme.colors.link['500'])};
`;

export const StyledInputWrapper = styled('div')<{ $disabled: boolean; $isLoading: boolean }>`
  ${({ $isLoading }) => {
    return (
      $isLoading &&
      css`
        pointer-events: none;
      `
    );
  }};

  ${({ $disabled }) => {
    return (
      $disabled &&
      css`
        ${StyledLabelText},
        ${StyledStatus} {
          color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['400'])};
        }

        ${IconWrapper} {
          cursor: default;
        }
      `
    );
  }}
`;
