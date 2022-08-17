import styled, { css } from 'styled-components'
import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  Button,
  CheckBox,
  Cluster,
  DatePicker,
  DropdownButton,
  FaArrowLeftIcon,
  FaExclamationCircleIcon,
  Heading,
  InformationPanel,
  Input,
  Stack,
  StatusLabel,
  TabBar,
  TabItem,
  Text,
  TextLink,
  Base as shrBase,
} from 'smarthr-ui'

// TODO 共通のやつは置き方や使い方を考えたい
import { GlobalNav } from '../../GlobalNav/GlobalNav'
import { UpwardLinkWrapper } from '@patterns/UpwardNavigation'

type StoryProps = {
  withInformationPanel: boolean
  withUpwardNavigation: boolean
}

const Template: Story<StoryProps> = ({ withInformationPanel, withUpwardNavigation }) => (
  <>
    <GlobalNav />
    <Container>
      {withUpwardNavigation && (
        <UpwardLinkWrapper>
          <TextLink href="#" prefix={<FaArrowLeftIcon />}>
            分析レポートに戻る
          </TextLink>
        </UpwardLinkWrapper>
      )}
      <Main>
        <Stack gap={1.5}>
          <HeadArea>
            <TitleArea>
              <Cluster align="center">
                <StatusLabel>連帯債務</StatusLabel>
                <Heading>雇入れ又は離職に係る事業所</Heading>
              </Cluster>
              <DropdownButton>
                <Button>列の表示項目設定</Button>
              </DropdownButton>
            </TitleArea>
            <Text as="p">
              エンゲージメントサーベイに紐付いている質問タグをスコアで分析する際の見方は以下のとおりです。
              <br />
              評価テンプレートとタスクを選択して「変更」を押してください。変更先のタスク担当者に通知されます。
            </Text>
          </HeadArea>
          {withInformationPanel && (
            <InformationPanel title="CSVファイルに項目コードと項目名の両方が必須です" togglable={false}>
              <Stack align="flex-start">
                <Text as="p">
                  短期雇用特例被保険者として離職した場合に、離職日の属する月から被保険者となった日の属する月までの各歴月について最上段から順次さかのぼって記載します。特定の理由（※）により30日以上賃金の支払いを受けなかった場合、賃金の支払いを全く受けることができなかった歴月については記載せずに、その賃金の支払いを受けなかった期間および原因となった傷病名などを⑬備考欄に記載します。
                </Text>
                <Button>次の行へ</Button>
              </Stack>
            </InformationPanel>
          )}
        </Stack>
        <SectionGroup>
          <Heading type="sectionTitle" tag="h2">
            制限されている操作
          </Heading>
          <Base>
            <Stack gap={2}>
              <Text as="p">
                評価シートとその工程や役割をひな形として保存します。評価シートごとにテンプレートを作成してください。
              </Text>
              <Stack gap={1.5}>
                <BlockGroup as="fieldset">
                  <legend>
                    <Heading type="blockTitle" tag="h3">
                      在籍状況
                    </Heading>
                  </legend>
                  <BaseColumn>
                    <Stack>
                      <Text as="p">
                        作成済みの給与明細一覧に、給与明細を追加・更新するには、CSVファイルを取り込みます。取り込み処理中は、給与明細の操作（追加・削除・確定など）が一時的に制限されます。
                      </Text>
                      <Cluster gap={1.25}>
                        <CheckBox checked>扶養親族が23歳未満</CheckBox>
                        <CheckBox checked>高齢任意加入被保険者</CheckBox>
                        <CheckBox>退職済み</CheckBox>
                      </Cluster>
                    </Stack>
                  </BaseColumn>
                </BlockGroup>
                <BlockGroup>
                  <Heading type="blockTitle" tag="h3">
                    添付書類
                  </Heading>
                  <BaseColumn>
                    <Stack>
                      <Text as="p">申告書の下段の「住宅借入金等特別控除証明書」が見えるように撮影してください。</Text>
                      <Cluster gap={1}>
                        <Stack gap={0.5}>
                          <label htmlFor="roleName">
                            <Heading type="subBlockTitle" tag="span">
                              評価ロール名
                            </Heading>
                          </label>
                          <Input id="roleName" />
                        </Stack>
                        <Stack gap={0.5} as="span">
                          <label htmlFor="kenpoName">
                            <Heading type="subBlockTitle" tag="span">
                              健保名（任意）
                            </Heading>
                          </label>
                          <Input id="kenpoName" />
                        </Stack>
                      </Cluster>
                    </Stack>
                  </BaseColumn>
                </BlockGroup>
              </Stack>
            </Stack>
          </Base>
        </SectionGroup>
        <Stack>
          <TabBar>
            <TabItem id="tab1" onClick={action('tab1 clicked')}>
              手続き
            </TabItem>
            <TabItem id="tab2" onClick={action('tab2 clicked')} selected>
              ペアローン
            </TabItem>
          </TabBar>
          <Stack gap={2}>
            <SectionGroup>
              <Heading type="sectionTitle" tag="h2">
                質問番号
              </Heading>
              <Base>
                <Stack as="fieldset">
                  <BlockGroup>
                    <legend>
                      <Heading type="blockTitle" tag="h3">
                        スコアの再計算
                      </Heading>
                    </legend>
                    <Text as="p">
                      ファイルに書き出したい評価対象者の従業員項目と評価項目を選択して「書き出し」を押すと、CSVファイルをバックグラウンド処理で作成します。
                    </Text>
                  </BlockGroup>
                  <BaseColumn>
                    <Cluster gap={1.25}>
                      <CheckBox>法人・団体</CheckBox>
                      <CheckBox checked>雇入れ又は離職に係る事業所</CheckBox>
                      <CheckBox checked>短期雇用特例被保険者</CheckBox>
                    </Cluster>
                  </BaseColumn>
                </Stack>
              </Base>
            </SectionGroup>
            <SectionGroup>
              <Heading type="sectionTitle" tag="h2">
                口座情報
              </Heading>
              <Base>
                <Stack>
                  <BlockGroup>
                    <Heading type="blockTitle" tag="h3">
                      被保険者氏名（ヨミ）
                    </Heading>
                    <Text as="p">申請が役所に到達しました。審査終了までお待ちください。</Text>
                  </BlockGroup>
                  <Stack gap={0.75} align="flex-start">
                    <label htmlFor="routeName">
                      <Stack gap={0.5} as="span">
                        <Heading type="subBlockTitle" tag="span">
                          経路名
                        </Heading>
                        <Text as="span">
                          <FaExclamationCircleIcon color="DANGER" text="削除したカスタムマスターは元に戻せません。" />
                        </Text>
                      </Stack>
                    </label>
                    <DatePicker id="routeName" />
                  </Stack>
                </Stack>
              </Base>
            </SectionGroup>
          </Stack>
        </Stack>
      </Main>
    </Container>
  </>
)

export const Default = Template.bind({})
Default.args = {
  withInformationPanel: true,
  withUpwardNavigation: true,
}

const Container = styled(Stack).attrs({ gap: 1.5 })`
  ${({ theme: { space } }) => css`
    margin-inline: auto;
    padding: ${space(2)} ${space(1.5)};
    max-width: 80em;
  `}
`

const Main = styled(Stack).attrs({ gap: 2, as: 'main' })``

const HeadArea = styled(Stack)``

const TitleArea = styled(Cluster).attrs({ justify: 'space-between' })``

const SectionGroup = styled(Stack).attrs({ gap: 0.75 })``

const BlockGroup = styled(Stack).attrs({ gap: 0.5 })``

const Base = styled(shrBase)`
  ${({ theme: { space } }) => css`
    padding: ${space(1.5)};
  `}
`

const BaseColumn = styled(shrBase)`
  ${({ theme: { color, space } }) =>
    css`
      background-color: ${color.COLUMN};
      padding: ${space(1)};
    `}
`
