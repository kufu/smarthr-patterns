import { Button, Cluster, DropdownMenuButton, FaCirclePlusIcon, FaUpDownIcon } from 'smarthr-ui'

type Props = {
  className?: string
  isInitialState: boolean
}

export const TableOperationArea: React.FC<Props> = (props) => {
  const { className, isInitialState } = props

  return (
    <Cluster className={className}>
      {!isInitialState && <Button prefix={<FaUpDownIcon />}>並べ替え</Button>}
      <DropdownMenuButton trigger="一括操作">
        <Button>オブジェクトの一括追加（CSV）</Button>
        {!isInitialState && <Button>オブジェクトの一括更新（CSV）</Button>}
      </DropdownMenuButton>
      <Button prefix={<FaCirclePlusIcon />}>オブジェクトを追加</Button>
    </Cluster>
  )
}
