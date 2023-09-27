import { styled } from 'styled-components';

export const StyledTarget = styled('button')`
  width: 100%;
  margin: 0;
  padding: 0;
  outline: none;
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }
`;
