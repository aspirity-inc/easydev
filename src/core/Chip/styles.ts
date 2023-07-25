import { css, styled } from 'styled-components';

import { getTextVariants } from '@core/Typography/Text/styles';

export type ChipVariant = 'default' | 'checkbox' | 'multiselect';

type ChipProps = {
  disabled?: boolean;
  selected?: boolean;
  variant?: ChipVariant;
  $hasDeleteButton?: boolean;
};

export const StyledDeleteButton = styled('button')`
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['80'])};
  cursor: pointer;

  & > div {
    display: block;
  }
`;

export const StyledChip = styled('div')<ChipProps>`
  width: fit-content;
  min-width: 160px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  user-select: none;
  border-radius: 40px;
  ${getTextVariants('body2')};

  ${({ variant, ...props }) => {
    switch (variant) {
      case 'default':
        return getDefaultChipStyle(props);
      case 'checkbox':
        return getCheckboxChipStyle(props);
      case 'multiselect':
        return getMultiselectChipStyle(props);
      default:
        return getDefaultChipStyle(props);
    }
  }};
`;

const getDefaultChipStyle = ({ selected, $hasDeleteButton }: ChipProps) => {
  return css`
    justify-content: center;
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['50'])};
    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['900']};
    border: 1px solid
      ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['700'])};

    &:hover {
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.tretiary['400'] : theme.colors.surface['700']};

      ${StyledDeleteButton} {
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};
      }
    }

    ${selected &&
    css`
      background-color: ${({ theme }) => theme.colors.tretiary['500']};
      color: ${({ theme }) => theme.colors.surface['900']};

      ${$hasDeleteButton &&
      css`
        justify-content: flex-start;
      `}
    `};
  `;
};

const getCheckboxChipStyle = ({ disabled }: ChipProps) => {
  return css`
    ${getTextVariants('body3')};

    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['100'])};
    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};
    transition: box-shadow ${({ theme }) => theme.transition.default};

    &:hover:not([disabled]) {
      ${({ theme }) => theme.shadows.gray};
    }

    ${disabled &&
    css`
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['300'])};
      cursor: default;
    `};
  `;
};

const getMultiselectChipStyle = ({ disabled }: ChipProps) => {
  return css`
    flex-direction: row-reverse;

    ${StyledDeleteButton} {
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['800'])};
      margin-left: auto;
    }

    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['800'])};
    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.tretiary['300'] : theme.colors.tretiary['500']};

    &:hover:not([disabled]) {
      ${({ theme }) => theme.shadows.violet};
    }

    ${disabled &&
    css`
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['500']};
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['200'])};
      cursor: default;

      ${StyledDeleteButton} {
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['200'])};
        cursor: default;
      }
    `};
  `;
};
