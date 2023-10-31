import { createContext, useCallback, useMemo, useState } from 'react';

import { useIsomorphicEffect } from '@hooks';
import { merge } from 'lodash';
import { StyleSheetManager, ThemeProvider as StyledThemeProvider } from 'styled-components';

import { THEMES } from './themes.ts';
import type { ThemeContextType, ThemeProviderType } from './types.ts';

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const EasydevProvider = ({
  children,
  defaultTheme,
  themeLight,
  themeDark,
  target,
  customTarget,
  enableVendorPrefixes = true,
  disableCSSOMInjection,
  defaultStyledInjection = false,
}: ThemeProviderType) => {
  const mergedLightTheme = useMemo(() => {
    return merge(THEMES['light'], themeLight);
  }, [themeLight]);

  const mergedDarkTheme = useMemo(() => {
    return merge(THEMES['dark'], themeDark);
  }, [themeDark]);

  const [currentTheme, setCurrentTheme] = useState(defaultTheme?.type === 'dark' ? mergedDarkTheme : mergedLightTheme);

  const toggleTheme = useCallback(() => {
    if (currentTheme.type === 'light') {
      setCurrentTheme(mergedDarkTheme);
    } else {
      setCurrentTheme(mergedLightTheme);
    }
  }, [currentTheme.type, mergedDarkTheme, mergedLightTheme]);

  useIsomorphicEffect(() => {
    const head = document.querySelector('head');
    const styled = document.querySelector('[data-styled="active"]') as Element;

    if (!defaultStyledInjection) {
      if (!target) customTarget ? customTarget.after(styled) : head?.prepend(styled);
    }
  }, []);

  const themeValues = useMemo(() => {
    return { toggleTheme, theme: currentTheme };
  }, [currentTheme, toggleTheme]);

  return (
    <ThemeContext.Provider value={themeValues}>
      <StyledThemeProvider theme={currentTheme}>
        <StyleSheetManager
          enableVendorPrefixes={enableVendorPrefixes}
          disableCSSOMInjection={disableCSSOMInjection}
          target={target}
        >
          {children}
        </StyleSheetManager>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
