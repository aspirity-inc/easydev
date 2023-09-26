import { css, styled } from 'styled-components';

import { Box } from '@core/Box';
import { getTextVariants } from '@core/Typography/Text/styles';

export const StyledMenuItem = styled(Box)<{ $disabled?: boolean }>`
  height: 56px;
  width: 100%;
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
