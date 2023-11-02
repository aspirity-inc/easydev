import { createContext } from 'react';

import { useIsomorphicEffect } from '@hooks';
import { merge } from 'lodash';
import {
  type DefaultTheme,
  StyleSheetManager,
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from 'styled-components';

import { THEMES } from './themes.ts';
import type { ThemeContextType, ThemeProviderType } from './types.ts';

export const ThemeContext = createContext<ThemeContextType | null>(null);

const addLinks = (head: HTMLElement) => {
  if (!head) return;
	
  const link1 = document.createElement('link');
  link1.rel = 'preconnect';
  link1.href = 'https://fonts.googleapis.com';

  const link2 = document.createElement('link');
  link2.rel = 'preconnect';
  link2.href = 'https://fonts.gstatic.com';
  link2.crossOrigin;

  const link3 = document.createElement('link');
  link3.rel = 'stylesheet';
  link3.href =
    'https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,slnt,wdth,wght,GRAD,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC@8..144,-10..0,25..151,100..1000,-200..150,323..603,25..135,649..854,-305..-98,560..788,416..570,528..760';

  const link4 = document.createElement('link');
  link4.rel = 'stylesheet';
  link4.href = '//cdn.jsdelivr.net/npm/css-reset-and-normalize/css/reset-and-normalize.min.css';

  head.appendChild(link1);
  head.appendChild(link2);
  head.appendChild(link3);
  head.appendChild(link4);
};

const GlobalStyles = createGlobalStyle<{ theme?: DefaultTheme }>`
  html, body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.text : theme.colors.surface['50'])};
    font-family: "Roboto Flex", sans-serif;
		scrollbar-gutter: stable;
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

    addLinks(head as HTMLElement);

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
          <GlobalStyles />
          {children}
        </StyleSheetManager>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
