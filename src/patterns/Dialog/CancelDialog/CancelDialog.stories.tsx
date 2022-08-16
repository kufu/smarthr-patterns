import { Story } from '@storybook/react'
import { useState } from 'react'
import { ActionDialog, Text } from 'smarthr-ui'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  ${({ theme: { space } }) => css`
    padding: ${space(1.5)};
  `}
`

const Template: Story = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <ActionDialog
      isOpen={isOpen}
      title="{操作名}を取り消しますか？"
      actionText="取り消し"
      actionTheme="danger"
      onClickAction={() => ({})}
      onClickClose={() => setIsOpen(false)}
      onClickOverlay={() => setIsOpen(false)}
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

export const Default = Template.bind({})
Default.storyName = '基本'

export default {
  title: 'ダイアログ/取り消しダイアログ',
  parameters: {
    docs: {
      // false にしないと、docs全体にダイアログがかかってしまう
      inlineStories: false,
    },
  },
}
