import { GlobalNav } from '@global'

import { SelectCompanyAccount } from './SelectCompanyAccount'

import type { StoryFn } from '@storybook/react'


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
