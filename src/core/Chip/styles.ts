import { css, styled } from 'styled-components';

import { getTextVariants } from '@core/Typography/Text/styles';

export type ChipVariant = 'filled' | 'outlined';

type ChipProps = {
  disabled?: boolean;
  $active?: boolean | undefined;
  variant?: ChipVariant;
  color?: React.CSSProperties['color'];
  bgColor?: React.CSSProperties['backgroundColor'];
};

export const StyledChipLabel = styled('label')<ChipProps>`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  user-select: none;
  border-radius: 40px;
  ${getTextVariants('body2')};
  cursor: pointer;
  white-space: nowrap;
  line-height: 1;

  ${({ variant, ...props }) => {
    switch (variant) {
      case 'filled':
        return getFilledStyle(props);
      case 'outlined':
        return getOutlinedStyle();
      default:
        return getFilledStyle(props);
    }
  }};

  ${({ color, bgColor }) => css`
    color: ${color};
    background-color: ${bgColor};
  `};
`;

const getFilledStyle = ({ $active }: ChipProps) => {
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
    }

    &[disabled] {
      cursor: default;
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['900']};
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['500'])};
    }

    ${$active &&
    css`
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.tretiary['300'] : theme.colors.tretiary['500']};
      color: ${({ theme }) => theme.colors.surface['900']};
    `};
  `;
};

const getOutlinedStyle = () => {
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
