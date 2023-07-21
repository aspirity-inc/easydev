import { css, styled } from 'styled-components';

import { Subtitle } from '@core/Typography';

export type ProgressBarType = {
  value: number;
};

export type ProgressBarWrapType = {
  $label?: boolean;
};

export const StyledValue = styled(Subtitle)`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  color: inherit;
`;
export const ProgressBarWrap = styled('div')<ProgressBarWrapType>`
  --color: ${({ theme }) => (theme.type === 'light' ? theme.colors.secondary['900'] : theme.colors.secondary['200'])};

  position: relative;
  color: var(--color);

  ${({ $label }) =>
    $label &&
    css`
      margin-top: 20px;
    `}
`;
