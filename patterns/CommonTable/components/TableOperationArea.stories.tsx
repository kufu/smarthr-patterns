import { TableOperationArea } from '.'

import type { StoryFn } from '@storybook/react'
import type { ComponentProps } from 'react'


const Template: StoryFn<ComponentProps<typeof TableOperationArea>> = (props) => <TableOperationArea {...props} />

export const Default = Template.bind({})
Default.storyName = '基本'
Default.args = {
  isInitialState: false,
}

export const IsInitialState = Template.bind({})
IsInitialState.storyName = '初期状態'
IsInitialState.args = {
  isInitialState: true,
}

export default {
  title: 'よくあるテーブル/テーブル操作エリア',
}
