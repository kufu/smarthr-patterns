const tsconfigPaths = require('vite-tsconfig-paths')
module.exports = {
  stories: ['../patterns/**/*.stories.mdx', '../patterns/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: {
          implementation: require.resolve('postcss'),
        },
      },
    },
  ],
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
