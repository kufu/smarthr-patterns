import React from 'react'
import { StoryFn } from '@storybook/react'

import { Theme } from '@global'

import '../index.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
}

export const decorators = [
  (Story: StoryFn) => (
    <Theme>
      <Story />
    </Theme>
  ),
]
