import { css, styled } from 'styled-components';

import { Box } from '@core/Box';

import { getTypographyTypeStyles } from '../styles.ts';
import { TypographyTypeProp } from '../types.ts';

export type TextVariant = 'body' | 'caption' | 'tooltip' | 'button';
export type TextBodyLevel = 1 | 2 | 3 | 4;
export type EllipsisType = { rows: number };
type StyledTextType = {
  variant?: TextVariant;
  type?: TypographyTypeProp;
  bodyLevel?: TextBodyLevel;
  ellipsis?: EllipsisType;
};

const baseLineHeight = css`
  line-height: 1.2;
`;

export const getTextBodyVariants = (level?: TextBodyLevel) => {
  const defaultLevel = css`
    font-size: 18px;
    font-weight: 140;
    font-variation-settings: 'wdth' 108, 'GRAD' 0, 'slnt' 0, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 79, 'YTLC' 514, 'YTUC' 712,
      'YTAS' 750, 'YTDE' -203, 'YTFI' 738;
    ${baseLineHeight};
  `;

  switch (level) {
    case 1:
      return defaultLevel;
    case 2:
      return css`
        font-size: 16px;
        font-weight: 125;
        font-variation-settings: 'wdth' 110, 'GRAD' 0, 'slnt' 0, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 79, 'YTLC' 514,
          'YTUC' 712, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738;
        ${baseLineHeight};
      `;
    case 3:
      return css`
        font-size: 14px;
        font-weight: 130;
        font-variation-settings: 'wdth' 108, 'GRAD' 0, 'slnt' 0, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 79, 'YTLC' 514,
          'YTUC' 712, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738;
        ${baseLineHeight};
      `;
    case 4:
      return css`
        font-size: 12px;
        font-weight: 130;
        font-variation-settings: 'wdth' 61, 'GRAD' 0, 'slnt' 0, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 79, 'YTLC' 514, 'YTUC' 712,
          'YTAS' 750, 'YTDE' -203, 'YTFI' 738;
        ${baseLineHeight};
      `;
    default:
      return defaultLevel;
  }
};

const getEllipsisStyles = (ellipsis: EllipsisType) => {
  const { rows } = ellipsis;
  return css`
    display: -webkit-box;
    -webkit-line-clamp: ${rows};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
};

export const StyledText = styled(Box)<StyledTextType>`
  margin: 0;
  padding: 0;

  ${({ variant, bodyLevel }) => {
    switch (variant) {
      case 'body':
        return getTextBodyVariants(bodyLevel);
      case 'caption':
        return css`
          font-size: 12px;
          font-weight: 450;
          font-variation-settings: 'wdth' 131, 'GRAD' 0, 'slnt' 0, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 79, 'YTLC' 514,
            'YTUC' 712, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738;
          ${baseLineHeight};
        `;
      case 'tooltip':
        return css`
          font-size: 12px;
          font-weight: 200;
          font-variation-settings: 'wdth' 131, 'GRAD' 0, 'slnt' 0, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 79, 'YTLC' 514,
            'YTUC' 712, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738;
          ${baseLineHeight};
        `;
      case 'button':
        return css`
          font-size: 13px;
          letter-spacing: 0.02em;
          font-weight: 800;
          text-transform: uppercase;
          font-variation-settings: 'wdth' 129, 'GRAD' 150, 'slnt' 0, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 79, 'YTLC' 514,
            'YTUC' 712, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738;
          ${baseLineHeight};
        `;
      default:
        return getTextBodyVariants(1);
    }
  }};

  ${({ type }) => {
    return getTypographyTypeStyles(type);
  }};
  ${({ ellipsis }) => ellipsis && getEllipsisStyles(ellipsis)}
`;
