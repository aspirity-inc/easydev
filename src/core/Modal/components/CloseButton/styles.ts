import { styled } from 'styled-components';

import { StyledModalContentProps } from '../../styles';

export const StyledCloseButton = styled('button')<StyledModalContentProps>`
  --monochrome: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['100'])};

  display: block;
  padding: 0;
  margin: 0;
  margin-left: auto;
  margin-bottom: 16px;

  background-color: transparent;
  border: 0;
  cursor: pointer;

  color: var(--monochrome);

  & > div {
    display: block;
  }
`;
