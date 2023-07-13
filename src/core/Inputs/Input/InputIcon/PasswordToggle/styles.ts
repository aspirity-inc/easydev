import { styled, css } from 'styled-components';

export const ToggleWrapper = styled('button')<{ disabled: boolean }>`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);

  margin: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
    `}
`;

export const StyledIcon = styled('div')`
  color: ${({ theme }) => theme.colors.surface['700']};
`;
