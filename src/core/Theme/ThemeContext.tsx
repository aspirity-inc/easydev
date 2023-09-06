import { createContext } from 'react';

import { merge } from 'lodash';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { THEMES } from './themes.ts';
import type { ThemeContextType, ThemeProviderType } from './types.ts';

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const EasydevProvider = ({ children, theme }: ThemeProviderType) => {
  const type = theme?.type || 'light';
  const mergedTheme = theme ? merge(THEMES[type], theme) : THEMES[type];

  return (
    <ThemeContext.Provider value={{ theme: mergedTheme }}>
      <StyledThemeProvider theme={mergedTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
