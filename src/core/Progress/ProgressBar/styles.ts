import { styled } from 'styled-components';

import { Box } from '@core/Box';
import { StyledProgressBarBase } from '@core/Progress/styles.ts';

export const TitleWrap = styled(Box)`
  margin-bottom: 5px;
  color: inherit;
`;

export const ProgressBarWrap = styled(Box)`
  --color: ${({ theme }) => (theme.type === 'light' ? theme.colors.secondary['900'] : theme.colors.secondary['200'])};

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color);
`;

export const StyledProgressBar = styled(StyledProgressBarBase)``;
