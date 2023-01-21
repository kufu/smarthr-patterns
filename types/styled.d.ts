import 'styled-components'

import { appTheme } from '@global'

type AppTheme = typeof appTheme

declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}
