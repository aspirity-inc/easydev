import { css, styled } from 'styled-components';

import { ControlWrap, StyledInnerBase, getControlColor, StyledInput } from '../styles.ts';
import { ToggleWrapProps } from '../types.ts';

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

export const ToggleWrap = styled(ControlWrap)<ToggleWrapProps>`
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

  ${({ $isChecked, $color, disabled }) => {
    return (
      $isChecked &&
      (disabled
        ? css`
            background-color: ${({ theme }) => theme.colors.surface['400']};
          `
        : css`
            background-color: ${({ theme }) => getControlColor(theme, $color)};
          `)
    );
  }}

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

  ${({ $isDayNightMode }) =>
    $isDayNightMode &&
    css`
      width: 48px;
      transition: background ${({ theme }) => theme.transition.default};

      ${StyledToggle} {
        transition: background ${({ theme }) => theme.transition.default};

        &:checked ~ ${StyledToggleInner} {
          translate: 150% -50%;
        }
      }
    `}

  ${({ $isDayNightMode, $isChecked }) =>
    $isDayNightMode &&
    ($isChecked
      ? css`
          background: url('/assets/toggle/day.svg');

          ${StyledToggleInner} {
            background: #ffc700;
          }
        `
      : css`
          background: url('/assets/toggle/night.svg');

          ${StyledToggleInner} {
            background: url('/assets/toggle/night-span.svg');
          }
        `)}
`;
