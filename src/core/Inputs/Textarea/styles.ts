import { styled, css } from 'styled-components';

import { StyledLabel, getBaseInputStyles, getDefaultBorder } from '@core/Inputs/styles';
import { InputsBaseProps } from '@core/Inputs/types';

export const StyledWrapper = styled('div')<{ $disabled: boolean }>`
  position: relative;
  width: fit-content;

  ${({ $disabled }) => {
    return (
      $disabled &&
      css`
        ${StyledLabel} {
          color: ${({ theme }) => theme.colors.surface['500']};
        }
      `
    );
  }}
`;

export const StyledTextarea = styled('textarea')<InputsBaseProps>`
  ${({ $showLabel, $filled }) => getBaseInputStyles($showLabel, $filled)};

  display: block;
  min-height: 100px;
  padding: 32px 16px 16px;
  resize: none;
  overflow-y: hidden;

  ${({ $filled }) => getDefaultBorder($filled)};

  // States
  &:focus:not([disabled]) {
    border-color: ${({ theme }) => theme.colors.secondary['400']};
  }
`;

export const StyledTextareaLabel = styled(StyledLabel)`
  top: 26px;

  ${({ $showAsLabel }) => {
    return $showAsLabel
      ? css`
          transform: translateY(-12px);
        `
      : css`
          transform: translateY(0);
        `;
  }};
`;

export const StyledCounter = styled('div')`
  width: 100%;
  text-align: end;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.surface['600']};

  ${StyledTextarea}:disabled & {
    color: ${({ theme }) => theme.colors.surface['500']};
  }
`;

export const StyledCharactersNumber = styled('span')<{ $isOverflow: boolean }>`
  color: ${({ theme, $isOverflow }) => $isOverflow && theme.colors.error['500']};
`;
