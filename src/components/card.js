import React from 'react'
import {css} from '@emotion/core'
import Img from 'gatsby-image'

const postCard = css`
  height: 330px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
  position: relative;
  margin: 20px;
  background: rgb(255, 255, 255);
  border-radius: 5px;
  padding: 30px;
  transition: all 0.15s ease;
  @media (max-width: 420px) {
    width: 240px;
  }
  :hover {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.08), 0 1px 3px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }
`

const postCardContent = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

const ImageStyle = css`
  border-radius: 3px;
  width: 100%;
  height: 200px;
  background: #c5d2d9 no-repeat 50%;
  object-fit: cover;
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
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    padding-top: 20px;
    h3 {
      margin-top: 0;
    }
  }
`

export default function Card(props) {
  return (
    <div css={postCard} className="h-card">
      <div css={postCardContent}>
        <Img fluid={props.tutorialImage} css={ImageStyle} />
        <header css={postCardHeader}>
          <div>
            <Img fluid={props.tutorialIcon} css={IconStyle} />
          </div>
          <h3>{props.tutorialTitle}</h3>
        </header>
      </div>
    </div>
  )
}
