import { UpwardLinkWrapper } from '@patterns'
import { action } from '@storybook/addon-actions'
import {
  Base,
  BaseColumn,
  Button,
  CheckBox,
  Cluster,
  DatePicker,
  DropdownMenuButton,
  FaArrowLeftIcon,
  Fieldset,
  FormControl,
  Heading,
  InformationPanel,
  Input,
  PageHeading,
  Section,
  Stack,
  StatusLabel,
  TabBar,
  TabItem,
  Text,
  TextLink,
} from 'smarthr-ui'
import styled, { css } from 'styled-components'

type Props = {
  withInformationPanel: boolean
  withUpwardNavigation: boolean
}

export const SpacingPractice: React.FC<Props> = ({ withInformationPanel, withUpwardNavigation }) => (
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
              <PageHeading>雇入れ又は離職に係る事業所</PageHeading>
            </Cluster>
            <DropdownMenuButton label="操作">
              <Button>削除</Button>
            </DropdownMenuButton>
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
      <Section>
        <Stack gap={2}>
          <SectionGroup>
            <Heading>制限されている操作</Heading>
            <Base padding={1.5}>
              <Stack gap={2}>
                <Text as="p">
                  評価シートとその工程や役割をひな形として保存します。評価シートごとにテンプレートを作成してください。
                </Text>
                <Stack gap={1.5}>
                  <Fieldset title="在籍状況" innerMargin={0.5}>
                    <BaseColumn padding={1}>
                      <Stack>
                        <Text as="p">
                          作成済みの給与明細一覧に、給与明細を追加・更新するには、CSVファイルを取り込みます。取り込み処理中は、給与明細の操作（追加・削除・確定など）が一時的に制限されます。
                        </Text>
                        <Cluster gap={{ column: 1.5, row: 1 }}>
                          <CheckBox checked>扶養親族が23歳未満</CheckBox>
                          <CheckBox checked>高齢任意加入被保険者</CheckBox>
                          <CheckBox>退職済み</CheckBox>
                        </Cluster>
                      </Stack>
                    </BaseColumn>
                  </Fieldset>
                  <Fieldset title="添付書類" innerMargin={0.5}>
                    <BaseColumn padding={1}>
                      <Stack>
                        <Text as="p">申告書の下段の「住宅借入金等特別控除証明書」が見えるように撮影してください。</Text>
                        <Cluster gap={1}>
                          <FormControl title="評価ロール名" titleType="subBlockTitle">
                            <Input />
                          </FormControl>
                          <FormControl title="健保名（任意）" titleType="subBlockTitle">
                            <Input />
                          </FormControl>
                        </Cluster>
                      </Stack>
                    </BaseColumn>
                  </Fieldset>
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
              <Section>
                <SectionGroup>
                  <Heading>質問番号</Heading>
                  <Base padding={1.5}>
                    <Fieldset
                      title="スコアの再計算"
                      helpMessage="ファイルに書き出したい評価対象者の従業員項目と評価項目を選択して「書き出し」を押すと、CSVファイルをバックグラウンド処理で作成します。"
                    >
                      <BaseColumn padding={1}>
                        <Cluster gap={{ column: 1.5, row: 1 }}>
                          <CheckBox>法人・団体</CheckBox>
                          <CheckBox checked>雇入れ又は離職に係る事業所</CheckBox>
                          <CheckBox checked>短期雇用特例被保険者</CheckBox>
                        </Cluster>
                      </BaseColumn>
                    </Fieldset>
                  </Base>
                </SectionGroup>
              </Section>
              <Section>
                <SectionGroup>
                  <Heading>口座情報</Heading>
                  <Base padding={1.5}>
                    <Fieldset title="被保険者氏名（ヨミ）" helpMessage="申請が役所に到達しました。審査終了までお待ちください。">
                      <FormControl
                        title="経路名"
                        titleType="subBlockTitle"
                        errorMessages="削除したカスタムマスターは元に戻せません。"
                      >
                        <DatePicker />
                      </FormControl>
                    </Fieldset>
                  </Base>
                </SectionGroup>
              </Section>
            </Stack>
          </Stack>
        </Stack>
      </Section>
    </Main>
  </Container>
)

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

const SectionGroup = styled(Stack)``
