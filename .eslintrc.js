module.exports = {
  extends: 'smarthr',
  rules: {
    'react/react-in-jsx-scope': 'off',
    'smarthr/a11y-clickable-element-has-text': 'error',
    'smarthr/a11y-image-has-alt-attribute': 'error',
    'smarthr/a11y-trigger-has-button': 'error',
    'smarthr/best-practice-for-date': 'error',
    'smarthr/jsx-start-with-spread-attributes': [
      'error',
      {
        fix: true,
      },
    ],
    'smarthr/prohibit-export-array-type': 'error',
    'smarthr/require-barrel-import': 'error',
  },
}
