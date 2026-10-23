import smarthr from 'eslint-config-smarthr'
import storybook from 'eslint-plugin-storybook'

export default [
  {
    ignores: ['storybook-static/'],
  },
  ...smarthr,
  ...storybook.configs['flat/recommended'],
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'smarthr/a11y-clickable-element-has-text': 'error',
      'smarthr/a11y-image-has-alt-attribute': 'error',
      'smarthr/a11y-trigger-has-button': 'error',
      'smarthr/best-practice-for-date': 'error',
      // jsx-start-with-spread-attributes から改名
      'smarthr/best-practice-for-spread-syntax': ['error', { fix: true }],
      'smarthr/prohibit-export-array-type': 'error',
      'smarthr/require-barrel-import': 'error',
    },
  },
]
