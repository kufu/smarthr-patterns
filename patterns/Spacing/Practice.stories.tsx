import { GlobalNav } from '@global'

import { SpacingPractice } from './Practice'

import type { StoryFn } from '@storybook/react'
import type { ComponentProps } from 'react'


export default {
  title: '余白の取り方/応用',
  docs: {
    inlineStories: false,
  },
}

const Template: StoryFn<ComponentProps<typeof SpacingPractice>> = (props) => (
  <>
    <GlobalNav />
    <SpacingPractice {...props} />
  </>
)

export const Default = Template.bind({})
Default.args = {
  withInformationPanel: true,
  withUpwardNavigation: true,
}
