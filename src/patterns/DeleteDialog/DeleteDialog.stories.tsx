import { Story } from '@storybook/react'
import { useState } from 'react'
import { ActionDialog, Stack, Text } from 'smarthr-ui'
import styled, { css } from 'styled-components'

const Wrapper = styled(Stack)`
  ${({ theme: { space } }) => css`
    padding: ${space(1.5)};
  `}
`

type DialogProps = {
  isOpen: boolean
  handleAction: () => void
  handleClose: () => void
}

const DeleteDialog: React.FC<DialogProps> = ({ isOpen, handleAction, handleClose }) => {
  return (
    <ActionDialog
      isOpen={isOpen}
      title="{オブジェクト名}を削除しますか？"
      actionText="削除"
      actionTheme="danger"
      onClickAction={handleAction}
      onClickClose={handleClose}
      onClickOverlay={handleClose}
    >
      <Wrapper>
        <Text as="p">【{'{オブジェクトのインスタンス名}'}】を削除します。</Text>
      </Wrapper>
    </ActionDialog>
  )
}

const DeleteWithInfluenceDialog: React.FC<DialogProps> = ({ isOpen, handleAction, handleClose }) => {
  return (
    <ActionDialog
      isOpen={isOpen}
      title="{オブジェクト名}を削除しますか？"
      actionText="削除"
      actionTheme="danger"
      onClickAction={handleAction}
      onClickClose={handleClose}
      onClickOverlay={handleClose}
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
}

const CancelDialog: React.FC<DialogProps> = ({ isOpen, handleAction, handleClose }) => {
  return (
    <ActionDialog
      isOpen={isOpen}
      title="{操作名}を取り消しますか？"
      actionText="取り消し"
      actionTheme="danger"
      onClickAction={handleAction}
      onClickClose={handleClose}
      onClickOverlay={handleClose}
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
}

type StoryProps = {
  withInfluence?: boolean
  cancel?: boolean
}

const Template: Story<StoryProps> = ({ withInfluence, cancel }) => {
  const [isOpen, setIsOpen] = useState(true)
  const handleClose = () => setIsOpen(false)
  const handleAction = () => null

  if (withInfluence) return <DeleteWithInfluenceDialog isOpen={isOpen} handleAction={handleAction} handleClose={handleClose} />
  if (cancel) return <CancelDialog isOpen={isOpen} handleAction={handleAction} handleClose={handleClose} />
  return <DeleteDialog isOpen={isOpen} handleAction={handleAction} handleClose={handleClose} />
}

export const Default = Template.bind({})
Default.storyName = '基本'

export const WithInfluence = Template.bind({})
WithInfluence.args = { withInfluence: true }
WithInfluence.storyName = '影響範囲がある場合'

export const Cancel = Template.bind({})
Cancel.args = { cancel: true }
Cancel.storyName = '取り消しダイアログ'

export default {
  title: '削除ダイアログ',
  parameters: {
    docs: {
      // false にしないと、docs全体にダイアログがかかってしまう
      inlineStories: false,
    },
  },
}
