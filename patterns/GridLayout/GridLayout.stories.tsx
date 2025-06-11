import { StoryFn } from '@storybook/react'
import { ComponentProps } from 'react'

import { GridLayoutDemo } from './GridLayout'

export default {
  title: 'グリッドレイアウト/基本',
  docs: {
    inlineStories: false,
  },
}

const Template: StoryFn<ComponentProps<typeof GridLayoutDemo>> = () => (
  <GridLayoutDemo />
)

export const Default = Template.bind({})
Default.args = {} 