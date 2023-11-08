import { createContext, useCallback, useMemo, useState } from 'react';

import { useIsomorphicEffect } from '@hooks';
import { merge } from 'lodash';
import {
  type DefaultTheme,
  StyleSheetManager,
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from 'styled-components';

import { NormalizedDiv } from './styles/normalize.ts';
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
  themeType = 'light',
  themes = { light: {}, dark: {} },
  target,
  customTarget,
  enableVendorPrefixes = true,
  disableCSSOMInjection,
  defaultStyledInjection = false,
}: ThemeProviderType) => {
  const mergedLightTheme = useMemo(() => {
    return merge(THEMES['light'], themes.light);
  }, [themes?.light]);

  const mergedDarkTheme = useMemo(() => {
    return merge(THEMES['dark'], themes.dark);
  }, [themes?.dark]);

  const [currentTheme, setCurrentTheme] = useState(themeType === 'dark' ? mergedDarkTheme : mergedLightTheme);

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
          <NormalizedDiv>
            <GlobalStyles />
            {children}
          </NormalizedDiv>
        </StyleSheetManager>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
