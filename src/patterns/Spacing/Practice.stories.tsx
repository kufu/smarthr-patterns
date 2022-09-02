import { Story } from '@storybook/react'
import { ComponentProps } from 'react'

// TODO 共通のやつは置き方や使い方を考えたい
import { GlobalNav } from '../../GlobalNav/GlobalNav'
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
