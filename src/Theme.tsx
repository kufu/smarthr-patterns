import { ThemeProvider, createGlobalStyle, css } from 'styled-components'
import { ThemeProvider as ShrThemeProvider, createTheme } from 'smarthr-ui'
import CssBaseLine from 'smarthr-normalize-css/lib'

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
  ${({ theme: { color } }) => css`
    ${CssBaseLine}

    body {
      background-color: ${color.BACKGROUND};
    }
  `}
`

export { appTheme, Theme }
