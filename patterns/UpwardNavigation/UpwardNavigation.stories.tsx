import { GlobalNav } from '@global'
import { Story } from '@storybook/react'
import { ComponentProps } from 'react'

import { UpwardNavigation } from './UpwardNavigation'

const Template: Story<ComponentProps<typeof UpwardNavigation>> = ({ withAppNavi, ...props }) => (
  <>
    <GlobalNav withAppNavi={withAppNavi} />
    <UpwardNavigation {...props} withAppNavi={withAppNavi} />
  </>
)

export const Default = Template.bind({})
Default.args = {
  withAppNavi: true,
  withUpwardLink: true,
}
Default.storyName = '基本'

export const WithoutAppNavi = Template.bind({})
WithoutAppNavi.args = {
  withAppNavi: false,
  withUpwardLink: true,
}
WithoutAppNavi.storyName = 'AppNavi なし'

export const NoUpwardNav = Template.bind({})
NoUpwardNav.args = {
  withAppNavi: true,
  withUpwardLink: false,
}
NoUpwardNav.storyName = '上に戻るリンクなし'

export default {
  title: '上に戻るリンク',
}
