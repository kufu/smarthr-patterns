import React, { ComponentProps } from 'react'
import { Base, Cluster, Pagination, Stack } from 'smarthr-ui'
import styled from 'styled-components'
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
    description ? <>{children}</> : <Cluster align="center">{children}</Cluster>

  const isInitialState = searchValue === '' && totalCount === 0
  const hasNoSearchResult = searchValue !== '' && totalCount === 0

  return (
    <Stack gap={1}>
      <TitleAreaWrapper>
        <TitleArea title={title} description={description} />
        <StyledTableOperationArea isInitialState={isInitialState} />
      </TitleAreaWrapper>
      <Stack gap={1.5}>
        <Base>
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

const Center = styled.div`
  display: flex;
  justify-content: center;
`

const StyledTableOperationArea = styled(TableOperationArea)`
  margin-left: auto;
`
