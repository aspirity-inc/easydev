import { CSSProperties } from 'react';

import { styled } from 'styled-components';

import { StyledProgressBarBase } from '@core/Progress/styles.ts';

export type ProgressBarWrapType = {
  $progressColor?: CSSProperties['color'];
};

export const TitleWrap = styled('span')`
  margin-bottom: 5px;
  color: inherit;
`;

export const ProgressBarWrap = styled('div')<ProgressBarWrapType>`
  --color: ${({ theme }) => (theme.type === 'light' ? theme.colors.secondary['900'] : theme.colors.secondary['200'])};

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ $progressColor }) => $progressColor || 'var(--color)'};
`;

export const StyledProgressBar = styled(StyledProgressBarBase)``;
