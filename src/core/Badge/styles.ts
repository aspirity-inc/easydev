import { CSSProperties } from 'react';

import { darken } from 'polished';
import { DefaultTheme, css, styled } from 'styled-components';

import { getTextVariants } from '@core/Typography/Text/styles';
import { TextVariantsType } from '@core/Typography/Text/types';

import { BadgeColor, BadgeSize, DefaultBadgeColor, StyledBadgeProps, defaultColors } from './types';

const sizes = {
  sm: {
    fontStyle: 'caption',
    paddings: '2px 8px',
    fontWeight: '450',
  },
  md: {
    fontStyle: 'body3',
    paddings: '2px 10px',
    fontWeight: '186',
  },
  lg: {
    fontStyle: 'body2',
    paddings: '4px 12px',
    fontWeight: '175',
  },
};

export const StyledBadgeContent = styled('span')`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledBadge = styled('div')<StyledBadgeProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  padding: ${({ $size }) => sizes[$size].paddings};

  border-radius: 32px;
  ${({ $size }) => getTextStyles($size)};
  ${({ $color, $textColor, theme }) => getBadgeColors($color, $textColor, theme)};
`;

const getBadgeColors = ($color: BadgeColor, $textColor: CSSProperties['color'], theme: DefaultTheme) => {
  if (!isDefaultBadgeColor($color)) {
    return (
      $color &&
      css`
        background-color: ${$color};
        color: ${$textColor || darken(0.3, $color)};
      `
    );
  }

  const defaultColorShades = {
    bgColor: '50',
    textColor: '900',
  };

  const colors = {
    success: {
      palette: 'success',
      ...defaultColorShades,
    },
    error: {
      palette: 'error',
      ...defaultColorShades,
    },
    warning: {
      palette: 'warning',
      ...defaultColorShades,
    },
  };

  const { palette, bgColor, textColor } = colors[$color];

  return css`
    background-color: ${theme.colors[palette][bgColor]};
    color: ${theme.colors[palette][textColor]};
  `;
};

const isDefaultBadgeColor = (color: BadgeColor): color is DefaultBadgeColor => {
  return defaultColors.includes(color as DefaultBadgeColor);
};

const getTextStyles = ($size: BadgeSize) => {
  return css`
    ${getTextVariants(sizes[$size].fontStyle as TextVariantsType)};
    font-weight: ${sizes[$size].fontWeight};
  `;
};
