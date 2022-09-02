import { Story } from '@storybook/react'
import { ComponentProps } from 'react'

import { Table } from '.'

const Template: Story<ComponentProps<typeof Table>> = (props) => <Table {...props} />

export const Default = Template.bind({})
Default.storyName = '基本'
Default.args = {
  isInitialState: false,
  hasNoSearchResult: false,
}

export const InitialState = Template.bind({})
InitialState.storyName = '初期状態'
InitialState.args = {
  ...Default.args,
  isInitialState: true,
}

export const NoSearchResult = Template.bind({})
NoSearchResult.storyName = '検索結果なし'
NoSearchResult.args = {
  ...Default.args,
  hasNoSearchResult: true,
}

export default {
  title: 'よくあるテーブル/テーブル',
}
