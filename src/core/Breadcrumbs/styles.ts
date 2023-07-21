import { styled } from 'styled-components';

import { getTextVariants } from '@core/Typography/Text/styles.ts';

export const StyledSeparator = styled('div')`
  margin: 0 4px;
  ${getTextVariants()};
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['50'])};

  & > div {
    display: block;
  }
`;

export const StyledBreadcrumbs = styled('div')`
  display: flex;
  align-items: center;
`;
