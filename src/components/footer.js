import React from 'react'
import {css} from '@emotion/core'
import theme from '../config/theme'

export default function Footer() {
  const wrapperStyles = css`
    padding: 40px 0;
    margin-top: 100px;
    background: ${theme.primary};
  `

  const groupStyles = css`
    max-width: 720px;
    margin: auto;
    p {
      text-align: center;
      font-size: 15px;
      color: ${theme.accents1};
      opacity: 0.6;
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
