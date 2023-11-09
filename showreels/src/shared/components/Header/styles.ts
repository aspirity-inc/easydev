import { Select, Header } from '@aspirity/easydev';
import styled from 'styled-components';

export const StyledHeader = styled(Header)`
  padding: 16px 30px 16px 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.surface['300']};
  background-color: ${({ theme }) =>
    theme.type === 'light' ? '#FFF' : theme.colors.tretiary['800']};
`;

export const StyledSelect = styled(Select)`
  width: 300px;

  & .react-select__control {
    height: 48px;
    color: ${({ theme }) =>
      theme.type === 'light'
        ? theme.colors.surface['700']
        : theme.colors.surface['300']};
  }

  & .react-select__placeholder {
    color: ${({ theme }) =>
      theme.type === 'light'
        ? theme.colors.surface['600']
        : theme.colors.surface['200']};
  }
`;

export const StyledToggle = styled('div')`
  padding: 0 16px;
`;
