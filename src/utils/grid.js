import React from 'react'
import {css} from '@emotion/core'
import theme from '../config/theme'

const gridStyles = css`
  margin: auto;
  max-width: 720px;
  padding: 0 20px;
  h2 {
    color: white;
    margin: 0;
  }
`

export default function Grid({children}) {
  return <div css={gridStyles}>{children}</div>
}
