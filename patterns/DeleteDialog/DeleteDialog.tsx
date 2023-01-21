import styled, { css } from 'styled-components'
import { ActionDialog, Stack, Text } from 'smarthr-ui'

type Props = {
  isOpen: boolean
  handleAction: () => void
  handleClose: () => void
}

const Wrapper = styled(Stack)`
  ${({ theme: { space } }) => css`
    padding: ${space(1.5)};
  `}
`

export const DeleteDialog: React.FC<Props> = ({ isOpen, handleAction, handleClose }) => (
  <ActionDialog
    isOpen={isOpen}
    title="{オブジェクト名}を削除しますか？"
    actionText="削除"
    actionTheme="danger"
    onClickAction={handleAction}
    onClickClose={handleClose}
  >
    <Wrapper>
      <Text as="p">【{'{オブジェクトのインスタンス名}'}】を削除します。</Text>
    </Wrapper>
  </ActionDialog>
)

export const DeleteWithInfluenceDialog: React.FC<Props> = ({ isOpen, handleAction, handleClose }) => (
  <ActionDialog
    isOpen={isOpen}
    title="{オブジェクト名}を削除しますか？"
    actionText="削除"
    actionTheme="danger"
    onClickAction={handleAction}
    onClickClose={handleClose}
  >
    <Wrapper>
      <Text as="p">
        【{'{オブジェクトのインスタンス名}'}】を削除します。
        <br />
        {'{関連するオブジェクト名など}'}に登録されているデータも削除されます。
        <br />
        {'{オブジェクトのインスタンス名}'}に含まれる{'{オブジェクト名}'}も削除されます。
        <br />
        削除した{'{オブジェクト名}'}は元に戻せません。
      </Text>
      <Text as="p">{'{オブジェクト名}'}を削除しますか？</Text>
    </Wrapper>
  </ActionDialog>
)

export const CancelDialog: React.FC<Props> = ({ isOpen, handleAction, handleClose }) => (
  <ActionDialog
    isOpen={isOpen}
    title="{操作名}を取り消しますか？"
    actionText="取り消し"
    actionTheme="danger"
    onClickAction={handleAction}
    onClickClose={handleClose}
  >
    <Wrapper>
      <Text as="p">
        {'{操作名}'}を取り消します。
        <br />
        「取り消し」を押すと変更内容が破棄されます。
      </Text>
    </Wrapper>
  </ActionDialog>
)
