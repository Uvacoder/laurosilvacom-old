import React from 'react'
import {css} from '@emotion/core'
import theme from '../config/theme'

const ineerStyles = css`
  margin: auto;
  max-width: 720px;
`

const postFeed = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
  a {
    color: ${theme.foreground};
  }
  a:hover {
    color: ${theme.foreground};
  }
`

export default function Grid({children}) {
  return (
    <div css={ineerStyles}>
      <div css={postFeed}>{children}</div>
    </div>
  )
}
