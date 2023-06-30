import { css } from 'styled-components';
import { TypographyTypeProp } from '@core/Typography/types.ts';

export const getTypographyTypeStyles = (type?: TypographyTypeProp) => {
  switch (type) {
    case 'success':
      return css`
        color: ${({ theme }) => theme.colors.success.main};
      `;
    case 'warning':
      return css`
        color: ${({ theme }) => theme.colors.warning.main};
      `;
    case 'error':
      return css`
        color: ${({ theme }) => theme.colors.error.main};
      `;
    default:
      // If type don't passed, then default styles.
      return css``;
  }
};
