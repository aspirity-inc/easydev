import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { THEMES } from '../src/core/Theme';
import { ThemeProvider, } from "../src/core/Theme/ThemeContext";
import { StoryContext, StoryFn } from "@storybook/react";

// Sets the background based on theme
const GlobalStyles = createGlobalStyle<{theme?: DefaultTheme}>`
  html, body {
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => (theme.type === 'light' ? theme.colors.text : theme.colors.surface['50'])};
    font-family: "Roboto Flex", sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

export const withTheme = (Story: StoryFn, context: StoryContext) => {
  const { backgrounds } = context.globals;
  const theme = backgrounds?.value !== THEMES['dark'].colors.background ? THEMES['light'] : THEMES['dark'];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  );
};
