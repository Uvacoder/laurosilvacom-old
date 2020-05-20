import React from 'react'
import {css} from '@emotion/core'
import theme from '../config/theme'

const ineerStyles = css`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
`

const postFeed = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  gap: 20px;
  padding: 0 20px;
  a {
    color: ${theme.foreground};
  }
  a:hover {
    color: ${theme.foreground};
  }
  @media (max-width: 1320px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

export default function Grid({children}) {
  return (
    <div css={ineerStyles}>
      <div css={postFeed}>{children}</div>
    </div>
  )
}
