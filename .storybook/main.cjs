const {withoutVitePlugins} = require('@storybook/builder-vite')

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-styling", "storybook-addon-themes"],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: true
  },
  async viteFinal(config) {
    return {
      ...config,
      base: '/storybook/',
      plugins: await withoutVitePlugins(config.plugins, ['vite:dts']),
    }
  },
};
