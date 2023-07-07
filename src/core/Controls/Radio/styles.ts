import styled, { css } from 'styled-components';
import { ControlWrap, getControlColor, StyledInnerBase, StyledInput } from '@core/Controls/styles.ts';

export const StyledRadio = styled(StyledInput)``;

export const StyledRadioInner = styled(StyledInnerBase)`
  width: 16px;
  height: 16px;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

export const RadioWrap = styled(ControlWrap)`
  border-radius: 50%;

  ${StyledRadioInner} {
    background-color: ${({ theme, color }) => getControlColor(theme, color) || theme.colors.tretiary['700']};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      ${StyledRadioInner} {
        background-color: ${({ theme }) => theme.colors.surface['400']};
      }
    `}
`;
