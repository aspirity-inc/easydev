import styled from 'styled-components';

export const StyledContent = styled('div')`
  flex: 1;
  padding: 72px 119px 150px 84px;
  background-color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface[200] : theme.colors.surface[800])};
`;
