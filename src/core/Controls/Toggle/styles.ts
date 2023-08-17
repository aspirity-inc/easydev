import { CSSProperties } from 'react';

import { css, styled } from 'styled-components';

import { ControlWrap, StyledInnerBase, StyledInput } from '../styles.ts';

type ToggleType = {
  $checkedColor?: CSSProperties['color'];
  $innerColor?: CSSProperties['color'];
};

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

export const ToggleWrap = styled(ControlWrap)<ToggleType>`
  --toggleBg: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['200'])};
  --checkedBg: ${({ theme }) => (theme.type === 'light' ? theme.colors.tretiary['600'] : theme.colors.tretiary['400'])};
  --innerColor: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800'])};

  width: 40px;
  border-radius: 20px;
  background-color: ${({ color }) => color || 'var(--toggleBg)'};
  border: none;
  transition: background-color ${({ theme }) => theme.transition.default};

  ${StyledToggleInner} {
    background-color: ${({ $innerColor }) => $innerColor || 'var(--innerColor)'};
  }

  &:has(${StyledToggle}:checked) {
    background-color: ${({ $checkedColor }) => $checkedColor || 'var(--checkedBg)'};

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
