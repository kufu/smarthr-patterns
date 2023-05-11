import { GlobalNav } from '@global'
import { Story } from '@storybook/react'
import { ComponentProps } from 'react'

import { SpacingBase } from './Base'

export default {
  title: '余白の取り方/基本',
  docs: {
    inlineStories: false,
  },
}

const Template: Story<ComponentProps<typeof SpacingBase>> = (props) => (
  <>
    <GlobalNav />
    <SpacingBase {...props} />
  </>
)

export const Default = Template.bind({})
Default.args = {
  withInformationPanel: true,
}
