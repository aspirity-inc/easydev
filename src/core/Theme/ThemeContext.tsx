import { createContext } from 'react';

import { useIsomorphicEffect } from '@hooks';
import { merge } from 'lodash';
import { StyleSheetManager, ThemeProvider as StyledThemeProvider } from 'styled-components';

import { THEMES } from './themes.ts';
import type { ThemeContextType, ThemeProviderType } from './types.ts';

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const EasydevProvider = ({
  children,
  theme,
  target,
  customTarget,
  enableVendorPrefixes = true,
  disableCSSOMInjection,
}: ThemeProviderType) => {
  const type = theme?.type || 'light';
  const mergedTheme = theme ? merge(THEMES[type], theme) : THEMES[type];

  useIsomorphicEffect(() => {
    const head = document.querySelector('head');
    const styled = document.querySelector('[data-styled="active"]') as Element;

    if (!target) customTarget ? customTarget.after(styled) : head?.prepend(styled);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: mergedTheme }}>
      <StyledThemeProvider theme={mergedTheme}>
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
