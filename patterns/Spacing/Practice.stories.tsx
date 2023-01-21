import { GlobalNav } from '@global'
import { Story } from '@storybook/react'
import { ComponentProps } from 'react'

import { SpacingPractice } from './Practice'

const Template: Story<ComponentProps<typeof SpacingPractice>> = (props) => (
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
