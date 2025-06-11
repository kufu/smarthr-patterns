import React, { createContext, useContext, useLayoutEffect, useRef, useState } from 'react'
import { AppNavi, Button, Input, PageHeading, ThemeProvider, createTheme, Base as shrBase } from 'smarthr-ui'
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
  const [gutter, setGutter] = useState(2.0)

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

    padding-right: 1.5rem;
    padding-left: 1.5rem;

    @media (min-width: 1256px) {
      padding-right: 2rem;
      padding-left: 2rem;
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
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  max-width: ${({ fullWidth, gutter }) => (fullWidth ? 'none' : `calc(1rem * 8 * 8 + ${gutter}rem * 7)`)};

  @media (min-width: 1256px) {
    padding-right: 2rem;
    padding-left: 2rem;
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
    rgba(0, 196, 204, 0.25) calc((100% - (${gutter}rem * 7)) / 8),
    transparent calc((100% - (${gutter}rem * 7)) / 8),
    transparent calc(calc((100% - (${gutter}rem * 7)) / 8) + ${gutter}rem)
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

const GridBoxBase = styled(shrBase)<GridBoxProps>`
  ${({ displayGrid }) =>
    displayGrid &&
    `box-shadow:
       rgb(51 51 51 / 15%) 0px 0px 4px 0px,
       rgba(255, 136, 0, 0.25) 0 0 0 1.5rem inset
       ;
  `}
  padding: 1.5rem;
`

interface DisplayDimensionsBoxProps extends GridBoxProps {
  ref?: React.RefObject<HTMLDivElement>
}

const DisplayDimensionsBox: React.FC<DisplayDimensionsBoxProps> = (props) => {
  const target = useRef<HTMLDivElement>(null)
  const { displayGrid } = props
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

  return (
    <GridBoxBase {...props} ref={target}>
      <strong style={{ fontSize: '1.1rem', display: 'block' }}>{dimensions.width}px</strong>
      <p
        style={{
          marginTop: '1.5rem',
          boxShadow: displayGrid ? 'rgba(255, 136, 0, 0.25) 0 -1.5rem' : 'none',
          maxWidth: 'none',
        }}
      >
        すべてがレスポンシブな箱
      </p>
    </GridBoxBase>
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
        : span === 2
          ? 'width: 25%;'
          : span === 3
            ? 'width: 37.5%;'
            : span === 4
              ? 'width: 50%;'
              : span === 5
                ? 'width: 62.5%;'
                : span === 6
                  ? 'width: 75%;'
                  : span === 8
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
  const Component = displayWidth ? DisplayDimensionsBox : GridBoxBase
  const { displayGrid, gutter } = useContext(GridContext)

  return (
    <ColWrapper {...props}>
      <Component displayGrid={displayGrid} gutter={gutter}>
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
      <AppNaviWrapper>
        <AppNavi label="理想シリーズ">
          <div>
            <span style={{ marginRight: '.5rem' }}>
              溝：
              <Input
                type="number"
                name="gutter"
                title="グリッドの溝幅を設定"
                value={gutter.toString()}
                onChange={(e) => {
                  setGutter(parseFloat(e.currentTarget.value))
                }}
                suffix={<span style={{ color: '#76736A' }}>rem</span>}
                step="0.1"
                style={{ width: '5em' }}
              />
            </span>
            <Button
              variant="secondary"
              size="s"
              onClick={() => {
                setDisplayGrid(!displayGrid)
              }}
            >
              {displayGrid ? 'グリッドを隠す' : 'グリッドを現す'}
            </Button>
          </div>
        </AppNavi>
      </AppNaviWrapper>
      <Container gutter={gutter}>
        <PageHeading>SmartHR における理想のグリッドシステム</PageHeading>
        <p>
          このグリッドシステムは{' '}
          <a href="https://codepen.io/uknmr/pen/vYKWvwZ" style={{ color: '#0077c7' }} target="_blank" rel="noopener noreferrer">
            SmartHR における理想のタイポグラフィ
          </a>
          の上に成り立っています。このグリッドシステムがあれば "即物的" に構成できます。
        </p>
        <p>明確で論理的で構造化された情報は、素早く読め、理解度を深め、記憶に残ります。またこれは科学的にも証明されています。</p>
      </Container>

      <Container gutter={gutter}>
        <DisplayBackgroundGrid displayGrid={displayGrid} gutter={gutter}>
          <div>
            <div>
              <StyledHeading>
                基本は 8 列で最大 {16 * 8 * 8 + 7 * gutter * 16}px のグリッド構成（溝が {gutter}rem の場合）
              </StyledHeading>
              <p>
                フィールドごとの溝は 1.5rem とし、行ごとの溝は 2rem
                としています。これは上下に比べて左右で情報が分断する可能性が低いことに影響しています。実際のプロダクトにおいては行ごとの溝は
                UI 構成に依ります。
              </p>
              <p>
                また、グリッドシステムでは縦の分割も画面の構成を決める重要な変数になるが、ここはウェブだ。縦はコンテンツの長さに依り無限である。だから気にしたら負け。余白や高さなどすべての大きさをデフォルトフォントサイズ基準にすることで縦方向のリズムを守れる。
              </p>
              <p>
                一つのフィールドは 2 列 280px から 8 列 1192px までの 6
                段階で、その中から大体使えそうなレイアウトは下記の通りです。
              </p>
              <p>
                ウィンドウ幅が 1192px
                より小さくなる場合はフィールドごとの横幅間隔を維持したまま小さくなります。ここではブレークポイントのことは考えないので際限なく小さくなります。
              </p>
              <p>
                これは思いつきですがボタンやラベルの最小幅、ダイアログサイズなどもこのグリッドを基準に考えていくと統一感があり美しい
                UI を構成できそうです。
              </p>
            </div>
            <Row>
              <Col span={2} displayWidth />
              <Col span={4} displayWidth />
              <Col span={2} displayWidth />
            </Row>
            <Row>
              <Col span={2} displayWidth />
              <Col span={6} displayWidth />
            </Row>
            <Row>
              <Col span={3} displayWidth />
              <Col span={5} displayWidth />
            </Row>
            <Row>
              <Col span={4} displayWidth />
              <Col span={4} displayWidth />
            </Row>
            <Row>
              <Col span={5} displayWidth />
              <Col span={3} displayWidth />
            </Row>
            <Row>
              <Col span={6} displayWidth />
              <Col span={2} displayWidth />
            </Row>
            <Row>
              <Col span={8} displayWidth />
            </Row>
          </div>
        </DisplayBackgroundGrid>
      </Container>

      <Container fullWidth gutter={gutter}>
        <DisplayBackgroundGrid displayGrid={displayGrid} gutter={gutter}>
          <div>
            <div>
              <StyledHeading>画面いっぱいなグリッド構成</StyledHeading>
              <p>
                これは欲張りなあなたのために。画面幅から左右 2rem ずつの padding
                を引いたものが使える画面幅です（これはブレークポイントの見直しで可変する可能性があります）。
              </p>
              <p>
                どんな画面解像度だろうともグリッドは常に 8
                列です。幅（列数）を指定すればグリッドに沿って拡大縮小されます。幅を指定しない場合は、余ったスペースを埋めます。
              </p>
            </div>
            <Row>
              <Col span={8} displayWidth />
            </Row>
            <Row>
              <Col span={2} displayWidth />
              <Col>Flexible</Col>
            </Row>
            <Row>
              <Col span={3} displayWidth />
              <Col>Flexible</Col>
            </Row>
            <Row>
              <Col span={4} displayWidth />
              <Col>Flexible</Col>
            </Row>
            <Row>
              <Col span={5} displayWidth />
              <Col>Flexible</Col>
            </Row>
            <Row>
              <Col span={6} displayWidth />
              <Col>Flexible</Col>
            </Row>
            <Row>
              <Col span={2} displayWidth />
              <Col>Flexible</Col>
              <Col span={2} displayWidth />
            </Row>
            <Row>
              <Col span={3} displayWidth />
              <Col>Flexible</Col>
              <Col span={2} displayWidth />
            </Row>
            <div>
              <p>もちろん埋めないこともできますし、必要があれば中央揃えもできます。</p>
            </div>
            <Row>
              <Col span="auto">これは中のコンテンツ量によって幅が変化するフィールドです。</Col>
            </Row>
            <Row>
              <Col span="auto">こんなこともできます（非推奨）。</Col>
              <Col span={3} displayWidth />
              <Col>Flexible</Col>
            </Row>
            <Row center>
              <Col span="auto">行を中央寄せして中をよしなにすることもできる（非推奨）。</Col>
              <Col span={4} displayWidth />
            </Row>
            <Row right>
              <Col span={4}>右寄せもできる。</Col>
            </Row>
            <div>
              <p>奇数列の等幅割もできる。</p>
            </div>
            <Row>
              <Col displayWidth />
              <Col displayWidth />
              <Col displayWidth />
            </Row>
            <Row>
              <Col displayWidth />
              <Col displayWidth />
              <Col displayWidth />
              <Col displayWidth />
              <Col displayWidth />
            </Row>
          </div>
        </DisplayBackgroundGrid>
      </Container>
    </>
  )
}
