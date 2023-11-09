import { styled } from 'styled-components';
import { Flex } from '@aspirity/easydev';

export const StyledPaginationInfo = styled('div')`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.weight['600']};
  font-family: inherit;
  color: ${({ theme }) =>
    theme.type === 'light'
      ? theme.colors.surface['600']
      : theme.colors.surface['300']};
`;

export const StyledTableBorderWrap = styled(Flex)`
  width: 100%;
  border: 1px solid
    ${({ theme }) =>
      theme.type === 'light'
        ? theme.colors.surface['400']
        : theme.colors.surface['900']};

  border-radius: 8px;
  /* overflow: hidden; */
`;
