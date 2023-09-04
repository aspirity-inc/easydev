import { styled } from 'styled-components';

import { Center } from '@core/Center';
import { getSubtitleLevelStyles } from '@core/Typography/Subtitle/styles';
import { getTextVariants } from '@core/Typography/Text/styles';
import { getTitleVariant } from '@core/Typography/styles';
import { TitleVariant } from '@core/Typography/types';

type AvatarWrapperProps = {
  $radius: number | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  $size: number | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};

const sizes = {
  xxs: {
    box: '24px',
    iconFont: '16px',
    fontStyle: 'сaption',
  },
  xs: {
    box: '32px',
    iconFont: '20px',
    fontStyle: '5',
  },
  sm: {
    box: '48px',
    iconFont: '28px',
    fontStyle: 'h5',
  },
  md: {
    box: '56px',
    iconFont: '32px',
    fontStyle: 'h4',
  },
  lg: {
    box: '64px',
    iconFont: '32px',
    fontStyle: 'h4',
  },
  xl: {
    box: '96px',
    iconFont: '48px',
    fontStyle: 'h3',
  },
  xxl: {
    box: '160px',
    iconFont: '80px',
    fontStyle: 'h1',
  },
};

const radiuses = {
  xxs: '2px',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '32px',
  xl: '56px',
  xxl: '80px',
};

export const StyledAvatarWrapper = styled('div')<AvatarWrapperProps>`
  width: ${({ $size }) => (typeof $size === 'number' ? `${$size}px` : sizes[$size].box)};
  height: ${({ $size }) => (typeof $size === 'number' ? `${$size}px` : sizes[$size].box)};

  background-color: ${({ theme }) => theme.colors.primary['50']};
  color: ${({ theme }) => theme.colors.primary['900']};
  ${({ $size }) => getTextStyles($size)}

  border-radius: ${({ $radius }) => (typeof $radius === 'number' ? `${$radius}px` : radiuses[$radius])};
  overflow: hidden;

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  & .material-symbols-outlined {
    font-size: ${({ $size }) => (typeof $size === 'number' ? `${$size / 2}px` : sizes[$size].iconFont)};
  }
`;

export const StyledCenter = styled(Center)`
  height: 100%;
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
      return getTitleVariant(sizes[$size].fontStyle as TitleVariant);
    }
    default: {
      return getSubtitleLevelStyles(5);
    }
  }
};
