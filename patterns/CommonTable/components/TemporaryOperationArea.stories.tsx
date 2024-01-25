import { StoryFn } from '@storybook/react'
import { ComponentProps } from 'react'

import { TemporaryOperationArea } from '.'

const Template: StoryFn<ComponentProps<typeof TemporaryOperationArea>> = (props) => <TemporaryOperationArea {...props} />

export const Default = Template.bind({})
Default.storyName = '基本'
Default.args = {
  pagination: {
    currentPage: 1,
    limitValue: 25,
    totalCount: 100,
    totalPages: 4,
  },
  searchValue: '',
}

export const NoSearchResult = Template.bind({})
NoSearchResult.storyName = '検索結果なし'
NoSearchResult.args = {
  ...Default.args,
  pagination: {
    currentPage: 0,
    limitValue: 0,
    totalCount: 0,
    totalPages: 0,
  },
  searchValue: 'あああ',
}

export default {
  title: 'よくあるテーブル/一時操作エリア',
}
