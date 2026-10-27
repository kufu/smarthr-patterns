import { ControlledActionDialog, Stack } from 'smarthr-ui'

type Props = {
  isOpen: boolean
  handleAction: () => void
  handleClose: () => void
}

export const DeleteDialog: React.FC<Props> = ({ isOpen, handleAction, handleClose }) => (
  <ControlledActionDialog
    isOpen={isOpen}
    heading="{オブジェクト名}を削除しますか？"
    actionButton={{ text: '削除', theme: 'danger' }}
    onClickAction={handleAction}
    onClickClose={handleClose}
  >
    <Stack>
      <p>【{'{オブジェクトのインスタンス名}'}】を削除します。</p>
    </Stack>
  </ControlledActionDialog>
)

export const DeleteWithInfluenceDialog: React.FC<Props> = ({ isOpen, handleAction, handleClose }) => (
  <ControlledActionDialog
    isOpen={isOpen}
    heading="{オブジェクト名}を削除しますか？"
    actionButton={{ text: '削除', theme: 'danger' }}
    onClickAction={handleAction}
    onClickClose={handleClose}
  >
    <Stack>
      <p>
        【{'{オブジェクトのインスタンス名}'}】を削除します。
        <br />
        {'{関連するオブジェクト名など}'}に登録されているデータも削除されます。
        <br />
        {'{オブジェクトのインスタンス名}'}に含まれる{'{オブジェクト名}'}も削除されます。
        <br />
        削除した{'{オブジェクト名}'}は元に戻せません。
      </p>
      <p>{'{オブジェクト名}'}を削除しますか？</p>
    </Stack>
  </ControlledActionDialog>
)

export const CancelDialog: React.FC<Props> = ({ isOpen, handleAction, handleClose }) => (
  <ControlledActionDialog
    isOpen={isOpen}
    heading="{操作名}を取り消しますか？"
    actionButton={{ text: '取り消し', theme: 'danger' }}
    onClickAction={handleAction}
    onClickClose={handleClose}
  >
    <Stack>
      <p>
        {'{操作名}'}を取り消します。
        <br />
        「取り消し」を押すと変更内容が破棄されます。
      </p>
    </Stack>
  </ControlledActionDialog>
)
