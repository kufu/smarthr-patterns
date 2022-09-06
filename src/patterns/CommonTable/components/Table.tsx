import React from 'react'
import {
  Button,
  CheckBox,
  Cluster,
  FaCopyIcon,
  FaPenIcon,
  FaPlusCircleIcon,
  FaTrashIcon,
  Table as ShrTable,
  Stack,
  StatusLabel,
  Td,
  Text,
  Th,
} from 'smarthr-ui'
import styled, { css } from 'styled-components'

type Props = {
  isInitialState: boolean
  hasNoSearchResult: boolean
  sampleObjects: Array<{
    id: string
    status: string
    name: string
    info1: string
    info2: string
  }>
}

export const Table: React.FC<Props> = (props) => {
  const { isInitialState, hasNoSearchResult, sampleObjects } = props

  return (
    <ShrTable>
      <thead>
        <CheckBoxTh>{!isInitialState && !hasNoSearchResult && <CheckBox />}</CheckBoxTh>
        <Th>ステータス</Th>
        <Th>オブジェクト名</Th>
        <Th>オブジェクトの情報</Th>
        <Th>オブジェクトの情報</Th>
        <Th>操作</Th>
      </thead>
      <tbody>
        {isInitialState ? (
          <tr>
            <EmptyCell colSpan={6}>
              <Stack>
                <Text>オブジェクトはまだ登録されていません。</Text>
                <div>
                  <Button variant="secondary" size="s" prefix={<FaPlusCircleIcon />}>
                    項目を追加
                  </Button>
                </div>
              </Stack>
            </EmptyCell>
          </tr>
        ) : hasNoSearchResult ? (
          <tr>
            <EmptyCell colSpan={6}>
              <Text as="p">
                <Text>お探しの条件にに該当するオブジェクトはありません。</Text>
                <br />
                <Text>別の条件をお試しください。</Text>
              </Text>
            </EmptyCell>
          </tr>
        ) : (
          sampleObjects.map(({ id, status, name, info1, info2 }) => (
            <tr key={id}>
              <Td>
                <CheckBox />
              </Td>
              <Td>
                <StatusLabel>{status}</StatusLabel>
              </Td>
              <Td>{name}</Td>
              <Td>{info1}</Td>
              <Td>{info2}</Td>
              <Td>
                <Cluster>
                  <Button variant="secondary" size="s" prefix={<FaPenIcon />}>
                    操作1
                  </Button>
                  <Button variant="secondary" size="s" prefix={<FaCopyIcon />}>
                    操作2
                  </Button>
                  <Button variant="secondary" size="s" prefix={<FaTrashIcon />}>
                    操作3
                  </Button>
                </Cluster>
              </Td>
            </tr>
          ))
        )}
      </tbody>
    </ShrTable>
  )
}

const CheckBoxTh = styled(Th)`
  // TODO: smarthr-ui 側でチェックボックス用の Th を指定できるようにする
  width: 16px;
`

const EmptyCell = styled(Td)`
  text-align: center;
  ${({ theme: { space } }) => css`
    padding: ${space(4)};
  `}
`
