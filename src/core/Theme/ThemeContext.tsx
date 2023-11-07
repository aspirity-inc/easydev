import { createContext } from 'react';

import { useIsomorphicEffect } from '@hooks';
import { merge } from 'lodash';
import {
  type DefaultTheme,
  StyleSheetManager,
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from 'styled-components';

import normalizeStyles from './styles/normalize.module.css';
import { THEMES } from './themes.ts';
import type { ThemeContextType, ThemeProviderType } from './types.ts';

export const ThemeContext = createContext<ThemeContextType | null>(null);

const GlobalStyles = createGlobalStyle<{ theme?: DefaultTheme }>`
  html, body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.text : theme.colors.surface['50'])};
  }

  * {
    box-sizing: border-box;
  }
`;

export const EasydevProvider = ({
  children,
  theme,
  target,
  customTarget,
  enableVendorPrefixes = true,
  disableCSSOMInjection,
  defaultStyledInjection = false,
}: ThemeProviderType) => {
  const type = theme?.type || 'light';
  const mergedTheme = theme ? merge(THEMES[type], theme) : THEMES[type];

  useIsomorphicEffect(() => {
    const head = document.querySelector('head');
    const styled = document.querySelector('[data-styled="active"]') as Element;

    if (!defaultStyledInjection) {
      if (!target) customTarget ? customTarget.after(styled) : head?.prepend(styled);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: mergedTheme }}>
      <StyledThemeProvider theme={mergedTheme}>
        <StyleSheetManager
          enableVendorPrefixes={enableVendorPrefixes}
          disableCSSOMInjection={disableCSSOMInjection}
          target={target}
        >
          <div className={normalizeStyles}>
            <GlobalStyles />
            {children}
          </div>
        </StyleSheetManager>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
