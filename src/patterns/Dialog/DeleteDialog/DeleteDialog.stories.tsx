import { Story } from '@storybook/react'
import { useState } from 'react'
import { ActionDialog, Stack, Text } from 'smarthr-ui'
import styled, { css } from 'styled-components'

const Wrapper = styled(Stack)`
  ${({ theme: { spacing } }) => css`
    padding: ${spacing.M};
  `}
`

type StoryProps = {
  hasEffect?: boolean
}

const Template: Story<StoryProps> = ({ hasEffect }) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
      <ActionDialog
        isOpen={isOpen}
        title="{オブジェクト名}を削除しますか？"
        actionText="削除"
        actionTheme="danger"
        onClickAction={() => ({})}
        onClickClose={() => setIsOpen(false)}
        onClickOverlay={() => setIsOpen(false)}
      >
        <Wrapper>
          <Text as="p">
            【{'{オブジェクトのインスタンス名}'}】を削除します。
            {hasEffect && (
              <>
                <br />
                {'{関連するオブジェクト名など}'}に登録されているデータも削除されます。
                <br />
                {'{選択したオブジェクトのインスタンス名}'}に含まれる{'{オブジェクト名}'}も削除されます。
                <br />
                削除した{'{オブジェクト名}'}は元に戻せません。
              </>
            )}
          </Text>
          {hasEffect && <Text as="p">{'{オブジェクト名}'}を削除しますか？</Text>}
        </Wrapper>
      </ActionDialog>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
Default.storyName = '基本'

export const HasEffect = Template.bind({})
HasEffect.args = { hasEffect: true }
HasEffect.storyName = '影響範囲がある場合'

export default {
  title: 'ダイアログ/削除ダイアログ',
  parameters: {
    docs: {
      // Opt-out of inline rendering
      inlineStories: false,
    },
  },
}
