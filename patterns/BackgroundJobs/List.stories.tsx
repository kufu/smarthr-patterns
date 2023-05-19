import { GlobalNav } from '@global'
import { action } from '@storybook/addon-actions'
import { StoryFn } from '@storybook/react'
import dayjs from 'dayjs'
import { Base, Center, Heading, Pagination, Stack, StatusLabel, Table, Text, TextLink, Th, Td as shrTd } from 'smarthr-ui'
import styled, { css } from 'styled-components'

import { backgroundJobsData } from './data'

const Template: StoryFn = () => {
  return (
    <>
      <GlobalNav current="バックグラウンド処理" />
      <Container>
        <Stack>
          <Heading>バックグラウンド処理</Heading>
          <Base overflow="auto">
            <Table>
              <thead>
                <tr>
                  <ThStatus>ステータス</ThStatus>
                  <Th>処理名</Th>
                  <ThDatetime sort="desc">受付日時</ThDatetime>
                  <Th>結果概要</Th>
                </tr>
              </thead>
              <tbody>
                {backgroundJobsData.map(({ status, name, uri, datetime, results }, i) => {
                  const resultsArr = Array.isArray(results) ? results : [results]
                  return (
                    <tr key={i}>
                      <Td>
                        <StatusLabel type={status.type}>{status.label}</StatusLabel>
                      </Td>
                      <Td>
                        <TextLink href={uri}>{name}</TextLink>
                      </Td>
                      <Td>
                        <Text whiteSpace="nowrap">{dayjs(datetime).format('YYYY/MM/DD hh:mm')}</Text>
                      </Td>
                      <Td>
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
      </Container>
    </>
  )
}

export const 一覧 = { render: Template }

export default {
  title: 'バックグラウンド処理',
}

const Container = styled(Center).attrs({ maxWidth: '75em' })`
  ${({ theme: { space } }) => css`
    /* FIXME: props で SeparateGap を指定できるようにしたい */
    padding: ${space(2)} ${space(1.5)};
    width: calc(100% - ${space(1.5)} * 2);

    > div {
      align-self: stretch;
    }
  `}
`

const ThStatus = styled(Th)`
  width: 1em;
`

const ThDatetime = styled(Th)`
  width: 1em;
`

const Td = styled(shrTd)`
  vertical-align: baseline;
`
