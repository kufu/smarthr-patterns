import { useState } from 'react'
import { Button, PageHeading, RadioButtonPanel, Stack } from 'smarthr-ui'

const companyList = [...Array(4).fill(0)].map((_, id) => ({ id, name: `株式会社スマートエイチアール${id}` }))

export const SelectCompanyAccount = () => {
  const [selectedId, setSelectedId] = useState<number>(0)

  return (
    <Stack gap={1.5} className="shr-mx-auto shr-py-3 shr-px-1.5 shr-max-w-[40em]">
      <PageHeading>企業アカウント選択</PageHeading>
      <p>&#x7B;機能名&#x7D;を利用する企業アカウントを選択してください。</p>
      <Stack as="ul">
        {companyList.map(({ id, name }) => (
          <RadioButtonPanel key={id} name="companyAccount" checked={id === selectedId} onChange={() => setSelectedId(id)}>
            {name}
          </RadioButtonPanel>
        ))}
      </Stack>
      <div>
        <Button variant="primary" className="shr-px-[3em]">
          次へ
        </Button>
      </div>
    </Stack>
  )
}
