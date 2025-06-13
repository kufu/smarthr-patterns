import React, { createContext, useContext, useLayoutEffect, useRef, useState } from 'react'
import { Base, PageHeading, Stack, ThemeProvider, createTheme } from 'smarthr-ui'
import styled, { createGlobalStyle } from 'styled-components'

const GridContext = createContext<{
  displayGrid: boolean
  setDisplayGrid: (value: boolean) => void
  gutter: number
  setGutter: (value: number) => void
}>({
  displayGrid: true,
  setDisplayGrid: () => {},
  gutter: 2.0,
  setGutter: () => {},
})

const GridProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [displayGrid, setDisplayGrid] = useState(true)
  const [gutter, setGutter] = useState(2)

  return (
    <GridContext.Provider
      value={{
        displayGrid,
        setDisplayGrid,
        gutter,
        setGutter,
      }}
    >
      {children}
    </GridContext.Provider>
  )
}

const theme = createTheme({
  size: {
    htmlFontSize: 16,
    font: {
      SHORT: 13.71,
      TALL: 16,
      GRANDE: 19.2,
      VENTI: 24,
    },
  },
})

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
  }
  
  body {
    margin: 0;
    background-color: #F8F7F6;
    color: #23221F;
  }
  
  p {
    margin-bottom: 0;
    max-width: 35em;
  }

  [type=number]::-webkit-inner-spin-button, 
  [type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
  }

  #root {
    height: 100%;
  }
`

const AppNaviWrapper = styled.div`
  > nav {
    display: flex;
    justify-content: space-between;

    padding-right: 4rem;
    padding-left: 4rem;

    @media (min-width: 1256px) {
      padding-right: 4rem;
      padding-left: 4rem;
    }
  }
`

const StyledHeading = styled.h2`
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  margin-top: 0;
`

interface ContainerProps {
  fullWidth?: boolean
  gutter: number
}

const Container = styled.div<ContainerProps>`
  margin-right: auto;
  margin-left: auto;
  padding-top: 2rem;
  padding-right: 4rem;
  padding-left: 4rem;
  max-width: ${({ fullWidth }) => (fullWidth ? 'none' : 'calc(1920px - 8rem)')};

  @media (min-width: 1256px) {
    padding-right: 4rem;
    padding-left: 4rem;
  }

  > div > * + * {
    margin-top: 2rem;
  }
`

interface DisplayBackgroundGridProps {
  displayGrid: boolean
  gutter: number
}

const DisplayBackgroundGrid = styled.div<DisplayBackgroundGridProps>`
  background-image: ${({ gutter }) => `repeating-linear-gradient(
    90deg,
    rgba(0, 196, 204, 0.25),
    rgba(0, 196, 204, 0.25) calc((100% - (${gutter}rem * 11)) / 12),
    transparent calc((100% - (${gutter}rem * 11)) / 12),
    transparent calc(calc((100% - (${gutter}rem * 11)) / 12) + ${gutter}rem)
  )`};
  ${({ displayGrid }) => !displayGrid && 'background-image: none;'}
  padding-bottom: 2rem;
`

interface RowProps {
  gutter: number
  center?: boolean
  right?: boolean
}

const Row: React.FC<React.PropsWithChildren<{ center?: boolean; right?: boolean }>> = (props) => {
  const { gutter } = useContext(GridContext)

  return <RowContainer {...props} gutter={gutter} />
}

const RowContainer = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  ${({ center }) => center && 'justify-content: center;'}
  ${({ right }) => right && 'justify-content: flex-end;'}
  margin-right: ${({ gutter }) => `-${gutter / 2}rem`};
  margin-left: ${({ gutter }) => `-${gutter / 2}rem`};

  > * {
    width: 100%;
    max-width: 100%;
    padding-right: ${({ gutter }) => `${gutter / 2}rem`};
    padding-left: ${({ gutter }) => `${gutter / 2}rem`};
  }
`

interface GridBoxProps {
  displayGrid: boolean
  gutter: number
}

interface DisplayDimensionsBoxProps extends GridBoxProps {
  ref?: React.RefObject<HTMLDivElement>
  span?: number | 'auto'
}

const DisplayDimensionsBox: React.FC<DisplayDimensionsBoxProps> = (props) => {
  const target = useRef<HTMLDivElement>(null)
  const { displayGrid, gutter, span } = props
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const testDimensions = () => {
    if (target.current) {
      setDimensions({
        width: target.current.offsetWidth,
        height: target.current.offsetHeight,
      })
    }
  }

  useLayoutEffect(() => {
    testDimensions()
  }, [])

  useLayoutEffect(() => {
    let moveTimer: NodeJS.Timeout

    const handleResize = () => {
      clearTimeout(moveTimer)
      moveTimer = setTimeout(testDimensions, 100)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(moveTimer)
    }
  }, [])

  // padding（gutter）を除いた実際のコンテンツ幅を計算
  const paddingTotal = gutter * 16 * 2 // 左右のpadding（1rem = 16px）
  const contentWidth = Math.max(0, dimensions.width - paddingTotal)
  // remでの表現
  const remWidth = Math.round((contentWidth / 16) * 10) / 10

  // カラム表示
  const columnText = span === 'auto' ? 'auto' : span || 'flex'

  return (
    <Base {...props} padding={1.5} ref={target}>
      <strong style={{ fontSize: '1.1rem', display: 'block' }}>
        {columnText}col: {dimensions.width}px
      </strong>
    </Base>
  )
}

interface ColWrapperProps {
  span?: number | 'auto'
}

const ColWrapper = styled.div<ColWrapperProps>`
  box-sizing: border-box;
  flex: 1 0 0%;

  ${({ span }) => `
    ${span && 'flex: 0 0 auto;'}
    ${
      span === 'auto'
        ? 'width: auto;'
        : span === 1
          ? 'width: 8.333333%;'
          : span === 2
            ? 'width: 16.666667%;'
            : span === 3
              ? 'width: 25%;'
              : span === 4
                ? 'width: 33.333333%;'
                : span === 5
                  ? 'width: 41.666667%;'
                  : span === 6
                    ? 'width: 50%;'
                    : span === 7
                      ? 'width: 58.333333%;'
                      : span === 8
                        ? 'width: 66.666667%;'
                        : span === 9
                          ? 'width: 75%;'
                          : span === 10
                            ? 'width: 83.333333%;'
                            : span === 11
                              ? 'width: 91.666667%;'
                              : span === 12
                                ? 'width: 100%;'
                                : 'width: 100%;'
    }
  `}
`

interface ColProps {
  span?: number | 'auto'
  displayWidth?: boolean
  children?: React.ReactNode
}

const Col: React.FC<ColProps> = ({ displayWidth, children, ...props }) => {
  const Component = displayWidth ? DisplayDimensionsBox : Base
  const { displayGrid, gutter } = useContext(GridContext)

  return (
    <ColWrapper {...props}>
      <Component displayGrid={displayGrid} gutter={gutter} span={displayWidth ? props.span : undefined}>
        {children || 'hoge'}
      </Component>
    </ColWrapper>
  )
}

export const GridLayoutDemo: React.FC = () => (
  <GridProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GridLayoutContent />
    </ThemeProvider>
  </GridProvider>
)

const GridLayoutContent: React.FC = () => {
  const { displayGrid, setDisplayGrid, gutter, setGutter } = useContext(GridContext)

  return (
    <>
      <Container gutter={gutter}>
        <Stack>
          <PageHeading>SmartHR における12カラムグリッドシステム</PageHeading>
          <p>1920px という SmartHR で最も多い利用環境の画面解像度を元に、12カラムのグリッドシステムを構築しました。</p>
          <ul className="shr-list-disc">
            <li>
              まず、1920px の両端から 64px ずつ取り除いたものを最大幅とします。<code>1920px - 64px * 2 = 1792px</code>
            </li>
            <li>
              溝を2文字分（1文字 = 16px）として引いたものを12分割したのが1カラムの幅です。
              <code>(1792 - (16px * 2 * (12 - 1))) / 12 = 120px</code>
            </li>
            <li>
              5カラムであれば <code>120px * 5 + 16 * 2 * (5 - 1) = 728px</code> となります。
            </li>
          </ul>
        </Stack>
      </Container>

      <Container gutter={gutter}>
        <DisplayBackgroundGrid displayGrid={displayGrid} gutter={gutter}>
          {/* 12カラムの基本的なレイアウト例 */}
          <Row>
            <Col span={1} displayWidth />
          </Row>
          <Row>
            <Col span={2} displayWidth />
          </Row>
          <Row>
            <Col span={3} displayWidth />
          </Row>
          <Row>
            <Col span={4} displayWidth />
          </Row>
          <Row>
            <Col span={5} displayWidth />
          </Row>
          <Row>
            <Col span={6} displayWidth />
          </Row>
          <Row>
            <Col span={7} displayWidth />
          </Row>
          <Row>
            <Col span={8} displayWidth />
          </Row>
          <Row>
            <Col span={9} displayWidth />
          </Row>
          <Row>
            <Col span={10} displayWidth />
          </Row>
          <Row>
            <Col span={11} displayWidth />
          </Row>
          <Row>
            <Col span={12} displayWidth />
          </Row>
        </DisplayBackgroundGrid>
      </Container>
    </>
  )
}
