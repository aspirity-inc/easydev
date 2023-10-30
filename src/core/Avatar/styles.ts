import { PersonIcon } from '@icons';
import { css, styled } from 'styled-components';

import { Box } from '@core/Box';
import { Center } from '@core/Center';
import { getTitleVariant } from '@core/Typography/styles';
import { getSubtitleLevelStyles } from '@core/Typography/Subtitle/styles';
import { getTextVariants } from '@core/Typography/Text/styles';
import type { TitleTagVariantsType } from '@core/Typography/Title/types';

import type { StyledAvatarProps } from '.';

export const sizes = {
  xxs: {
    avatar: '24px',
    iconFont: '16px',
    fontStyle: 'сaption',
    onlineIndicator: '10px',
  },
  xs: {
    avatar: '32px',
    iconFont: '20px',
    fontStyle: '5',
    onlineIndicator: '12px',
  },
  sm: {
    avatar: '48px',
    iconFont: '28px',
    fontStyle: 'h5',
    onlineIndicator: '16px',
  },
  md: {
    avatar: '56px',
    iconFont: '32px',
    fontStyle: 'h4',
    onlineIndicator: '18px',
  },
  lg: {
    avatar: '64px',
    iconFont: '32px',
    fontStyle: 'h4',
    onlineIndicator: '20px',
  },
  xl: {
    avatar: '96px',
    iconFont: '48px',
    fontStyle: 'h3',
    onlineIndicator: '20px',
  },
  xxl: {
    avatar: '160px',
    iconFont: '80px',
    fontStyle: 'h1',
    onlineIndicator: '20px',
  },
};

export const radiuses = {
  xxs: '2px',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '32px',
  xl: '56px',
  xxl: '80px',
};

export const StyledCenter = styled(Center)`
  overflow: hidden;
  text-transform: uppercase;
`;

export const OnlineIndicator = styled(Box)<{ $online?: boolean }>`
  border: 2px solid ${({ theme }) => (theme.type == 'light' ? theme.colors.surface['50'] : theme.colors.surface['900'])};
  border-radius: 50%;

  ${({ $online }) => {
    return $online
      ? css`
          background-color: ${({ theme }) => theme.colors.primary['500']};
        `
      : css`
          background-color: ${({ theme }) => theme.colors.surface['300']};
        `;
  }}
`;

export const DefaultAvatarIcon = styled(PersonIcon)``;

export const StyledAvatar = styled(Box)<StyledAvatarProps>`
  position: relative;
  width: ${({ $size }) => (typeof $size === 'number' ? `${$size}px` : sizes[$size].avatar)};
  height: ${({ $size }) => (typeof $size === 'number' ? `${$size}px` : sizes[$size].avatar)};
  background-color: ${({ theme }) => theme.colors.primary['50']};
  color: ${({ theme }) => theme.colors.primary['900']};
  ${({ $size }) => getTextStyles($size)};
  user-select: none;
  border-radius: ${({ $radius }) => (typeof $radius === 'number' ? `${$radius}px` : radiuses[$radius])};

  & ${DefaultAvatarIcon} {
    width: ${({ $size }) => (typeof $size === 'number' ? `${$size / 2}px` : sizes[$size].iconFont)};
    height: ${({ $size }) => (typeof $size === 'number' ? `${$size / 2}px` : sizes[$size].iconFont)};
  }

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: ${({ $radius }) => (typeof $radius === 'number' ? `${$radius}px` : radiuses[$radius])};
  }

  & ${OnlineIndicator} {
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: ${({ $size }) => (typeof $size === 'number' ? `12px` : sizes[$size].onlineIndicator)};
    height: ${({ $size }) => (typeof $size === 'number' ? `12px` : sizes[$size].onlineIndicator)};

    // Correct position for big sizes and radiuses
    ${({ $radius, $size }) => {
      if ($size === 'xxl' && ($radius === 'xxl' || $radius === 'xl')) {
        return css`
          bottom: ${$radius === 'xxl' ? '14px' : '6px'};
          right: ${$radius === 'xxl' ? '14px' : '6px'};
        `;
      }

      if ($size === 'xl' && ($radius === 'xxl' || $radius === 'xl')) {
        return css`
          bottom: 2px;
          right: 2px;
        `;
      }
    }}
  }
`;

const getTextStyles = ($size: string | number) => {
  switch ($size) {
    case 'xxs': {
      return getTextVariants('caption');
    }
    case 'xs': {
      return getSubtitleLevelStyles(5);
    }
    case 'sm':
    case 'md':
    case 'lg':
    case 'xl':
    case 'xxl': {
      return getTitleVariant(sizes[$size].fontStyle as TitleTagVariantsType);
    }
    default: {
      return getSubtitleLevelStyles(5);
    }
  }
};
