import smarthr from 'eslint-config-smarthr'
import storybook from 'eslint-plugin-storybook'

export default [
  {
    ignores: ['storybook-static/'],
  },
  ...smarthr,
  ...storybook.configs['flat/recommended'],
]
