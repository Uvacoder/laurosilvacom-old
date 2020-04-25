import React from 'react'
import Image from 'gatsby-image'
import {css} from '@emotion/core'
import theme from '../config/theme'

const wrapperStyles = css`
  background: ${theme.accents8};
  box-shadow: ${theme.shadowMedium};
  border: 1px solid ${theme.accents7};
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 30px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 70px 1fr;
  transition: all 0.4s ease 0s;
  align-items: center;
`

export default function Card(props) {
  return (
    <div css={wrapperStyles}>
      <Image fluid={props.tutorialIcon} css={css({height: 70})} />
      <h2>{props.tutorialTitle}</h2>
    </div>
  )
}
