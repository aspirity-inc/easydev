import type { ReactNode } from 'react';

export type ThemeTypeVariant = 'light' | 'dark';

export type ThemeType = {
  type: ThemeTypeVariant;
  colors: { [key: string]: unknown };
  shadows: { [key: string]: unknown };
  spacing: { [key: string]: unknown };
  typography: {
    type: { [key: string]: unknown };
    weight: { [key: number]: string };
  };
  breakpoints: { [key: string]: string };
  transition: { [key: string]: string };
  [key: string | number]: unknown;
};

export type PartialThemeType = Partial<ThemeType>;
export type ThemeContextType = {
  theme: PartialThemeType;
  toggleTheme: () => void;
};

export type ThemeProviderType = {
  themeType?: ThemeTypeVariant;
  themes?: { light?: PartialThemeType; dark?: PartialThemeType };
  children: ReactNode | ReactNode[];
  target?: HTMLElement;
  customTarget?: HTMLElement;
  enableVendorPrefixes?: boolean;
  disableCSSOMInjection?: boolean;
  defaultStyledInjection?: boolean;
};
