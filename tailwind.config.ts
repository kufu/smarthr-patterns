import preset from 'smarthr-ui/lib/smarthr-ui-preset'

import type { Config } from 'tailwindcss'

module.exports = {
  presets: [preset],
  content: ['./patterns/**/*.{js,jsx,ts,tsx}', './node_modules/smarthr-ui/lib/**/*.js'],
} satisfies Config
