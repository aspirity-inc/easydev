import { DefaultTheme, css, styled } from 'styled-components';

import { getTextVariants } from '@core/Typography/Text/styles';
import { TextVariantsType } from '@core/Typography/Text/types';

import { BadgeColor, BadgeSize, DefaultBadgeColor, defaultColors } from './types';

type StyledBadgeProps = {
  $color: BadgeColor;
  $size: BadgeSize;
  $fullWidth: boolean | undefined;
};

const sizes = {
  sm: {
    fontStyle: 'caption',
    paddings: '2px 8px',
  },
  md: {
    fontStyle: 'body3',
    paddings: '2px 10px',
  },
  lg: {
    fontStyle: 'body2',
    paddings: '4px 12px',
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
  ${({ $size }) => getTextVariants(sizes[$size].fontStyle as TextVariantsType)};
  ${({ $color, theme }) => getBadgeColors($color, theme)};
`;

const getBadgeColors = ($color: BadgeColor, theme: DefaultTheme) => {
  if (!isDefaultBadgeColor($color)) {
    return css`
      background-color: ${$color};
      color: ${theme.colors.surface['50']};
    `;
  }

  const defaultColorShades = {
    bgColor: '50',
    textColor: '900',
  };

  const colors = {
    green: {
      palette: 'primary',
      ...defaultColorShades,
    },
    gray: {
      palette: 'surface',
      bgColor: theme.type === 'light' ? '100' : '50',
      textColor: '900',
    },
    blue: {
      palette: 'secondary',
      ...defaultColorShades,
    },
    violet: {
      palette: 'tretiary',
      ...defaultColorShades,
    },
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
