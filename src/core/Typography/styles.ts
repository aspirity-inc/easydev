import { css } from 'styled-components';

import { TypographyTypeProp } from '@core/Typography/types.ts';

export const getTypographyTypeStyles = (type?: TypographyTypeProp) =>
  type &&
  css`
    color: ${({ theme }) => theme.colors[type].main};
  `;
