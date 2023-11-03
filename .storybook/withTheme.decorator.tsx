import { createGlobalStyle, type DefaultTheme } from 'styled-components';
import { EasydevProvider, THEMES } from '../src';
import { StoryContext, StoryFn } from '@storybook/react';

const GlobalStyles = createGlobalStyle<{ theme?: DefaultTheme }>`
  html, body {
    font-family: "Roboto Flex", sans-serif;
		scrollbar-gutter: stable;
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
