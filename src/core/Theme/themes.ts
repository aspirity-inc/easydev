import { darkPalette, lightPalette } from '@core/Theme/themePalette';

import { ThemeType } from './types';

const lightTheme: ThemeType = {
  type: 'light',
  colors: {
    ...lightPalette,
    background: '#FFFFFF',
    text: '#000000',
    icon: '#676769',
  },
  shadows: {
    gray: 'box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.07)',
    blue: 'box-shadow: 0 0px 4px 0 rgba(119, 177, 237, 0.81)',
    violet: 'box-shadow: 0 0px 8px 0 rgba(129, 76, 216, 0.57)',
    violet_light: 'box-shadow: 0 6px 6px 0 rgba(213, 133, 250, 0.08)',
  },
  spacing: {
    padding: {
      small: 10,
      medium: 20,
      large: 30,
    },
    borderRadius: {
      default: 0,
      small: 4,
      medium: 8,
      large: '50%',
    },
  },
  typography: {
    type: {
      primary: '"Roboto Flex", sans-serif',
      code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
    weight: {
      100: '100',
      200: '200',
      300: '300',
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      900: '900',
      1000: '1000',
    },
  },
  breakpoints: {
    xs: '600px',
    sm: '900px',
    md: '1200px',
    lg: '1536px',
    xl: '1920px',
  },
  transition: {
    default: '0.3s',
  },
};

const darkTheme: ThemeType = {
  ...lightTheme,
  type: 'dark',
  colors: {
    ...darkPalette,
    background: '#232329',
    text: '#EFEFEF',
    icon: '#898290',
  },
  shadows: {
    gray: 'box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25)',
    blue: 'box-shadow: 0 0 6px 0 rgba(76, 197, 255, 0.65)',
    violet: 'box-shadow: 0 0 11px 0 #1F034C',
    violet_light: 'box-shadow: 0 2px 18px 0 rgba(19, 9, 33, 0.45)',
  },
};

export const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};
