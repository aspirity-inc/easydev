import { styled, css } from 'styled-components';

import { Text } from '@core/Typography';
import { getTextVariants } from '@core/Typography/Text/styles';

import { StyledLabelText, getDefaultBorder, getInputTransition } from '../styles';
import { TextareaProps } from '../types';

export type StyledWrapperProps = {
  $filled: boolean;
  $disabled: boolean;
  $focused: boolean;
};

export const StyledTextareaWrapper = styled('div')<StyledWrapperProps>`
  width: fit-content;

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

  ${({ $filled }) => {
    return css`
      ${StyledTextareaLabel} {
        ${getDefaultBorder($filled)};
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

export const StyledTextarea = styled('textarea')<TextareaProps>`
  display: block;
  min-height: ${({ $autoresized }) => ($autoresized ? '50px' : '100px')};
  resize: none;
  overflow-y: ${({ $autoresized }) => ($autoresized ? 'hidden' : 'auto')};

  border: 0;
  background-color: transparent;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};
  ${getTextVariants('body2')};
  font-family: inherit;

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

export const StyledTextareaLabel = styled('label')`
  box-sizing: border-box;
  position: relative;
  display: block;
  padding: 32px 16px 16px;

  border: 1px solid ${({ theme }) => theme.colors.surface['400']};
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
