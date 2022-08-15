import 'styled-components'

import { appTheme } from '../src/Theme'

type AppTheme = typeof appTheme

declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}
