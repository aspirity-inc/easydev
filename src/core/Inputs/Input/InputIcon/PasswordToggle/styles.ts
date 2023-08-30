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

      ${StyledIcon} {
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['400'])};
      }
    `}
`;

export const StyledIcon = styled('div')`
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.secondary['100'])};
`;
