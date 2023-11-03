import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { EasydevProvider, THEMES } from '../src';
import { StoryContext, StoryFn } from '@storybook/react';

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

export const withTheme = (Story: StoryFn, context: StoryContext) => {
  const { backgrounds } = context.globals;
  const theme = backgrounds?.value !== THEMES['dark'].colors.background ? THEMES['light'] : THEMES['dark'];

  return (
    <EasydevProvider theme={theme} defaultStyledInjection>
      <GlobalStyles />
      <Story />
    </EasydevProvider>
  );
};
