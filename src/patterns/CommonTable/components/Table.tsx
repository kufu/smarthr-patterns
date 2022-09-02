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
}

export const Table: React.FC<Props> = (props) => {
  const { isInitialState, hasNoSearchResult } = props

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
          [...new Array(3)].map((_, i) => {
            return (
              <tr key={i}>
                <Td>
                  <CheckBox />
                </Td>
                <Td>
                  <StatusLabel>ステータス</StatusLabel>
                </Td>
                <Td>{`オブジェクト${i + 1}`}</Td>
                <Td>{i + 1}</Td>
                <Td>{`2021-01-0${i + 1}`}</Td>
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
            )
          })
        )}
      </tbody>
    </ShrTable>
  )
}

const CheckBoxTh = styled(Th)`
  width: 16px;
`

const EmptyCell = styled(Td)`
  text-align: center;
  ${({ theme: { space } }) => css`
    padding: ${space(4)};
  `}
`
