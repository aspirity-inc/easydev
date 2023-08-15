import { withTheme } from './withTheme.decorator';
import { THEMES } from '../src/core/Theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [{name: 'light', value: THEMES['light'].colors.background}, {name: 'dark', value: THEMES['dark'].colors.background}]
  },
  docs: {

  },
}

export const decorators = [withTheme];
