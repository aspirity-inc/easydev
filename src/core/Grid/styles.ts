import { styled } from 'styled-components';

import { StyledGridProps } from './types';

export const StyledGrid = styled('div')<StyledGridProps>`
  display: flex;
  direction: ${({ direction }) => direction || 'row'};
  flex-wrap: ${({ wrap }) => wrap || 'wrap'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
`;

export const ItemExample = styled('div')`
  --defaultBorderColor: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['700']};
  border: 1px solid var(--defaultBorderColor);
  padding: 14px 24px;
`;
