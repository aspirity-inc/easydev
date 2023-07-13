import { styled, css } from 'styled-components';

import { StyledLabelText, getBaseInputStyles, getDefaultBorder } from '@core/Inputs/styles';
import { InputsBaseProps } from '@core/Inputs/types';
import { Text } from '@core/Typography';

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

export const StyledTextarea = styled('textarea')<InputsBaseProps>`
  ${({ $filled }) => getBaseInputStyles($filled)};

  display: block;
  min-height: 100px;
  padding: 32px 16px 16px;
  resize: none;
  overflow-y: hidden;

  ${({ $filled }) => getDefaultBorder($filled)};

  // States
  &:focus-visible:not([disabled]) {
    border-color: ${({ theme }) => theme.colors.secondary['400']};
  }
`;

export const StyledTextareaLabel = styled('label')`
  position: relative;
  display: block;

  &:has(${StyledTextarea}:focus) ${StyledTextareaLabelText} {
    transform: scale(0.8) translateY(-22px);
  }

  &:has(${StyledTextarea}:not(:placeholder-shown)) ${StyledTextareaLabelText} {
    transform: scale(0.8) translateY(-22px);
  }
`;

export const StyledCounterText = styled(Text)`
  width: 100%;
  text-align: end;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.surface['600']};
`;

export const StyledCharactersNumber = styled('span')<{ $isOverflow: boolean }>`
  color: ${({ theme, $isOverflow }) => $isOverflow && theme.colors.error['500']};
`;
