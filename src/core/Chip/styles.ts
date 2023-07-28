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
  padding: 12px 48px;
  user-select: none;
  border-radius: 40px;
  ${getTextVariants('body2')};
  cursor: pointer;
  white-space: nowrap;
  line-height: 1.5;

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
      background-color: ${({ theme }) => theme.colors.tretiary['500']};
      color: ${({ theme }) => theme.colors.surface['900']};

      ${$hasDeleteButton &&
      css`
        padding-left: 16px;
        justify-content: flex-start;
      `}
    `};
  `;
};

const getCheckboxChipStyle = () => {
  return css`
    justify-content: flex-start;
    padding-left: 16px;
    ${getTextVariants('body3')};

    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['100'])};
    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};
    transition: box-shadow ${({ theme }) => theme.transition.default};

    &:hover:not([disabled]) {
      ${({ theme }) => theme.shadows.gray};
    }

    &[disabled] {
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['300'])};
      cursor: default;
    }
  `;
};
