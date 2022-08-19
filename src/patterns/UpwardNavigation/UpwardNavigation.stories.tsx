import styled, { css } from 'styled-components'
import { Story } from '@storybook/react'
import { FaArrowLeftIcon, Heading, Stack, Text, TextLink } from 'smarthr-ui'

// TODO 共通のやつは置き方や使い方を考えたい
import { GlobalNav } from '../../GlobalNav/GlobalNav'
import { UpwardLinkWrapper } from '@patterns/UpwardNavigation'

type StoryProps = {
  withAppNavi: boolean
  withUpwardLink: boolean
}

const Template: Story<StoryProps> = ({ withAppNavi, withUpwardLink }) => (
  <>
    <GlobalNav withAppNavi={withAppNavi} />
    <Wrapper>
      {withUpwardLink && (
        <UpwardLinkWrapper withAppNavi={withAppNavi}>
          <TextLink href="#" prefix={<FaArrowLeftIcon />}>
            分析レポートに戻る
          </TextLink>
        </UpwardLinkWrapper>
      )}
      <Stack>
        <Heading>分析対象の従業員項目</Heading>
        <Text as="p">
          一部の数値データにおいて、クロス集計する際の集計単位を変更できます例えば「年齢」を「60」以上をまとめる、「20」以下をまとめる、「10」単位でまとめるのように設定すると、以下のように出力されます。
        </Text>
      </Stack>
    </Wrapper>
  </>
)

export const Default = Template.bind({})
Default.args = {
  withAppNavi: true,
  withUpwardLink: true,
}
Default.storyName = '基本'

export const WithoutAppNavi = Template.bind({})
WithoutAppNavi.args = {
  withAppNavi: false,
  withUpwardLink: true,
}
WithoutAppNavi.storyName = 'AppNavi なし'

export const NoUpwardNav = Template.bind({})
NoUpwardNav.args = {
  withAppNavi: true,
  withUpwardLink: false,
}
NoUpwardNav.storyName = '上に戻るリンクなし'

const Wrapper = styled(Stack).attrs({ gap: 1.5 })`
  ${({ theme: { space } }) => css`
    margin-inline: auto;
    padding: ${space(2)} ${space(1.5)};
    max-width: 80em;
  `}
`

export default {
  title: '上に戻るリンク',
}
