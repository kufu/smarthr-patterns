import CssBaseLine from 'smarthr-normalize-css/lib'
import { ThemeProvider as ShrThemeProvider, createTheme } from 'smarthr-ui'
import { ThemeProvider, createGlobalStyle, css } from 'styled-components'

const appTheme = createTheme()

const Theme: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={appTheme}>
    <ShrThemeProvider theme={appTheme}>
      <GlobalStyle />
      {children}
    </ShrThemeProvider>
  </ThemeProvider>
)

const GlobalStyle = createGlobalStyle`
  ${({ theme: { color, leading } }) => css`
    ${CssBaseLine}

    body {
      line-height: ${leading.NONE};
      background-color: ${color.BACKGROUND};
      color: ${color.TEXT_BLACK};
    }
  `}
`

export { appTheme, Theme }
