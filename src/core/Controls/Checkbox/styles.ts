import styled, { css, DefaultTheme } from 'styled-components';

export type CheckboxColorType = 'success' | 'warning' | 'error' | string;
type CheckboxProps = {
  disabled?: boolean;
  color?: CheckboxColorType;
};

export const StyledCheckbox = styled('input')`
  margin: 0;
  padding: 0;

  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
`;

export const StyledCheckboxInner = styled('span')`
  position: absolute;
  left: 0;
  top: 0;
  color: inherit;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transition.default};
  z-index: 0;
`;

export const CheckboxWrap = styled('span')<CheckboxProps>`
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;
  color: ${({ theme, color }) => getCheckboxColor(theme, color) || theme.colors.tretiary['700']};
  background-color: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme, color }) => getCheckboxColor(theme, color) || theme.colors.tretiary[700]};
  border-radius: ${({ theme }) => theme.spacing.borderRadius.small}px;
  cursor: pointer;
  z-index: 2;

  ${StyledCheckbox} {
    &:checked ~ ${StyledCheckboxInner} {
      opacity: 1;
    }
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      pointer-events: none;
      border-color: ${({ theme }) => theme.colors.surface[400]};
      color: ${({ theme }) => theme.colors.surface[400]};
    `}
`;

const getCheckboxColor = (theme: DefaultTheme, color?: CheckboxColorType) => {
  switch (color) {
    case 'success':
      return theme.colors.success.main;
    case 'warning':
      return theme.colors.warning.main;
    case 'error':
      return theme.colors.error.main;
    default:
      return color;
  }
};
