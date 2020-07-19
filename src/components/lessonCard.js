import React from 'react'
import {css} from '@emotion/core'
import Img from 'gatsby-image'

const lessonCard = css`
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
  margin: 0;
  img {
    border-radius: 0;
  }
`

const lessonCardHeader = css`
  display: grid;
  grid-template-columns: 30px 1fr 20px;
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

export default function LessonCard(props) {
  return (
    <div css={lessonCard}>
      <header css={lessonCardHeader}>
        <div>
          <img src={props.lessonIcon} css={IconStyle} />
        </div>
        <h2>{props.lessonTitle}</h2>
        <i
            fill="currentColor"
            style={{display: 'inlineBlock', paddingLeft: '4px', alignSelf: 'start'}}
          >
            <svg
              fill="none"
              style={{display: 'inlineBlock', verticalAlign: 'middle'}}
              height="16"
              width="16"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </i>
      </header>
    </div>
  )
}
