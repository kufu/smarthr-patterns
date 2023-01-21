import { GlobalNav } from '@global'
import { Story } from '@storybook/react'
import { ComponentProps } from 'react'

import { SpacingBase } from './Base'

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
