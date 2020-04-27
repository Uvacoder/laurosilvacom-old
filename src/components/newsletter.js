import React from 'react'
import {css} from '@emotion/core'
import Wrapper from '../utils/wrapper'

export default function Nesletter() {
  const style = css`
    font-weight: 600;
    margin-bottom: 20px !important;
  `
  return (
    <Wrapper>
      <h1>Newsletter 📫</h1>
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
    </Wrapper>
  )
}
