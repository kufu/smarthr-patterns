import { GlobalNav } from '@global'
import { UpwardLinkWrapper } from '@patterns'
import { hrefTo } from '@storybook/addon-links'
import { StoryFn } from '@storybook/react'
import dayjs from 'dayjs'
import { ComponentProps } from 'react'
import {
  Base,
  Button,
  Center,
  Cluster,
  DefinitionList,
  FaArrowLeftIcon,
  FaCloudDownloadAltIcon,
  Heading,
  PageHeading,
  Sidebar,
  Stack,
  StatusLabel,
  TextLink,
} from 'smarthr-ui'

const Template: StoryFn<{
  jobTitle: string
  status: { label: string; type: ComponentProps<typeof StatusLabel>['type'] }
  jobInfoData: ComponentProps<typeof DefinitionList>['items']
  jobResultData: ComponentProps<typeof DefinitionList>['items']
}> = ({ jobTitle, status, jobInfoData, jobResultData }, { loaded: { listUri } }) => (
  <>
    <GlobalNav current="バックグラウンド処理" />
    <Center maxWidth="75em" className="shr-px-1.5 shr-py-2 shr-w-[calc(100%_-_theme(spacing[1.5])_*_2)]">
      <Stack gap={1.5} className="shr-self-stretch">
        <UpwardLinkWrapper>
          <TextLink href={listUri} prefix={<FaArrowLeftIcon />}>
            一覧に戻る
          </TextLink>
        </UpwardLinkWrapper>
        <Cluster align="center">
          <StatusLabel type={status.type}>{status.label}</StatusLabel>
          <PageHeading>{jobTitle}</PageHeading>
        </Cluster>
        <Sidebar gap={1.5}>
          <Stack gap={0.75} as="section" className="shr-basis-[10em]">
            <Heading>処理情報</Heading>
            <Base padding={1.5}>
              <DefinitionList items={jobInfoData} />
            </Base>
          </Stack>
          <Stack gap={0.75} as="section">
            <Heading>処理結果</Heading>
            <Base padding={1.5}>
              <DefinitionList items={jobResultData} />
            </Base>
          </Stack>
        </Sidebar>
      </Stack>
    </Center>
  </>
)

export const 処理中 = {
  render: Template,
  args: {
    jobTitle: '2022年下期プロダクトサイド人員計画のCSV出力',
    status: { label: '処理中', type: 'blue' },
    jobInfoData: [
      { term: '実行者', description: 'smarthr@exmple.com' },
      { term: '受付日時', description: dayjs('2023-05-19 05:59:11').format('YYYY/MM/DD hh:mm:ss') },
      { term: '所要時間', description: '-' },
    ],
    jobResultData: [
      { term: '結果詳細', description: '-', fullWidth: true },
      { term: 'エラー内容', description: '-', fullWidth: true },
      { term: '添付ファイル', description: '-', fullWidth: true },
    ],
  },
  loaders: [
    async () => ({
      listUri: await hrefTo('バックグラウンド処理', '一覧'),
    }),
  ],
}

export const 成功 = {
  render: Template,
  args: {
    jobTitle: '2022年下期プロダクトサイド人員計画のCSV出力',
    status: { label: '成功', type: 'grey' },
    jobInfoData: [
      { term: '実行者', description: 'smarthr@exmple.com' },
      { term: '受付日時', description: dayjs('2023-05-19 05:59:11').format('YYYY/MM/DD hh:mm:ss') },
      { term: '所要時間', description: '1時間2分' },
    ],
    jobResultData: [
      { term: '結果詳細', description: 'CSVファイルを出力しました。', fullWidth: true },
      { term: 'エラー内容', description: '-', fullWidth: true },
      { term: '添付ファイル', description: <Button prefix={<FaCloudDownloadAltIcon />}>ダウンロード</Button>, fullWidth: true },
    ],
  },
  loaders: [
    async () => ({
      listUri: await hrefTo('バックグラウンド処理', '一覧'),
    }),
  ],
}

export const 一部失敗 = {
  render: Template,
  args: {
    jobTitle: 'PDFファイルのアップロード',
    status: { label: '一部失敗', type: 'warning' },
    jobInfoData: [
      { term: '実行者', description: 'smarthr@exmple.com' },
      { term: '受付日時', description: dayjs('2023-05-19 05:59:11').format('YYYY/MM/DD hh:mm:ss') },
      { term: '所要時間', description: '1時間2分' },
    ],
    jobResultData: [
      {
        term: '結果詳細',
        description: (
          <>
            <p>3件のPDFファイルのアップロードに成功しました。</p>
            <p>1件のPDFファイルのアップロードに失敗しました。</p>
          </>
        ),
        fullWidth: true,
      },
      {
        term: 'エラー内容',
        description:
          '「PDFファイルのアップロード.pdf」のファイル形式が正しくありません。ファイルを確認し、正しいPDFファイルを再度取り込んでください。',
        fullWidth: true,
      },
      { term: '添付ファイル', description: '-', fullWidth: true },
    ],
  },
  loaders: [
    async () => ({
      listUri: await hrefTo('バックグラウンド処理', '一覧'),
    }),
  ],
}

export const 失敗 = {
  render: Template,
  args: {
    jobTitle: 'PDFファイルのアップロード',
    status: { label: '失敗', type: 'error' },
    jobInfoData: [
      { term: '実行者', description: 'smarthr@exmple.com' },
      { term: '受付日時', description: dayjs('2023-05-19 05:59:11').format('YYYY/MM/DD hh:mm:ss') },
      { term: '所要時間', description: '1時間2分' },
    ],
    jobResultData: [
      { term: '結果詳細', description: '2件のPDFファイルのアップロードに失敗しました。', fullWidth: true },
      {
        term: 'エラー内容',
        description: (
          <>
            <p>
              「PDFファイルのアップロード_2023-05-18.pdf」のファイル形式が正しくありません。ファイルを確認し、正しいPDFファイルを再度取り込んでください。
            </p>
            <p>
              「PDFファイルのアップロード_2023-05-19.pdf」のファイル形式が正しくありません。ファイルを確認し、正しいPDFファイルを再度取り込んでください。
            </p>
          </>
        ),
        fullWidth: true,
      },
      { term: '添付ファイル', description: '-', fullWidth: true },
    ],
  },
  loaders: [
    async () => ({
      listUri: await hrefTo('バックグラウンド処理', '一覧'),
    }),
  ],
}

export default {
  title: 'バックグラウンド処理/詳細',
}
