import { styled, css } from 'styled-components';

import { Flex } from '@core/Flex';
import { scrollbarStyles } from '@core/Theme';
import { Text } from '@core/Typography';
import { getTextVariants } from '@core/Typography/Text/styles';

import { StyledLabelText, getDefaultBorder, getInputTransition, getStatusBorder } from '../styles';
import type { StyledTextareaWrapperProps, StyledTextareaProps, StatusProps } from '../types';

export const StyledTextareaWrapper = styled('div')<StyledTextareaWrapperProps>`
  ${({ $disabled }) => {
    return (
      $disabled &&
      css`
        ${StyledTextareaLabelText},
        ${StyledCounterText} {
          color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['400'])};
        }
      `
    );
  }}

  ${({ $filled, $status }) => {
    return css`
      ${StyledTextareaLabel} {
        ${$status ? getStatusBorder($status) : getDefaultBorder($filled)};
      }
    `;
  }};

  ${({ $disabled, $filled, $focused }) => {
    return $disabled
      ? css`
          ${StyledTextareaLabel} {
            ${getDisabledLabelStyle($filled || false)};
          }
        `
      : css`
          ${StyledTextareaLabel} {
            &:hover {
              border-color: ${({ theme }) =>
                theme.type === 'light' ? theme.colors.secondary['300'] : theme.colors.secondary['100']};
              ${({ theme }) => theme.shadows.blue};
            }
            ${getFocusLabelStyles($focused)}
          }
        `;
  }}
`;

export const StyledTextareaLabelText = styled(StyledLabelText)`
  top: 30px;
`;

export const StyledTextarea = styled('textarea')<StyledTextareaProps>`
  display: block;
  min-height: ${({ $autoresized }) => ($autoresized ? '50px' : '100px')};
  width: 100%;
  resize: none;
  overflow-y: ${({ $autoresized }) => ($autoresized ? 'hidden' : 'auto')};

  border: 0;
  background-color: transparent;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};
  ${getTextVariants('body2')};
  font-family: inherit;

  ${scrollbarStyles};
  scrollbar-gutter: stable;

  &:placeholder-shown::placeholder {
    opacity: 0;
  }

  &:focus-visible::placeholder {
    transition: opacity ${({ theme }) => theme.transition.default};
    opacity: 1;
  }

  &:focus-visible:not([disabled]) {
    outline: 0;
  }

  ${({ $filled }) => getDisabledStateTextareaText($filled || false)};
`;

export const StyledTextareaLabel = styled('label')<StatusProps>`
  box-sizing: border-box;
  position: relative;
  display: block;
  padding: 32px 16px 16px;

  border: 1px solid ${({ theme }) => theme.colors.surface['400']};

  ${({ $status }) => $status && getStatusBorder($status)};

  border-radius: 8px;

  background-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['900']};
  ${({ theme }) => getInputTransition(theme.transition.default)};

  // States
  & ${StyledTextarea}:focus-visible + ${StyledTextareaLabelText} {
    transform: scale(0.8) translateY(-22px);
  }

  & ${StyledTextarea}:not(:placeholder-shown) + ${StyledTextareaLabelText} {
    transform: scale(0.8) translateY(-22px);
  }

  & ${StyledTextarea}:focus-visible:not([disabled]) + ${StyledTextareaLabelText} {
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['600'] : theme.colors.secondary['100'])};
  }

  & ${StyledTextarea}:not(:placeholder-shown):not([disabled]) + ${StyledTextareaLabelText} {
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['600'] : theme.colors.secondary['100'])};
  }
`;

export const StyledCounterText = styled(Text)`
  display: block;
  width: 100%;
  text-align: end;
  margin-top: 8px;
  margin-bottom: -24px;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['600'] : theme.colors.surface['200'])};
`;

export const StyledCharactersNumber = styled('span')<{ $isOverflow: boolean }>`
  color: ${({ theme, $isOverflow }) => $isOverflow && theme.colors.error['500']};
`;

const getDisabledLabelStyle = ($filled: boolean) => {
  return (
    $filled &&
    css`
      border-color: ${({ theme }) => theme.colors.surface['400']};
    `
  );
};

const getFocusLabelStyles = ($focused: boolean) => {
  return (
    $focused &&
    css`
      border-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.secondary['400'] : theme.colors.secondary['300']};
      ${({ theme }) => theme.shadows.blue};
    `
  );
};

const getDisabledStateTextareaText = ($filled: boolean) => {
  return $filled
    ? css`
        &:disabled {
          color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['400'])};
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

export const StyledTextareaMessageWrapper = styled(Flex)`
  margin-top: 8px;
  margin-bottom: -24px;
  min-height: 16px;
`;
