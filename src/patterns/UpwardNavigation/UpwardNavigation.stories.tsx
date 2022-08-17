import { ComponentProps, FunctionComponentElement } from 'react'
import styled, { css } from 'styled-components'
import { Story } from '@storybook/react'
import { FaArrowLeftIcon, Heading, Stack, Text, TextLink } from 'smarthr-ui'
import { CharRelativeSize } from 'smarthr-ui/lib/themes/createSpacing'

// TODO 共通のやつは置き方や使い方を考えたい
import { GlobalNav } from '../../GlobalNav/GlobalNav'

type StoryProps = {
  upwardLink?: FunctionComponentElement<ComponentProps<typeof TextLink>>
  withAppNavi?: boolean
  wrapperGap?: CharRelativeSize
}

const UpwardLink = () => (
  <UpwardLinkWrapper>
    <TextLink href="#" prefix={<FaArrowLeftIcon />}>
      分析レポートに戻る
    </TextLink>
  </UpwardLinkWrapper>
)
const UpwardLinkWrapper = styled.div`
  ${({ theme: { leading, space } }) => css`
    /* アイコン(1)とその間隔（0.25）分をずらしている */
    transform: translateX(${space(-1.25)});
    /* Stack の margin を上書くために詳細度を上げる
     * https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity */
    &&& {
      /* UpwardLink がない場合にレイアウトが崩れないように negative margin で制御 */
      margin-block-start: ${space(-1)};
    }
    e-height: ${leading.NONE};

    @media (max-width: 480px) {
      transform: revert;
    }
  `}
`

const Template: Story<StoryProps> = ({ upwardLink, withAppNavi = true, wrapperGap = 1.5 }) => (
  <>
    <GlobalNav withAppNavi={withAppNavi} />
    <Wrapper gap={wrapperGap}>
      {upwardLink}
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
  upwardLink: <UpwardLink />,
  wrapperGap: 1.5,
}
Default.storyName = '基本'

export const WithoutAppNavi = Template.bind({})
WithoutAppNavi.args = {
  withAppNavi: false,
  upwardLink: <UpwardLink />,
  wrapperGap: 1,
}
WithoutAppNavi.storyName = 'AppNavi なし'

export const NoUpwardNav = Template.bind({})
NoUpwardNav.storyName = '上に戻るリンクなし'

const Wrapper = styled(Stack)`
  ${({ theme: { space } }) => css`
    margin-inline: auto;
    padding: ${space(2)} ${space(1.5)};
    max-width: 80em;
  `}
`

export default {
  title: '上に戻るリンク',
}
