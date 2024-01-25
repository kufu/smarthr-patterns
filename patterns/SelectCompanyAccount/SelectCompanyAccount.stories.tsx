import { GlobalNav } from '@global'
import { StoryFn } from '@storybook/react'

import { SelectCompanyAccount } from './SelectCompanyAccount'

const Template: StoryFn = () => (
  <>
    <GlobalNav withAppNavi={false} />
    <SelectCompanyAccount />
  </>
)

export const Default = Template.bind({})
Default.storyName = '基本'

export default {
  title: '企業アカウント選択',
  component: SelectCompanyAccount,
}
