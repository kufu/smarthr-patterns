import { Base, Heading, InformationPanel, PageHeading, Section, Stack } from 'smarthr-ui'

type Props = {
  withInformationPanel: boolean
}

export const SpacingBase: React.FC<Props> = ({ withInformationPanel }) => (
  <Stack gap={1.5} className="shr-mx-auto shr-py-2 shr-px-1.5 shr-max-w-[80em]">
    <Stack gap={2}>
      <Stack gap={1.5}>
        <Stack>
          <PageHeading>画面見出し</PageHeading>
          <p>
            これは本文です。以下はダミーテキストです。エンゲージメントサーベイに紐付いている質問タグをスコアで分析する際の見方は以下のとおりです。
          </p>
        </Stack>
        {withInformationPanel && (
          <InformationPanel heading="インフォメーションパネルタイトル" toggleable={false}>
            <p>
              注意を引きたいメッセージ。以下はダミーテキストです。
              カスタムマスター項目を一括で追加・更新するにはCSVファイルを取り込みます。
            </p>
          </InformationPanel>
        )}
      </Stack>
      <Stack as="section">
        <Heading>セクション見出し</Heading>
        <Section>
          <Base padding={1.5}>
            <Stack gap={1.5}>
              <Stack>
                <Heading type="blockTitle">ブロック見出し</Heading>
                <p>
                  ブロックの本文。以下はダミーテキストです。ダウンロード項目を連携先のフォーマットに変換する設定です。「項目を追加」から連携先項目を登録できます。連携先項目名を登録の上、対応するSmartHRの項目や変換方法を設定してください。
                </p>
              </Stack>
              <Stack gap={1.5} as="section">
                <Stack>
                  <Heading type="subBlockTitle">子ブロック見出し</Heading>
                  <p>
                    子ブロックの本文。以下はダミーテキストです。ダウンロード項目を連携先のフォーマットに変換する設定です。「項目を追加」から連携先項目を登録できます。連携先項目名を登録の上、対応するSmartHRの項目や変換方法を設定してください。
                  </p>
                </Stack>
                <Stack as="section">
                  <Heading type="subSubBlockTitle">孫ブロック見出し</Heading>
                  <p>
                    孫ブロックの本文。以下はダミーテキストです。ダウンロード項目を連携先のフォーマットに変換する設定です。「項目を追加」から連携先項目を登録できます。連携先項目名を登録の上、対応するSmartHRの項目や変換方法を設定してください。
                  </p>
                </Stack>
              </Stack>
            </Stack>
          </Base>
        </Section>
      </Stack>
    </Stack>
  </Stack>
)
