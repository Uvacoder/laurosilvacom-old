import React from 'react'
import {css} from '@emotion/core'

export default function Footer() {
  const wrapperStyles = css`
    padding: 40px 0;
    margin-top: 100px;
  `

  const groupStyles = css`
    max-width: 720px;
    margin: auto;
    p {
      text-align: center;
      text-transform: uppercase;
      font-size: 13px;
      letter-spacing: 1px;
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
