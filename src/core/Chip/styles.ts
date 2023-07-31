import { css, styled } from 'styled-components';

import { getTextVariants } from '@core/Typography/Text/styles';

export type ChipVariant = 'default' | 'checkbox';

type ChipProps = {
  disabled?: boolean;
  checked?: boolean;
  variant?: ChipVariant;
  $hasDeleteButton?: boolean;
};

export const StyledInput = styled('input')`
  position: absolute;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
`;

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

export const StyledChipLabel = styled('label')<ChipProps>`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  user-select: none;
  border-radius: 40px;
  ${getTextVariants('body2')};
  cursor: pointer;
  white-space: nowrap;
  line-height: 1;

  ${({ variant, ...props }) => {
    switch (variant) {
      case 'default':
        return getDefaultChipStyle(props);
      case 'checkbox':
        return getCheckboxChipStyle();
      default:
        return getDefaultChipStyle(props);
    }
  }};
`;

const getDefaultChipStyle = ({ checked, $hasDeleteButton }: ChipProps) => {
  return css`
    justify-content: center;
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['50'])};
    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['900']};
    border: 1px solid
      ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['700'])};

    &:hover:not([disabled]) {
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.tretiary['100'] : theme.colors.surface['800']};
      border-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.tretiary['400'] : theme.colors.surface['700']};

      ${StyledDeleteButton} {
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};
      }
    }

    &[disabled] {
      cursor: default;
    }

    ${checked &&
    css`
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.tretiary['300'] : theme.colors.tretiary['500']};
      color: ${({ theme }) => theme.colors.surface['900']};

      ${$hasDeleteButton &&
      css`
        padding-top: 10px;
        padding-bottom: 10px;
        justify-content: flex-start;
      `}

      ${StyledDeleteButton} {
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['800'])};
      }
    `};
  `;
};

const getCheckboxChipStyle = () => {
  return css`
    padding-top: 10px;
    padding-bottom: 10px;
    justify-content: flex-start;
    ${getTextVariants('body3')};

    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['100'])};
    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};
    border: 1px solid
      ${({ theme }) => (theme.type === 'light' ? theme.colors.tretiary['100'] : theme.colors.surface['600'])};

    transition: box-shadow ${({ theme }) => theme.transition.default};

    &:hover:not([disabled]) {
      ${({ theme }) => theme.shadows.violet_light};
    }

    &[disabled] {
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['300'])};
      cursor: default;
    }
  `;
};
