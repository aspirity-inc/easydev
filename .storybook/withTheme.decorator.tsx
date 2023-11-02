import { EasydevProvider, THEMES } from '../src';
import { StoryContext, StoryFn } from '@storybook/react';

export const withTheme = (Story: StoryFn, context: StoryContext) => {
  const { backgrounds } = context.globals;
  const theme = backgrounds?.value !== THEMES['dark'].colors.background ? THEMES['light'] : THEMES['dark'];

  return (
    <EasydevProvider theme={theme} defaultStyledInjection>
      <Story />
    </EasydevProvider>
  );
};
