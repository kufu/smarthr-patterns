import { Story } from '@storybook/react'
import { useState } from 'react'
import { ActionDialog, Stack, Text } from 'smarthr-ui'
import styled, { css } from 'styled-components'

const Wrapper = styled(Stack)`
  ${({ theme: { space } }) => css`
    padding: ${space(1.5)};
  `}
`

type DeleteDialogProps = {
  objectName: string
  objectInstanceName: string
  relatedObjectName?: string
  childObjectName?: string
}

const Template: Story<DeleteDialogProps> = ({ objectName, objectInstanceName, relatedObjectName, childObjectName }) => {
  const [isOpen, setIsOpen] = useState(true)
  const handleClose = () => setIsOpen(false)

  const hasEffects = relatedObjectName || childObjectName

  return (
    <ActionDialog
      isOpen={isOpen}
      title={`${objectName}を削除しますか？`}
      actionText="削除"
      actionTheme="danger"
      onClickAction={() => ({})}
      onClickClose={handleClose}
      onClickOverlay={handleClose}
    >
      <Wrapper>
        <Text as="p">
          【{objectInstanceName}】を削除します。
          {relatedObjectName && (
            <>
              <br />
              {relatedObjectName}に登録されているデータも削除されます。
            </>
          )}
          {childObjectName && (
            <>
              <br />
              {objectInstanceName}に含まれる{childObjectName}も削除されます。
            </>
          )}
          {hasEffects && (
            <>
              <br />
              削除した{objectName}は元に戻せません。
            </>
          )}
        </Text>
        {hasEffects && <Text as="p">{objectName}を削除しますか？</Text>}
      </Wrapper>
    </ActionDialog>
  )
}

export const Default = Template.bind({})
Default.args = {
  objectName: '{オブジェクト名}',
  objectInstanceName: '{オブジェクトのインスタンス名}',
  relatedObjectName: '',
  childObjectName: '',
}
Default.storyName = '基本'

export const HasEffect = Template.bind({})
HasEffect.args = {
  ...Default.args,
  relatedObjectName: '{関連するオブジェクト名など}',
  childObjectName: '{オブジェクト名}',
}
HasEffect.storyName = '影響範囲がある場合'

type CancelDialogProps = {
  operationName: string
}

const CancelTemplate: Story<CancelDialogProps> = ({ operationName }) => {
  const [isOpen, setIsOpen] = useState(true)
  const handleClose = () => setIsOpen(false)
  return (
    <ActionDialog
      isOpen={isOpen}
      title={`${operationName}を取り消しますか？`}
      actionText="取り消し"
      actionTheme="danger"
      onClickAction={() => ({})}
      onClickClose={handleClose}
      onClickOverlay={handleClose}
    >
      <Wrapper>
        <Text as="p">
          {operationName}を取り消します。
          <br />
          「取り消し」を押すと変更内容が破棄されます。
        </Text>
      </Wrapper>
    </ActionDialog>
  )
}

export const Cancel = CancelTemplate.bind({})
Cancel.args = { operationName: '{操作名}' }
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
