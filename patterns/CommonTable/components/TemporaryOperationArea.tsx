import { Button, Cluster, FaCloudDownloadAltIcon, FilterDropdown, PageCounter, Pagination, SearchInput } from 'smarthr-ui'

type Props = {
  searchValue: string
  pagination: { totalPages: number; currentPage: number; totalCount: number; limitValue: number }
}

export const TemporaryOperationArea: React.FC<Props> = (props) => {
  const {
    searchValue,
    pagination: { totalPages, currentPage, totalCount, limitValue },
  } = props

  return (
    <Cluster justify="space-between" align="center" className="shr-p-1">
      <form role="search" onSubmit={(e) => e.preventDefault()}>
        <Cluster align="center" gap={1}>
          <Cluster gap={0.5}>
            <SearchInput tooltipMessage="オブジェクト名で検索できます。" value={searchValue} name="search" />
            <Button type="submit">検索</Button>
          </Cluster>
          <FilterDropdown onApply={() => null}>絞り込みの中身</FilterDropdown>
          <Button type="submit" prefix={<FaCloudDownloadAltIcon />}>
            ダウンロード
          </Button>
        </Cluster>
      </form>
      {totalCount > 0 && (
        <Cluster gap={1} align="center">
          <PageCounter start={1 + (currentPage - 1) * limitValue} end={currentPage * limitValue} total={totalCount} />
          <Pagination current={currentPage} total={totalPages} withoutNumbers onClick={() => null} />
        </Cluster>
      )}
    </Cluster>
  )
}
