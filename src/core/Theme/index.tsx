export const lightTheme = {
  colors: {
    primary: {
      main: '#4CE1B6',
    },
    secondary: {
      main: '#4F96E8',
    },
    surface: {
      main: '#A5A5A7',
    },
    tertiary: {
      main: '#B693FF',
    },
    success: {
      main: '#55B627',
    },
    error: {
      main: '#DE0000',
    },
    warning: {
      main: '#FF9A00',
    },
    link: {
      main: '#007AFF',
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
