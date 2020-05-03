import React from 'react'
import Image from 'gatsby-image'
import {css} from '@emotion/core'
import theme from '../config/theme'

const wrapperStyles = css`
  margin-bottom: 30px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 60px 1fr;
  transition: all 0.4s ease 0s;
  align-items: center;
  background: ${theme.accents4};
  border-radius: 3px;
  box-shadow: 0 0 8px #05121f;
  padding: 32px;
  transition: transform 160ms;
  :hover {
    transform: scale(1.05);
  }
  h2 {
    font-size: 24px;
  }
  @media (max-width: 620px) {
    h2 {
      font-size: 20px;
    }
  }
`

export default function Card(props) {
  return (
    <div css={wrapperStyles}>
      <Image fluid={props.tutorialIcon} css={css({width: 60})} />
      <h2>{props.tutorialTitle}</h2>
    </div>
  )
}
