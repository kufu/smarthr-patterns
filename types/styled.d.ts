import 'styled-components'

import type { appTheme } from '@global'

type AppTheme = typeof appTheme

declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}
