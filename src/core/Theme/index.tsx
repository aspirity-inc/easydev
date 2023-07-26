import { shade, tint } from 'polished';

const paletteGenerator = (color: string) => ({
  main: color,
  50: tint(1, color),
  100: tint(0.4, color),
  200: tint(0.3, color),
  300: tint(0.2, color),
  400: tint(0.1, color),
  500: color,
  600: shade(0.1, color),
  700: shade(0.2, color),
  800: shade(0.3, color),
  900: shade(0.5, color),
});

export const lightTheme = {
  type: 'light',
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
    tretiary: {
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
      ...paletteGenerator('#0045E6'),
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

export const darkTheme = {
  ...lightTheme,
  type: 'dark',
  colors: {
    primary: {
      ...paletteGenerator('#6FE7C4'),
    },
    secondary: {
      ...paletteGenerator('#00C2E2'),
    },
    surface: {
      ...paletteGenerator('#766D7E'),
    },
    tretiary: {
      ...paletteGenerator('#AD9AF9'),
    },
    success: {
      ...paletteGenerator('#8BC34A'),
    },
    error: {
      ...paletteGenerator('#F44336'),
    },
    warning: {
      ...paletteGenerator('#FF9800'),
    },
    link: {
      ...paletteGenerator('#7ECEFF'),
    },
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
