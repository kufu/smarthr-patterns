import { Story } from '@storybook/react'
import { ComponentProps } from 'react'

// TODO 共通のやつは置き方や使い方を考えたい
import { GlobalNav } from '../../GlobalNav/GlobalNav'
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
