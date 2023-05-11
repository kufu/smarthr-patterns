const tsconfigPaths = require('vite-tsconfig-paths')
module.exports = {
  stories: ['../patterns/**/*.stories.mdx', '../patterns/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  /* https://github.com/storybookjs/builder-vite/issues/85
   * alias を storybook with vite で効かせるため */
  viteFinal: async (config) => {
    return {
      ...config,
      plugins: [...config.plugins, tsconfigPaths.default()],
    }
  },
}
