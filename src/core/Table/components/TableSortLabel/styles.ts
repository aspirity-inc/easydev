import { styled, css } from 'styled-components';

import { Flex } from '@core/Flex';

export const StyledTableSortLabel = styled(Flex)``;

export const StyledIcon = styled('div')<{ $order: string }>`
  display: block;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.secondary['50'])};
  ${({ $order }) => {
    return (
      $order === 'desc' &&
      css`
        transform: rotate(180deg);
      `
    );
  }}
`;

export const StyledSortButton = styled('button')`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
