import { styled } from 'styled-components';

export const StyledCloseButton = styled('button')`
  display: block;
  padding: 0;
  margin: 0 0 16px auto;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['100'])};

  & > div {
    display: block;
  }
`;
