import { styled } from 'styled-components';

export const StyledIcon = styled('div')`
  display: flex;
`;

export const StyledPaginationButton = styled('button')`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['600'] : theme.colors.surface['300'])};

  &:disabled {
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['700'])};
  }
`;
