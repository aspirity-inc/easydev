// TODO: не забыть подумать над провайдером тем
import '../src/core/Theme/globalTheme.css.ts'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
