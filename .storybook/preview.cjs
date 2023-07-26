import {withTheme} from './withTheme.decorator';
import {darkTheme, lightTheme} from '../src/core/Theme';

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
    values: [{name: 'light', value: lightTheme.colors.background}, {name: 'dark', value: darkTheme.colors.background}]
  },
  docs: {

  },
}

export const decorators = [withTheme];
