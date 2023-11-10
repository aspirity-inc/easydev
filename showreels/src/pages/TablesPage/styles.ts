import { Flex } from '@aspirity/easydev';
import styled from 'styled-components';

export const StyledPaginationInfo = styled('div')`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.weight['600']};
  font-family: inherit;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['600'] : theme.colors.surface['300'])};
`;

export const StyledTableBorderWrap = styled(Flex)`
  border: 1px solid ${({ theme }) => (theme.type === 'light' ? '#C3C3C5' : '#898290')};
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledPagination = styled(Flex)`
  padding: 12px 16px;
  background-color: #fff;
  width: 100%;
  border-radius: 0 0 8px 8px;

  background-color: ${({ theme }) => (theme.type === 'light' ? '#FFF' : '#2A282C')};
`;
