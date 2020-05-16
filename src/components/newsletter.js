import React from 'react'
import {css} from '@emotion/core'
import theme from '../config/theme'

export default function Nesletter() {
  const wrapperStyles = css`
    max-width: 720px;
    margin: auto;
    text-align: center;
    padding: 60px 20px;
    background: ${theme.accents1};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
    border-radius: 4px;
    margin-top: 40px;
    input {
      max-width: 720px;
    }
    h1 {
      font-size: 40px;
      margin: 0 auto;
      color: ${theme.foreground};
    }
    p {
      font-size: 22px;
      margin-top: 17px;
      line-height: 1.4;
      margin: auto;
      margin-top: 20px;
      color: ${theme.accents3};
    }
    @media (max-width: 620px) {
      h1 {
        font-size: 30px;
      }
    }
  `

  const style = css`
    font-size: 18px;
    line-height: 1.4;
    max-width: 720px;
    margin: auto;
    margin-top: 20px;
  `
  return (
    <div css={wrapperStyles}>
      <h1>Newsletter</h1>
      <p css={style}>
        Listen, I get it, newsletters are the worst. This one is different
        though. One-click unsubscribe anytime.
      </p>
      <iframe
        title="Lauro's Newsletter"
        src="https://laurosilvacom.substack.com/embed"
        height="100px"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  )
}
