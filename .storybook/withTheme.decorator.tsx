import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../src/core/Theme';

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};

// Sets the background based on theme
const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: "Roboto Flex", sans-serif;
  }
`;

export const withTheme = (Story, context) => {
  const { theme } = context.globals;

  return (
    <ThemeProvider theme={THEMES[theme] || THEMES['light']}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  );
};
