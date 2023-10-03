import { css, styled } from 'styled-components';

import { ControlWrap, StyledInnerBase, getControlColor, StyledInput } from '../styles.ts';

export const StyledToggle = styled(StyledInput)``;

export const StyledToggleInner = styled(StyledInnerBase)`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  top: 50%;
  left: 4px;
  translate: 0 -50%;
  opacity: 1;
  transition: translate ${({ theme }) => theme.transition.default};
`;

export const ToggleWrap = styled(ControlWrap)`
  --toggleBg: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['200'])};
  --checkedBg: ${({ theme }) => (theme.type === 'light' ? theme.colors.tretiary['600'] : theme.colors.tretiary['400'])};
  --innerColor: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800'])};

  width: 40px;
  border-radius: 20px;
  background-color: var(--toggleBg);
  border: none;
  transition: background-color ${({ theme }) => theme.transition.default};

  ${StyledToggleInner} {
    background-color: var(--innerColor);
  }

  &:has(${StyledToggle}:checked) {
    background-color: ${({ theme, $color }) => getControlColor(theme, $color)};

    ${({ disabled }) =>
      disabled &&
      css`
        background-color: ${({ theme }) => theme.colors.surface['400']};
      `}
  }

  ${StyledToggle} {
    &:checked ~ ${StyledToggleInner} {
      translate: 100% -50%;
    }
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['500']};

      ${StyledToggleInner} {
        filter: grayscale(1);
      }
    `}
`;
