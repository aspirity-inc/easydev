import { styled } from 'styled-components';

import { Box } from '@core/Box';

export const StyledThumbnails = styled(Box)`
  margin-top: 40px;

  & .active {
    border: 3px solid
      ${({ theme }) => (theme.type === 'light' ? theme.colors.tretiary['700'] : theme.colors.tretiary['400'])};
  }
`;

export const StyledThumbnail = styled(Box)`
  border-radius: 8px;
  height: 128px;
  cursor: pointer;
`;
