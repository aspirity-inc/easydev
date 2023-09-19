import { css, styled } from 'styled-components';

import { Box } from '@core/Box';

import type { LevelVariantsType, StyledSubtitleProps } from './types';

export const getSubtitleLevelStyles = (level?: LevelVariantsType) => {
  const defaultLevel = css`
    font-size: 32px;
    font-weight: ${({ theme }) => theme.typography.weight['500']};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 24px;
      font-weight: ${({ theme }) => theme.typography.weight['600']};
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
      font-size: 18px;
    }
  `;
  switch (level) {
    case 1:
      return defaultLevel;
    case 2:
      return css`
        font-size: 24px;
        font-weight: 550;

        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
          font-size: 18px;
          font-weight: ${({ theme }) => theme.typography.weight['600']};
        }
        @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
          font-size: 16px;
          font-weight: 550;
        }
      `;
    case 3:
      return css`
        font-size: 18px;
        font-weight: ${({ theme }) => theme.typography.weight['600']};

        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
          font-size: 16px;
          font-weight: 550;
        }
      `;
    case 4:
      return css`
        font-size: 16px;
        font-weight: ${({ theme }) => theme.typography.weight['600']};

        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
          font-size: 14px;
          font-weight: ${({ theme }) => theme.typography.weight['500']};
        }
      `;
    case 5:
      return css`
        font-size: 12px;
        font-weight: ${({ theme }) => theme.typography.weight['600']};

        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
          font-weight: ${({ theme }) => theme.typography.weight['500']};
        }
      `;
    default:
      return defaultLevel;
  }
};

export const StyledSubtitle = styled(Box)<StyledSubtitleProps>`
  margin: 0;
  padding: 0;
  font-variation-settings: 'wdth' 144, 'GRAD' 20, 'slnt' 0, 'xtra' 468, 'xopq' 96, 'yopq' 79, 'ytlc' 514, 'ytuc' 712,
    'ytas' 750, 'ytde' -203, 'ytfi' 738;
  line-height: 1.2;

  ${({ level }) => getSubtitleLevelStyles(level)}

  ${({ $color, $bgColor }) => css`
    color: ${$color};
    background-color: ${$bgColor};
  `};
`;
