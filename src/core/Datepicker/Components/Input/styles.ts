import { css, styled } from 'styled-components';

import { StyledInputLabel } from '@core/Inputs/Input/styles';
import { StyledLabelText, getInputTransition } from '@core/Inputs/styles';
import { getTextVariants } from '@core/Typography/Text/styles';

import type { StyleInputProps } from '../../types';

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

export const StyledDatepickerClearIcon = styled('div')<{ $disabled: boolean }>`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  padding: 0;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['400'])};
  cursor: pointer;

  ${({ $disabled }) => {
    return (
      $disabled &&
      css`
        cursor: default;
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['400'])};
      `
    );
  }}
`;

const focusInputStyles = () => css`
  background-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['900']};
  border-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.tretiary['400'] : theme.colors.tretiary['700']};
  ${({ theme }) => (theme.type === 'light' ? theme.shadows.violet_light : theme.shadows.gray)};
`;

export const StyledDatepickerInput = styled('input')<StyleInputProps>`
  width: 368px;
  padding: 25px 18px 11px 48px;

  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};
  ${getTextVariants('body2')};
  // Corrected property 'XTRA', because this font was incorrectly displayed in the datepicker input
  font-variation-settings: 'wdth' 110, 'GRAD' 0, 'slnt' 0, 'XTRA' 450, 'XOPQ' 96, 'YOPQ' 79, 'YTLC' 514, 'YTUC' 712,
    'YTAS' 750, 'YTDE' -203, 'YTFI' 738;
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
    ${focusInputStyles()};
  }

  ${({ $open }) => $open && focusInputStyles()}

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

export const StyledDatepickerLabel = styled(StyledInputLabel)<StyleInputProps>`
  & ${StyledDatepickerInput}:focus-visible + ${StyledDatepickerText} {
    transform: scale(0.8) translateY(-28px);
  }

  & ${StyledDatepickerInput}:not(:placeholder-shown) + ${StyledDatepickerText} {
    transform: scale(0.8) translateY(-28px);
  }

  ${({ $open }) => {
    return (
      $open &&
      css`
        ${StyledDatepickerText} {
          transform: scale(0.8) translateY(-28px);
        }
      `
    );
  }}
`;

export const StyledInputsWrapper = styled('div')`
  display: flex;
  gap: 24px;

  ${StyledDatepickerInput} {
    width: 148px;
  }
`;
