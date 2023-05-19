import { useMemo } from 'react'
import { AppNavi, Header } from 'smarthr-ui'

export const GlobalNav: React.FC<{
  withAppNavi?: boolean
  current?: string
}> = ({ withAppNavi = true, current = 'ダッシュボード' }) => {
  const buttons = useMemo(
    () =>
      [{ children: 'ダッシュボード' }, { children: 'バックグラウンド処理' }, { children: '設定' }].map(({ children }) =>
        children === current ? { children, current: true } : { children },
      ),
    [current],
  )
  return (
    <>
      <Header />
      {withAppNavi && <AppNavi label="スマパタ" buttons={buttons} />}
    </>
  )
}
