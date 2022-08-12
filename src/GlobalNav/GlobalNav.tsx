import React, { useMemo } from 'react'
import { AppNavi, Header } from 'smarthr-ui'

export const GlobalNav: React.FC<{
  withAppNavi?: boolean
}> = ({ withAppNavi = true }) => {
  const buttons = useMemo(() => [{ children: 'ダッシュボード', current: true }, { children: '設定' }], [])
  return (
    <>
      <Header />
      {withAppNavi && <AppNavi label="スマパタ" buttons={buttons} />}
    </>
  )
}
