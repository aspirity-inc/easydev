import { styled, css } from 'styled-components';

import {
  StyledLabel,
  getBaseInputStyles,
  getDefaultBorder,
  getStatusBorder,
  getStatusColor,
} from '@core/Inputs/styles';
import { InputProps, StatusProps } from '@core/Inputs/types';

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
  ${({ $showLabel, $filled }) => getBaseInputStyles($showLabel, $filled)};

  ${({ $filled, $status }) => ($status ? getStatusBorder($status) : getDefaultBorder($filled))};

  // States
  &:focus-visible:not([disabled]) {
    border-color: ${({ theme, $status }) => ($status ? getStatusBorder($status) : theme.colors.secondary['400'])};
  }
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
