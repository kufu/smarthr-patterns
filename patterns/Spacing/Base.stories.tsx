import { GlobalNav } from '@global'

import { SpacingBase } from './Base'

import type { StoryFn } from '@storybook/react'
import type { ComponentProps } from 'react'


export default {
  title: '余白の取り方/基本',
  docs: {
    inlineStories: false,
  },
}

const Template: StoryFn<ComponentProps<typeof SpacingBase>> = (props) => (
  <>
    <GlobalNav />
    <SpacingBase {...props} />
  </>
)

export const Default = Template.bind({})
Default.args = {
  withInformationPanel: true,
}
