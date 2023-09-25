import { styled, css } from 'styled-components';

import { getTextVariants } from '@core/Typography/Text/styles';

export const StyledDropdown = styled('div')`
  position: relative;
`;
export const StyledMenu = styled('div')`
  position: absolute;
  width: fit-content;
  margin-top: 8px;
  border: 1px solid
    ${({ theme }) => (theme.type === 'light' ? theme.colors.secondary['100'] : theme.colors.surface['600'])};
  border-radius: ${({ theme }) => theme.spacing.borderRadius.medium}px;
  background-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};
  overflow: hidden;
`;

export const StyledMenuItem = styled('div')<{ $disabled?: boolean }>`
  height: 56px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  ${getTextVariants('body2')};
  color: inherit;
  transition: var(--transition);

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['200'] : theme.colors.surface['900']};
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['500'])};
      pointer-events: none;
    `}
`;
