import React from 'react'
import {css} from '@emotion/core'
import theme from '../config/theme'

const wrapperStyles = css`
  margin-bottom: 30px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr;
  transition: all 0.4s ease 0s;
  align-items: center;
  background: ${theme.background};
  border-radius: 3px;
  padding: 32px;
  transition: transform 160ms;
  :hover {
    transform: scale(1.05);
  }
  h2 {
    font-size: 24px;
    color: ${theme.accents1};
  }
  @media (max-width: 620px) {
    h2 {
      font-size: 20px;
    }
  }
`

export default function Card(props) {
  return (
    <div css={wrapperStyles} className="h-card">
      <h2 className="">{props.tutorialTitle}</h2>
    </div>
  )
}
