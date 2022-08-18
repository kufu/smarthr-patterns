import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ActionDialog, Base, CheckBox, Cluster, CompactInformationPanel, Heading, Select, Stack, Text } from 'smarthr-ui'
import styled, { css } from 'styled-components'

const Wrapper = styled(Stack).attrs({ gap: 2 })`
  ${({ theme: { space } }) => css`
    padding: ${space(1.5)};
  `}
`

const Fieldset = styled(Stack).attrs({ gap: 0.5, as: 'fieldset' })``

const BaseColumn = styled.div`
  ${({ theme: { color, space } }) => css`
    background-color: ${color.COLUMN};
    padding: ${space(1)};
  `}
`

type StoryProps = {
  withInformationPanel: boolean
  numberOfBlocks: number
}

const Template: Story<StoryProps> = ({ withInformationPanel, numberOfBlocks }) => (
  <ActionDialog
    isOpen={true}
    title="ヒントメッセージの設定"
    actionText="申請"
    actionTheme="primary"
    onClickAction={action('clicked action')}
    onClickClose={action('clicked close')}
    onClickOverlay={action('clicked overlay')}
  >
    <Wrapper>
      {withInformationPanel && (
        <CompactInformationPanel type="warning">1行目を削除します。削除された行は元には戻せません。</CompactInformationPanel>
      )}
      <Text as="p">
        選択した評価を削除します。評価シートの入力内容や評価者設定などのデータも削除されます。削除された評価は元に戻せません。
      </Text>
      <Stack gap={1.5}>
        {[...Array(numberOfBlocks)].map((_, i) => (
          <Fieldset key={i}>
            <legend>
              <Heading type="blockTitle" tag="h3">
                進捗状況{i + 1}
              </Heading>
            </legend>
            <BaseColumn>
              <Cluster gap={{ column: 1.5, row: 1 }}>
                <CheckBox>系列</CheckBox>
                <CheckBox checked>タスク</CheckBox>
                <CheckBox checked>主たる事務所</CheckBox>
              </Cluster>
            </BaseColumn>
          </Fieldset>
        ))}
        <Fieldset>
          <legend>
            <Heading type="blockTitle" tag="h3">
              分析対象の従業員項目
            </Heading>
          </legend>
          <BaseColumn>
            <Stack align="flex-start">
              <Text as="p">
                ダウンロード項目を連携先のフォーマットに変換する設定です。「項目を追加」から連携先項目を登録できます。連携先項目名を登録の上、対応するSmartHRの項目や変換方法を設定してください。
              </Text>
              <Stack gap={0.5} as="label">
                <Heading type="subBlockTitle" tag="span">
                  被保険者氏名（ヨミ）
                </Heading>
                <Select options={[]} />
              </Stack>
            </Stack>
          </BaseColumn>
        </Fieldset>
      </Stack>
    </Wrapper>
  </ActionDialog>
)

export const Default = Template.bind({})
Default.args = {
  withInformationPanel: true,
  numberOfBlocks: 2,
}
