import { Button, Cluster, DropdownButton, FaArrowsAltVIcon, FaPlusCircleIcon } from 'smarthr-ui'

type Props = {
  className?: string
  isInitialState: boolean
}

export const TableOperationArea: React.FC<Props> = (props) => {
  const { className, isInitialState } = props

  return (
    <Cluster className={className} gap={0.5}>
      {!isInitialState && <Button prefix={<FaArrowsAltVIcon />}>並べ替え</Button>}
      <DropdownButton label="一括操作">
        <Button>オブジェクトの一括追加（CSV）</Button>
        {!isInitialState && <Button>オブジェクトの一括更新（CSV）</Button>}
      </DropdownButton>
      <Button prefix={<FaPlusCircleIcon />}>オブジェクトを追加</Button>
    </Cluster>
  )
}
