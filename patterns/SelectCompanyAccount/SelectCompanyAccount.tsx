import { useState } from 'react'
import { Button, PageHeading, RadioButtonPanel, Stack } from 'smarthr-ui'
import styled, { css } from 'styled-components'

const companyList = [...Array(4).fill(0)].map((_, id) => ({ id, name: `株式会社スマートエイチアール${id}` }))

export const SelectCompanyAccount = () => {
  const [selectedId, setSelectedId] = useState<number>(0)

  return (
    <Wrapper>
      <PageHeading>企業アカウント選択</PageHeading>
      <p>&#x7B;機能名&#x7D;を利用する企業アカウントを選択してください。</p>
      <CompanyList>
        {companyList.map(({ id, name }) => (
          <RadioButtonPanel key={id} name="companyAccount" checked={id === selectedId} onChange={() => setSelectedId(id)}>
            {name}
          </RadioButtonPanel>
        ))}
      </CompanyList>
      <div>
        <SubmitButton>次へ</SubmitButton>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled(Stack).attrs({ gap: 1.5 })`
  ${({ theme: { space } }) => css`
    margin-inline: auto;
    padding: ${space(3)} ${space(1.5)};
    max-width: 40em;
  `}
`

const CompanyList = styled(Stack).attrs({ as: 'ul' })``

const SubmitButton = styled(Button).attrs({ variant: 'primary' })`
  padding-inline: 3em;
`
