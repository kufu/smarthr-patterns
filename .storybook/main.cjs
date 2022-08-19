const tsconfigPaths = require('vite-tsconfig-paths')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  /* https://github.com/storybookjs/builder-vite/issues/85
   * alias を storybook with vite で効かせるため */
  viteFinal: async (config) => {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        tsconfigPaths.default(),
      ]
    }
  }
}