import { css, DefaultTheme, styled } from 'styled-components';

import { getTextVariants } from '@core/Typography/Text/styles.ts';

import { ControlColorType } from './types.ts';

type ControlProps = {
  disabled?: boolean;
  color?: ControlColorType;
};

export const StyledInput = styled('input')`
  margin: 0;
  padding: 0;

  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
`;

export const StyledInnerBase = styled('span')`
  position: absolute;
  left: -1px;
  top: -2px;
  color: inherit;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transition.default};
  z-index: 0;
`;

export const ControlWrap = styled('span')<ControlProps>`
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;
  color: ${({ theme, color }) => getControlColor(theme, color)};
  background-color: ${({ theme }) => (theme.type === 'light' ? theme.colors.background : theme.colors.surface['800'])};
  border: 2px solid ${({ theme, color }) => getControlColor(theme, color)};
  border-radius: ${({ theme }) => theme.spacing.borderRadius.small}px;
  cursor: pointer;
  z-index: 2;

  ${StyledInput} {
    &:checked ~ ${StyledInnerBase} {
      opacity: 1;
    }
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      pointer-events: none;
      border-color: ${({ theme }) => theme.colors.surface['400']};
      color: ${({ theme }) => theme.colors.surface['400']};
    `}
`;

export const ControlContainer = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  label {
    cursor: pointer;
    user-select: none;
    ${getTextVariants('body3')}
  }
`;

export const getControlColor = (theme: DefaultTheme, color?: ControlColorType) => {
  if (!color) return theme.type === 'light' ? theme.colors.tretiary['700'] : theme.colors.tretiary['400'];

  switch (color) {
    case 'success':
      return theme.colors.success['500'];
    case 'warning':
      return theme.colors.warning['500'];
    case 'error':
      return theme.colors.error['500'];
    default:
      return color;
  }
};
