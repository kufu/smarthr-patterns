import { ComponentProps } from 'react'
import { StatusLabel } from 'smarthr-ui'

type StatusLabelType = ComponentProps<typeof StatusLabel>
type BackgroundJobsData = Array<{
  status: {
    type: StatusLabelType['type']
    label: StatusLabelType['children']
  }
  name: string
  uri: string
  datetime: string
  results: string | string[]
}>

export const backgroundJobsData: BackgroundJobsData = [
  {
    status: {
      type: 'blue',
      label: '処理中',
    },
    name: '評価の削除',
    uri: 'https://example.com',
    datetime: '2023-05-18 05:50:13',
    results: '',
  },
  {
    status: {
      type: 'grey',
      label: '成功',
    },
    name: '従業員の一括招待',
    uri: 'https://example.com',
    datetime: '2023-05-18 05:50:13',
    results: '2名の従業員を招待しました。',
  },
  {
    status: {
      type: 'warning',
      label: '一部失敗',
    },
    name: '従業員情報のダウンロード',
    uri: 'https://example.com',
    datetime: '2023-05-18 05:50:13',
    results: ['5件の従業員情報のダウンロードに成功しました。', '2件の従業員情報のダウンロードに失敗しました。'],
  },
  {
    status: {
      type: 'error',
      label: '失敗',
    },
    name: '評価の削除',
    uri: 'https://example.com',
    datetime: '2023-05-18 05:50:13',
    results: '8件の評価の削除に失敗しました。',
  },
  ...Array.from({ length: 11 }, () => ({
    status: {
      type: 'grey' as StatusLabelType['type'],
      label: '成功',
    },
    name: '{オブジェクト}の{処理}',
    uri: 'https://example.com',
    datetime: '2023-05-17 21:50:13',
    results: '{n}件の{オブジェクト}を{処理}しました。',
  })),
]
