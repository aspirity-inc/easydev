import styled, { css } from 'styled-components';
import { ControlWrap, StyledInnerBase, StyledInput } from '@core/Controls/styles.ts';

export const StyledToggle = styled(StyledInput)``;

export const StyledToggleInner = styled(StyledInnerBase)`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  top: 50%;
  margin: -8px 4px 0 4px;
  background-color: ${({ theme }) => theme.colors.surface['800']};
  opacity: 1;
  transition: transform ${({ theme }) => theme.transition.default};
`;

export const ToggleWrap = styled(ControlWrap)`
  width: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.surface.main};
  border: none;
  transition: background-color ${({ theme }) => theme.transition.default};

  &:has(${StyledToggle}:checked) {
    background-color: ${({ theme }) => theme.colors.tretiary['600']};
  }

  ${StyledToggle} {
    &:checked ~ ${StyledToggleInner} {
      transform: translateX(100%);
      background-color: ${({ theme }) => theme.colors.background};
    }
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.surface['400']};

      ${StyledToggleInner} {
        background-color: ${({ theme }) => theme.colors.surface['600']};
      }
    `}
`;
