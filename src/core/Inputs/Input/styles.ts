import { styled, css } from 'styled-components';

import {
  StyledLabelText,
  getBaseInputStyles,
  getDefaultBorder,
  getStatusBorder,
  getStatusColor,
} from '@core/Inputs/styles';
import { InputProps, StatusProps } from '@core/Inputs/types';
import { Text } from '@core/Typography';

export const IconWrapper = styled('div')`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
`;

export const StyledInput = styled('input')<InputProps>`
  ${({ $filled }) => getBaseInputStyles($filled)};

  ${({ $filled, $status }) => ($status ? getStatusBorder($status) : getDefaultBorder($filled))};

  // States
  &:focus-visible:not([disabled]) {
    border-color: ${({ theme, $status }) => ($status ? getStatusBorder($status) : theme.colors.secondary['400'])};
  }
`;

export const StyledInputLabel = styled('label')`
  position: relative;
  display: block;
  height: 56px;

  &:has(${StyledInput}:focus-visible) ${StyledLabelText} {
    transform: scale(0.8) translateY(-22px);
  }

  &:has(${StyledInput}:not(:placeholder-shown)) ${StyledLabelText} {
    transform: scale(0.8) translateY(-22px);
  }
`;

export const StyledStatus = styled(Text)<StatusProps>`
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

export const StyledExtraMessage = styled(Text)`
  color: ${({ theme }) => theme.colors.surface['600']};
`;

export const StyledInputWrapper = styled('div')<{ $disabled: boolean }>`
  width: fit-content;

  ${({ $disabled }) => {
    return (
      $disabled &&
      css`
        ${StyledLabelText},
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
