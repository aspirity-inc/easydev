import { css } from 'styled-components';

export type TypeProp = 'success' | 'warning' | 'error';

export const getTypeStyles = (type?: TypeProp) => {
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
      return css``;
  }
};
