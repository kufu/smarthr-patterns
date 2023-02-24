import React from 'react'
import {
  Button,
  Cluster,
  EmptyTableBody,
  FaCopyIcon,
  FaPenIcon,
  FaPlusCircleIcon,
  FaTrashIcon,
  Table as ShrTable,
  Stack,
  StatusLabel,
  Td,
  TdCheckbox,
  Text,
  Th,
  ThCheckbox,
} from 'smarthr-ui'

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
        <tr>
          <ThCheckbox name="allRowCheckbox" disabled={isInitialState || hasNoSearchResult} />
          <Th>ステータス</Th>
          <Th>オブジェクト名</Th>
          <Th>オブジェクトの情報</Th>
          <Th>オブジェクトの情報</Th>
          <Th>操作</Th>
        </tr>
      </thead>
      {isInitialState ? (
        <EmptyTableBody>
          <Stack align="center">
            <Text>オブジェクトはまだ登録されていません。</Text>
            <div>
              <Button size="s" prefix={<FaPlusCircleIcon />}>
                項目を追加
              </Button>
            </div>
          </Stack>
        </EmptyTableBody>
      ) : hasNoSearchResult ? (
        <EmptyTableBody>
          <Text as="p">
            <Text>お探しの条件にに該当するオブジェクトはありません。</Text>
            <br />
            <Text>別の条件をお試しください。</Text>
          </Text>
        </EmptyTableBody>
      ) : (
        <tbody>
          {sampleObjects.map(({ id, status, name, info1, info2 }) => (
            <tr key={id}>
              <TdCheckbox name={`table-checkbox`} aria-labelledby={`name-${id}`} />
              <Td>
                <StatusLabel>{status}</StatusLabel>
              </Td>
              <Td id={`name-${id}`}>{name}</Td>
              <Td>{info1}</Td>
              <Td>{info2}</Td>
              <Td>
                <Cluster>
                  <Button size="s" prefix={<FaPenIcon />}>
                    操作1
                  </Button>
                  <Button size="s" prefix={<FaCopyIcon />}>
                    操作2
                  </Button>
                  <Button size="s" prefix={<FaTrashIcon />}>
                    操作3
                  </Button>
                </Cluster>
              </Td>
            </tr>
          ))}
        </tbody>
      )}
    </ShrTable>
  )
}
