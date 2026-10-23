import { TitleArea } from '.'

import type { StoryFn } from '@storybook/react'
import type { ComponentProps } from 'react'


const Template: StoryFn<ComponentProps<typeof TitleArea>> = (props) => <TitleArea {...props} />

export const Default = Template.bind({})
Default.storyName = '基本'
Default.args = {
  title: 'よくあるテーブルのタイトル',
  description:
    'よくあるテーブルの説明テキストです。よくあるテーブルの説明テキストです。よくあるテーブルの説明テキストです。よくあるテーブルの説明テキストです。よくあるテーブルの説明テキストです。',
}

export default {
  title: 'よくあるテーブル/タイトルエリア',
}
