import React, { ComponentProps } from 'react'
import { Base, Center, Cluster, Pagination, Stack } from 'smarthr-ui'

import { Table, TableOperationArea, TemporaryOperationArea, TitleArea } from './components'

type Props = {
  title: string
  description: string
  searchValue: string
  pagination: { totalPages: number; currentPage: number; totalCount: number; limitValue: number }
  sampleObjects: ComponentProps<typeof Table>['sampleObjects']
}

export const CommonTable: React.FC<Props> = (props) => {
  const { title, description, searchValue, pagination, sampleObjects } = props
  const { totalPages, currentPage, totalCount } = pagination

  const TitleAreaWrapper: React.FC<React.PropsWithChildren> = ({ children }) =>
    description ? <> {children} </> : <Cluster align="center">{children}</Cluster>

  const isInitialState = searchValue === '' && totalCount === 0
  const hasNoSearchResult = searchValue !== '' && totalCount === 0

  return (
    <Stack gap={1}>
      <TitleAreaWrapper>
        <TitleArea title={title} description={description} />
        <TableOperationArea isInitialState={isInitialState} className="shr-ms-auto" />
      </TitleAreaWrapper>
      <Stack gap={1.5}>
        <Base overflow="auto">
          {!isInitialState && <TemporaryOperationArea pagination={pagination} searchValue={searchValue} />}
          <Table isInitialState={isInitialState} hasNoSearchResult={hasNoSearchResult} sampleObjects={sampleObjects} />
        </Base>
        {totalPages > 1 && !isInitialState && !hasNoSearchResult && (
          <Center>
            <Pagination current={currentPage} total={totalPages} onClick={() => null} />
          </Center>
        )}
      </Stack>
    </Stack>
  )
}
