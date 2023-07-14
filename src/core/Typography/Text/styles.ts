import { css, styled } from 'styled-components';

import { Box } from '@core/Box';

import type { TypographyBaseType } from '../types.ts';

export type TextVariant = 'body1' | 'body2' | 'body3' | 'body4' | 'caption';
export type EllipsisType = { rows: number };
type StyledTextType = Pick<TypographyBaseType, 'color' | 'bgColor'> & {
  variant?: TextVariant;
  ellipsis?: EllipsisType;
};

const baseLineHeight = css`
  line-height: 1.2;
`;

export const getTextVariants = (variant?: TextVariant) => {
  const defaultVariant = css`
    font-size: 18px;
    font-weight: 140;
    font-variation-settings: 'wdth' 108, 'GRAD' 0, 'slnt' 0, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 79, 'YTLC' 514, 'YTUC' 712,
      'YTAS' 750, 'YTDE' -203, 'YTFI' 738;
  `;

  switch (variant) {
    case 'body1':
      return defaultVariant;
    case 'body2':
      return css`
        font-size: 16px;
        font-weight: 125;
        font-variation-settings: 'wdth' 110, 'GRAD' 0, 'slnt' 0, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 79, 'YTLC' 514,
          'YTUC' 712, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738;
      `;
    case 'body3':
      return css`
        font-size: 14px;
        font-weight: 130;
        font-variation-settings: 'wdth' 108, 'GRAD' 0, 'slnt' 0, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 79, 'YTLC' 514,
          'YTUC' 712, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738;
      `;
    case 'body4':
      return css`
        font-size: 12px;
        font-weight: 130;
        font-variation-settings: 'wdth' 61, 'GRAD' 0, 'slnt' 0, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 79, 'YTLC' 514, 'YTUC' 712,
          'YTAS' 750, 'YTDE' -203, 'YTFI' 738;
      `;
    case 'caption':
      return css`
        font-size: 12px;
        font-weight: 450;
        font-variation-settings: 'wdth' 131, 'GRAD' 0, 'slnt' 0, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 79, 'YTLC' 514,
          'YTUC' 712, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738;
      `;
    default:
      return defaultVariant;
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
  ${baseLineHeight};

  ${({ variant }) => getTextVariants(variant)};

  ${({ color, bgColor }) => css`
    color: ${color};
    background-color: ${bgColor};
  `};

  ${({ ellipsis }) => ellipsis && getEllipsisStyles(ellipsis)};
`;
