import React from 'react'
import {css} from '@emotion/core'
import Img from 'gatsby-image'

const postCard = css`
  height: 100px;
  display: grid;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
  position: relative;
  background: rgb(255, 255, 255);
  border-radius: 5px;
  padding: 20px;
  transition: all 0.15s ease;
  @media (max-width: 420px) {
    height: auto;
    margin: auto;
  }
  :hover {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.08), 0 1px 3px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`

const IconStyle = css`
  width: 30px;
  border-radius: 0px;
`

const postCardHeader = css`
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-gap: 20px;
  align-items: center;
  h2 {
    margin: 0;
    font-size: 20px;
    @media (max-width: 420px) {
      font-size: 16px;
    }
  }
`

export default function Card(props) {
  return (
    <div css={postCard}>
      <header css={postCardHeader}>
        <div>
          <Img fluid={props.postIcon} css={IconStyle} />
        </div>
        <h2>{props.postTitle}</h2>
      </header>
    </div>
  )
}
