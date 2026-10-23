import { Theme } from '@global'
import React from 'react'

import type { StoryFn } from '@storybook/react'


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
