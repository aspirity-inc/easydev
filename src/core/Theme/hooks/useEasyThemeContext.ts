import { useContext } from 'react';

import { ThemeContext } from '../ThemeContext.tsx';

export function useEasyThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useEasyThemeContext must be used within a EasydevProvider');
  }

  const theme = context.theme;

  return {
    theme,
    type: theme?.type,
    colors: theme?.colors,
    shadows: theme?.shadows,
    spacing: theme?.spacing,
    typography: theme?.typography,
    breakpoints: theme?.breakpoints,
    transition: theme?.transition,
    toggleTheme: context.toggleTheme,
  };
}
