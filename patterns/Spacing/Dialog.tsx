import { action } from '@storybook/addon-actions'
import {
  ActionDialog,
  BaseColumn,
  CheckBox,
  Cluster,
  CompactInformationPanel,
  Fieldset,
  FormControl,
  Select,
  Stack,
  Text,
} from 'smarthr-ui'
import styled, { css } from 'styled-components'

type Props = {
  withInformationPanel: boolean
  numberOfBlocks: number
}

export const SpacingDialog: React.FC<Props> = ({ withInformationPanel, numberOfBlocks }) => (
  <ActionDialog
    isOpen={true}
    title="ヒントメッセージの設定"
    actionText="申請"
    actionTheme="primary"
    onClickAction={action('clicked action')}
    onClickClose={action('clicked close')}
    onClickOverlay={action('clicked overlay')}
    width="50em"
  >
    <Stack gap={2} className="shr-p-1.5">
      {withInformationPanel && (
        <CompactInformationPanel type="warning">1行目を削除します。削除された行は元には戻せません。</CompactInformationPanel>
      )}
      <Text as="p">
        選択した評価を削除します。評価シートの入力内容や評価者設定などのデータも削除されます。削除された評価は元に戻せません。
      </Text>
      <Stack gap={1.5}>
        {[...Array(numberOfBlocks).fill(0)].map((_, i) => (
          <Fieldset title={`進捗状況${i + 1}`} key={i} innerMargin={0.5}>
            <BaseColumn padding={1}>
              <Cluster gap={{ column: 1.5, row: 1 }}>
                <CheckBox>系列</CheckBox>
                <CheckBox checked>タスク</CheckBox>
                <CheckBox checked>主たる事務所</CheckBox>
              </Cluster>
            </BaseColumn>
          </Fieldset>
        ))}
        <Fieldset title="分析対象の従業員項目" innerMargin={0.5}>
          <BaseColumn padding={1}>
            <Stack align="flex-start">
              <Text as="p">
                ダウンロード項目を連携先のフォーマットに変換する設定です。「項目を追加」から連携先項目を登録できます。連携先項目名を登録の上、対応するSmartHRの項目や変換方法を設定してください。
              </Text>
              <FormControl title="被保険者氏名（ヨミ）" titleType="subBlockTitle">
                <Select options={[]} width="10em" />
              </FormControl>
            </Stack>
          </BaseColumn>
        </Fieldset>
      </Stack>
    </Stack>
  </ActionDialog>
)
