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

export const getStatusCss = (statusType: string, themeType: string) => {
  switch (statusType) {
    case 'Completed':
      return {
        color: themeType === 'light' ? '#1A6600' : '##3F3A43',
        backgroundColor: themeType === 'light' ? '#DFFFD7' : '#E6E6E6',
      };
    case 'Canceled':
      return {
        color: themeType === 'light' ? '#740000' : '#B71C1B',
        backgroundColor: themeType === 'light' ? '#FFBBBB' : '#FFEBEE',
      };
    case 'On hold':
      return {
        color: themeType === 'light' ? '#272729' : '#2A282C',
        backgroundColor: themeType === 'light' ? '#FBFBFE' : '#E6E6E6',
      };
    case 'In progress':
      return {
        color: themeType === 'light' ? '#E75403' : '#623C04',
        backgroundColor: themeType === 'light' ? '#FFF4E0' : '#FFE7C2',
      };
    default:
      return {
        color: themeType === 'light' ? '' : '',
        backgroundColor: themeType === 'light' ? '' : '',
      };
  }
};
