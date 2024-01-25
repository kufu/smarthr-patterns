import { GlobalNav } from '@global'
import { action } from '@storybook/addon-actions'
import { hrefTo } from '@storybook/addon-links'
import { StoryFn } from '@storybook/react'
import dayjs from 'dayjs'
import { Base, Center, PageHeading, Pagination, Stack, StatusLabel, Table, Td, Text, TextLink, Th } from 'smarthr-ui'

import { backgroundJobsData } from './data'

const Template: StoryFn = (_, { loaded: { detailProcessUri, detailSuccessUri, detailPartFailUri, detailFailUri } }) => {
  const data = backgroundJobsData.map((item) => {
    switch (item.status.label) {
      case '処理中':
        return { ...item, uri: detailProcessUri }
      case '成功':
        return { ...item, uri: detailSuccessUri }
      case '一部失敗':
        return { ...item, uri: detailPartFailUri }
      case '失敗':
        return { ...item, uri: detailFailUri }
      default:
        return item
    }
  })
  return (
    <>
      <GlobalNav current="バックグラウンド処理" />
      <Center maxWidth="75em" className="shr-px-1.5 shr-py-2 shr-w-[calc(100%_-_theme(spacing[1.5])_*_2)]">
        <Stack className="shr-self-stretch">
          <PageHeading>バックグラウンド処理</PageHeading>
          <Base overflow="auto">
            <Table>
              <thead>
                <tr>
                  <Th className="shr-w-em">ステータス</Th>
                  <Th>処理名</Th>
                  <Th sort="desc" className="shr-w-em">
                    受付日時
                  </Th>
                  <Th>結果概要</Th>
                </tr>
              </thead>
              <tbody>
                {data.map(({ status, name, uri, datetime, results }, i) => {
                  const resultsArr = Array.isArray(results) ? results : [results]
                  return (
                    <tr key={i}>
                      <Td className="shr-align-baseline">
                        <StatusLabel type={status.type}>{status.label}</StatusLabel>
                      </Td>
                      <Td className="shr-align-baseline">
                        <TextLink href={uri}>{name}</TextLink>
                      </Td>
                      <Td className="shr-align-baseline">
                        <Text whiteSpace="nowrap">{dayjs(datetime).format('YYYY/MM/DD hh:mm')}</Text>
                      </Td>
                      <Td className="shr-align-baseline">
                        {resultsArr.map((result, j) => (
                          <p key={j}>{result}</p>
                        ))}
                      </Td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Base>
          <Center>
            <Pagination current={1} total={10} onClick={action('click')} />
          </Center>
        </Stack>
      </Center>
    </>
  )
}

export const 一覧 = {
  render: Template,
  loaders: [
    async () => ({
      detailProcessUri: await hrefTo('バックグラウンド処理/詳細', '処理中'),
      detailSuccessUri: await hrefTo('バックグラウンド処理/詳細', '成功'),
      detailPartFailUri: await hrefTo('バックグラウンド処理/詳細', '一部失敗'),
      detailFailUri: await hrefTo('バックグラウンド処理/詳細', '失敗'),
    }),
  ],
}

export default {
  title: 'バックグラウンド処理',
}
