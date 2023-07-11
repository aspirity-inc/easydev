import { lightTheme } from '../src/core/Theme';

declare module 'styled-components' {
  type Theme = typeof lightTheme;
  export type DefaultTheme = Theme;
}
