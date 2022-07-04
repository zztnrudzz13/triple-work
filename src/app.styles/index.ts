import { css } from '@emotion/react'

import { resetCSS } from './reset'

export const globalStyle = css`
  ${resetCSS}
  html, body {
    width: 100%;
    height: 100%;
    min-width: 1200px;
    font-family: sans-serif;
  }
`