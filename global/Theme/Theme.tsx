import CssBaseLine from 'smarthr-normalize-css/lib'
import { IntlProvider, ThemeProvider as ShrThemeProvider, createTheme } from 'smarthr-ui'
import { ThemeProvider, createGlobalStyle, css } from 'styled-components'

import 'smarthr-ui/smarthr-ui.css'

const appTheme = createTheme()

const Theme: React.FC<React.PropsWithChildren> = ({ children }) => (
  <IntlProvider locale="ja">
    <ThemeProvider theme={appTheme}>
      <ShrThemeProvider theme={appTheme}>
        <GlobalStyle />
        {children}
      </ShrThemeProvider>
    </ThemeProvider>
  </IntlProvider>
)

const GlobalStyle = createGlobalStyle`
  ${({ theme: { color, leading } }) => css`
    ${CssBaseLine}

    body {
      line-height: ${leading.NORMAL};
      background-color: ${color.BACKGROUND};
      color: ${color.TEXT_BLACK};
    }
  `}
`

export { appTheme, Theme }
