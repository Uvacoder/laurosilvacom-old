import React from 'react'
import {css} from '@emotion/core'
import theme from '../config/theme'

export default function Footer() {
  const wrapperStyles = css`
    padding: 40px 0;
    margin-top: 100px;
    background: ${theme.success};
  `

  const groupStyles = css`
    max-width: 720px;
    margin: auto;
    p {
      text-align: center;
      text-transform: uppercase;
      font-size: 13px;
      letter-spacing: 1px;
      color: ${theme.background};
    }
  `

  return (
    <div css={wrapperStyles}>
      <div css={groupStyles}>
        <p>© Lauro Silva, LLC. All rights reserved.</p>
      </div>
    </div>
  )
}
