import { Story } from '@storybook/react'
import { ComponentProps } from 'react'

import { SpacingDialog } from './Dialog'

export default {
  title: '余白の取り方/ダイアログ',
  docs: {
    inlineStories: false,
  },
}

const Template: Story<ComponentProps<typeof SpacingDialog>> = (props) => <SpacingDialog {...props} />

export const Default = Template.bind({})
Default.args = {
  withInformationPanel: true,
  numberOfBlocks: 2,
}
