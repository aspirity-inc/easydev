import { styled, css } from 'styled-components';

import { StyledLabelText, getBackgroundColor, getDefaultBorder, getInputTransition } from '@core/Inputs/styles';
import { InputsBaseProps, TextareaProps } from '@core/Inputs/types';
import { Text } from '@core/Typography';
import { getTextVariants } from '@core/Typography/Text/styles';

export const StyledTextareaWrapper = styled('div')<{ $disabled: boolean }>`
  width: fit-content;

  ${({ $disabled }) => {
    return (
      $disabled &&
      css`
        ${StyledLabelText},
        ${StyledCounterText} {
          color: ${({ theme }) => theme.colors.surface['500']};
        }
      `
    );
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
  color: ${({ theme }) => theme.colors.surface['900']};
  ${getTextVariants('body2')};

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

export const StyledTextareaLabel = styled('label')<InputsBaseProps>`
  box-sizing: border-box;
  position: relative;
  display: block;
  padding: 32px 16px 16px;

  border: 1px solid transparent;
  border-radius: 8px;
  ${({ $filled }) => getDefaultBorder($filled)};
  ${({ $filled }) => getBackgroundColor($filled)};
  ${({ theme }) => getInputTransition(theme.transition.default)};

  // States
  &:has(${StyledTextarea}:focus-visible:not([disabled])) {
    border-color: ${({ theme }) => theme.colors.secondary['400']};
  }

  &:has(${StyledTextarea}:focus-visible) ${StyledTextareaLabelText} {
    transform: scale(0.8) translateY(-22px);
  }

  &:has(${StyledTextarea}:not(:placeholder-shown)) ${StyledTextareaLabelText} {
    transform: scale(0.8) translateY(-22px);
  }

  &:has(${StyledTextarea}:hover:not([disabled])) {
    background-color: ${({ theme }) => theme.colors.surface['50']};
    border-color: ${({ theme }) => theme.colors.secondary['300']};
    ${({ theme }) => theme.shadows.blue};
  }

  &:has(${StyledTextarea}:focus-visible:not([disabled])) {
    background-color: ${({ theme }) => theme.colors.surface['50']};
    ${({ theme }) => theme.shadows.blue};
  }

  ${({ $filled }) => getDisabledStateTextareaWrapper($filled || false)};
`;

export const StyledCounterText = styled(Text)`
  display: block;
  width: 100%;
  text-align: end;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.surface['600']};
`;

export const StyledCharactersNumber = styled('span')<{ $isOverflow: boolean }>`
  color: ${({ theme, $isOverflow }) => $isOverflow && theme.colors.error['500']};
`;

const getDisabledStateTextareaWrapper = ($filled: boolean) => {
  return $filled
    ? css`
        &:has(${StyledTextarea}:disabled) {
          background-color: ${({ theme }) => theme.colors.surface['50']};
          border-color: ${({ theme }) => theme.colors.surface['300']};
        }
      `
    : css`
        &:has(${StyledTextarea}:disabled) {
          background-color: ${({ theme }) => theme.colors.surface['200']};
        }
      `;
};

const getDisabledStateTextareaText = ($filled: boolean) => {
  return $filled
    ? css`
        &:disabled {
          color: ${({ theme }) => theme.colors.surface['500']};
          cursor: default;
        }
      `
    : css`
        &:disabled {
          cursor: default;
        }

        &[disabled]::placeholder {
          color: ${({ theme }) => theme.colors.surface['500']};
        }
      `;
};
