import { styled } from 'styled-components';

import { StyledInputLabel } from '@core/Inputs/Input/styles';
import { StyledLabelText, getInputTransition } from '@core/Inputs/styles';
import { getTextVariants } from '@core/Typography/Text/styles';

export const StyledDatepickerIcon = styled('div')`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  padding: 0;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['400'])};
  cursor: pointer;
`;

export const StyledDatepickerInput = styled('input')`
  padding: 25px 18px 11px 48px;

  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};
  ${getTextVariants('body2')};
  font-family: inherit;

  border: 1px solid transparent;
  border-radius: 8px;
  background-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['800']};

  ${({ theme }) => getInputTransition(theme.transition.default)};

  &:placeholder-shown::placeholder {
    opacity: 0;
  }

  &:focus-visible::placeholder {
    transition: opacity ${({ theme }) => theme.transition.default};
    opacity: 1;
  }

  &:hover:not([disabled]),
  &:focus-visible:not([disabled]),
  &:not(:placeholder-shown):not([disabled]) {
    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['900']};
    border-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.tretiary['400'] : theme.colors.tretiary['700']};
    ${({ theme }) => (theme.type === 'light' ? theme.shadows.violet_light : theme.shadows.gray)};
  }

  &:focus-visible:not([disabled]) {
    outline: 0;
  }

  &:disabled + ${StyledDatepickerIcon} {
    cursor: default;
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['400'])};
  }

  &:not(:placeholder-shown):disabled {
    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};

    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['400'])};
    border-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['400']};
    cursor: default;
  }

  &:placeholder-shown:disabled {
    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['200'] : theme.colors.surface['800']};

    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['400'])};
    border-color: transparent;
    cursor: default;
  }
`;

export const StyledDatepickerText = styled(StyledLabelText)`
  left: 48px;
  z-index: 2;
  ${getTextVariants('body2')};
  font-family: inherit;
`;

export const StyledDatepickerLabel = styled(StyledInputLabel)`
  &:has(${StyledDatepickerInput}:focus-visible) ${StyledDatepickerText} {
    transform: scale(0.8) translateY(-28px);
  }

  &:has(${StyledDatepickerInput}:not(:placeholder-shown)) ${StyledDatepickerText} {
    transform: scale(0.8) translateY(-28px);
  }
`;