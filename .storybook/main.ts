import { mergeConfig } from 'vite'
import turbosnap from 'vite-plugin-turbosnap'
import tsconfigPaths from 'vite-tsconfig-paths'

import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../patterns/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
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
  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [tsconfigPaths(), turbosnap({ rootDir: config.root ?? process.cwd() })],
    }),
}

export default config
