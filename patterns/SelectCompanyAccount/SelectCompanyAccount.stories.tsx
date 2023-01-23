import { GlobalNav } from '@global'
import { Story } from '@storybook/react'

import { SelectCompanyAccount } from './SelectCompanyAccount'

const Template: Story = () => {
  return (
    <>
      <GlobalNav withAppNavi={false} />
      <SelectCompanyAccount />
    </>
  )
}

export const Default = Template.bind({})
Default.storyName = '基本'

export default {
  title: '企業アカウント選択',
  component: SelectCompanyAccount,
}
