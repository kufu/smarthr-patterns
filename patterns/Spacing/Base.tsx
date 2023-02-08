import { Base, Heading, InformationPanel, Stack, Text } from 'smarthr-ui'
import styled, { css } from 'styled-components'

type Props = {
  withInformationPanel: boolean
}

export const SpacingBase: React.FC<Props> = ({ withInformationPanel }) => (
  <Container>
    <Stack gap={2}>
      <Stack gap={1.5}>
        <Stack>
          <Heading>画面見出し</Heading>
          <Text as="p">
            これは本文です。以下はダミーテキストです。エンゲージメントサーベイに紐付いている質問タグをスコアで分析する際の見方は以下のとおりです。
          </Text>
        </Stack>
        {withInformationPanel && (
          <InformationPanel title="インフォメーションパネルタイトル" togglable={false}>
            <Text as="p">
              注意を引きたいメッセージ。以下はダミーテキストです。
              カスタムマスター項目を一括で追加・更新するにはCSVファイルを取り込みます。
            </Text>
          </InformationPanel>
        )}
      </Stack>
      <Stack>
        <Heading type="sectionTitle" tag="h2">
          セクション見出し
        </Heading>
        <Base padding={1.5}>
          <Stack gap={1.5}>
            <Stack>
              <Heading type="blockTitle" tag="h3">
                ブロック見出し
              </Heading>
              <Text as="p">
                ブロックの本文。以下はダミーテキストです。ダウンロード項目を連携先のフォーマットに変換する設定です。「項目を追加」から連携先項目を登録できます。連携先項目名を登録の上、対応するSmartHRの項目や変換方法を設定してください。
              </Text>
            </Stack>
            <Stack>
              <Heading type="subBlockTitle" tag="h4">
                子ブロック見出し
              </Heading>
              <Text as="p">
                子ブロックの本文。以下はダミーテキストです。ダウンロード項目を連携先のフォーマットに変換する設定です。「項目を追加」から連携先項目を登録できます。連携先項目名を登録の上、対応するSmartHRの項目や変換方法を設定してください。
              </Text>
            </Stack>
            <Stack>
              <Heading type="subSubBlockTitle" tag="h5">
                孫ブロック見出し
              </Heading>
              <Text as="p">
                孫ブロックの本文。以下はダミーテキストです。ダウンロード項目を連携先のフォーマットに変換する設定です。「項目を追加」から連携先項目を登録できます。連携先項目名を登録の上、対応するSmartHRの項目や変換方法を設定してください。
              </Text>
            </Stack>
          </Stack>
        </Base>
      </Stack>
    </Stack>
  </Container>
)

const Container = styled(Stack).attrs({ gap: 1.5 })`
  ${({ theme: { space } }) => css`
    margin-inline: auto;
    padding: ${space(2)} ${space(1.5)};
    max-width: 80em;
  `}
`
