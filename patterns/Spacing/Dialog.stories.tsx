import { SpacingDialog } from './Dialog'

import type { StoryFn } from '@storybook/react'
import type { ComponentProps } from 'react'


export default {
  title: '余白の取り方/ダイアログ',
  docs: {
    inlineStories: false,
  },
}

const Template: StoryFn<ComponentProps<typeof SpacingDialog>> = (props) => <SpacingDialog {...props} />

export const Default = Template.bind({})
Default.args = {
  withInformationPanel: true,
  numberOfBlocks: 2,
}
