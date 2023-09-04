import { css, styled } from 'styled-components';

import type { TitleTagVariantsType } from './Title/types';

export const StyledTooltipText = styled('span')`
  font-size: 12px;
  font-weight: 200;
  font-variation-settings: 'wdth' 131, 'GRAD' 0, 'slnt' 0, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 79, 'YTLC' 514, 'YTUC' 712,
    'YTAS' 750, 'YTDE' -203, 'YTFI' 738;
`;

export const StyledInputLabelText = styled('span')`
  font-size: 16px;
  font-weight: 450;
  font-variation-settings: 'wdth' 131, 'GRAD' 0, 'slnt' 0, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 79, 'YTLC' 514, 'YTUC' 712,
    'YTAS' 750, 'YTDE' -203, 'YTFI' 738;
`;

export const getTitleVariant = (variant?: TitleTagVariantsType) => {
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
};
