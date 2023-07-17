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
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.text : theme.colors.surface['50'])};
    font-family: "Roboto Flex", sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

export const withTheme = (Story, context) => {
  const { backgrounds } = context.globals;
  const theme = backgrounds?.value !== '#232329' ? THEMES['light'] : THEMES['dark'];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  );
};
