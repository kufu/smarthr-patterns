import { ThemeProvider } from 'styled-components'
import { ThemeProvider as SHRThemeProvider } from 'smarthr-ui'
import { CreatedTheme } from 'smarthr-ui/lib/themes/createTheme'

type Props = {
  theme: CreatedTheme
} & React.PropsWithChildren

export const Theme: React.FC<Props> = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    <SHRThemeProvider theme={theme}>{children}</SHRThemeProvider>
  </ThemeProvider>
)
