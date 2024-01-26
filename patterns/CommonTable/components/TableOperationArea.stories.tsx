import { StoryFn } from '@storybook/react'
import { ComponentProps } from 'react'

import { TableOperationArea } from '.'

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
