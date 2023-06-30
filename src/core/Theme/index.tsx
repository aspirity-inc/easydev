import { lighten, darken } from 'polished';

const paletteGenerator = (color: string) => ({
  main: color,
  50: lighten(0.5, color),
  100: lighten(0.4, color),
  200: lighten(0.3, color),
  300: lighten(0.2, color),
  400: lighten(0.1, color),
  500: color,
  600: darken(0.1, color),
  700: darken(0.2, color),
  800: darken(0.3, color),
  900: darken(0.4, color),
});

export const lightTheme = {
  colors: {
    primary: {
      ...paletteGenerator('#4CE1B6'),
    },
    secondary: {
      ...paletteGenerator('#4F96E8'),
    },
    surface: {
      ...paletteGenerator('#A5A5A7'),
    },
    tertiary: {
      ...paletteGenerator('#B693FF'),
    },
    success: {
      ...paletteGenerator('#55B627'),
    },
    error: {
      ...paletteGenerator('#DE0000'),
    },
    warning: {
      ...paletteGenerator('#FF9A00'),
    },
    link: {
      ...paletteGenerator('#007AFF'),
    },
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
      small: 8,
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

export const darkTheme = {
  ...lightTheme,
  colors: {
    background: '#1b1c1d',
    backgroundInverse: '#333333',
    positive: '#9fd986',
    negative: '#df987d',
    primary: '#d43369',
    secondary: '#1b8bd0',
    tertiary: '#DDDDDD',
    text: '#FFFFFF',
  },
};
