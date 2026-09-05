import { defineConfig } from '@pandacss/dev'
import cobogo from './preset/index.mjs'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  exclude: [],
  presets: [cobogo],
  outdir: 'styled-system',
})
