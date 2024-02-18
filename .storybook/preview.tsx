import React from 'react'
import { StoryFn } from '@storybook/react'

import { Theme } from '@global'

import '../index.css'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
  },
  decorators: [
    (Story: StoryFn) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
}

export default preview
