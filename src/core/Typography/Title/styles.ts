import { css, styled } from 'styled-components';

import { Box } from '@core/Box';
import { getTypographyTypeStyles } from '@core/Typography/styles.ts';
import { TypographyTypeProp } from '@core/Typography/types.ts';

export type TitleVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TitleProps = {
  variant?: TitleVariant;
  type?: TypographyTypeProp;
};

export const StyledTitle = styled(Box)<TitleProps>`
  margin: 0;
  padding: 0;

  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return css`
          font-size: 56px;
          font-weight: ${({ theme }) => theme.typography.weight['800']};
          line-height: 1.4;

          @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            font-size: 48px;
          }
          @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            font-size: 40px;
          }
        `;
      case 'h2':
        return css`
          font-size: 48px;
          font-weight: ${({ theme }) => theme.typography.weight['600']};
          line-height: 1.3;

          @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            font-size: 32px;
          }
        `;
      case 'h3':
        return css`
          font-size: 32px;
          font-weight: ${({ theme }) => theme.typography.weight['700']};
          line-height: 1.3;

          @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            font-size: 24px;
          }
        `;
      case 'h4':
        return css`
          font-size: 24px;
          font-weight: ${({ theme }) => theme.typography.weight['800']};
          line-height: 1.3;

          @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            font-size: 18px;
          }
        `;
      case 'h5':
        return css`
          font-size: 18px;
          font-weight: ${({ theme }) => theme.typography.weight['700']};
          line-height: 1.2;

          @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            font-size: 16px;
          }
        `;
      case 'h6':
        return css`
          font-size: 16px;
          font-weight: ${({ theme }) => theme.typography.weight['700']};
          line-height: 1.2;
        `;
      default:
        return css`
          font-size: 56px;
          font-weight: ${({ theme }) => theme.typography.weight['800']};
          line-height: 1.4;

          @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            font-size: 48px;
          }
          @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            font-size: 40px;
          }
        `;
    }
  }}

  ${({ type }) => {
    return getTypographyTypeStyles(type);
  }}}
`;
