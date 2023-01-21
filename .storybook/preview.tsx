import React from 'react'
import { Story } from '@storybook/react'

import { Theme } from '@global'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen'
}

export const decorators = [
  (Story: Story) => (
    <Theme>
      <Story />
    </Theme>
  )
]