import React from 'react'
import {css} from '@emotion/core'
import theme from '../config/theme'
import {fonts} from '../libs/typography'

const embedWrapper = css`
  padding: 20px;
  background: ${theme.accents1};
  border: 1px solid ${theme.accents2};
  border-radius: 5px;
  border-bottom-right-radius: 0px;
`

const cta = css`
  display: grid;
  grid-template-columns: 240px 50px;
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    small {
      order: 1;
    }
    h2 {
      order: 2;
    }
  }
  h2 {
    margin: 0;
  }
  small {
    color: ${theme.background};
    background: ${theme.success};
    letter-spacing: 1px;
    font-family: ${fonts.semibold};
    height: 20px;
    padding: 2px 5px;
    width: 48px;
    border-radius: 2px;
  }
  p {
    line-height: 1.1;
    margin-bottom: 15px;
    font-size: 16px;
  }
`

const embedStyle = css`
  position: relative;
  padding-bottom: 56.2%;
`

const buttonStyle = css`
  padding: 15px;
  margin-top: -1px;
  background: ${theme.accents1};
  color: ${theme.accents3};
  max-width: 200px;
  justify-self: right;
  border: 1px solid ${theme.accents2};
  border-radius: 5px;
  font-size: 16px;
  line-height: 0;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-radius: 0;
  border-top: 0px solid ${theme.background};
`

const mainWrapper = css`
  display: grid;
  margin: 20px 0;
`

export default function EggheadEmbed({lessonLink, lessonTitle}) {
  const affiliateLink = 'af=4obayz'
  const heroEmbedLink = `${lessonLink}?${affiliateLink}`.toString()

  const normalLink = `${lessonLink.substring(
    0,
    lessonLink.length - 6,
  )}?${affiliateLink}`

  console.log(normalLink)
  console.log(heroEmbedLink)

  return (
    <div css={mainWrapper}>
      <div css={embedWrapper}>
        <div css={cta}>
          <h2>Watch the video</h2>
          <small>NEW</small>
        </div>

        <p>Prefer your lessons in video format? Watch for free on egghead:</p>
        <div css={embedStyle}>
          <iframe
            width="100%"
            height="100%"
            src={heroEmbedLink}
            title={lessonTitle}
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreenstyle="position: absolute;width: 100%;height: 100%;"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>
      <button css={buttonStyle} type="button">
        <a href={normalLink}>
          View on egghead
          <i
            fill="currentColor"
            style={{display: 'inlineBlock', paddingLeft: '4px'}}
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
        </a>
      </button>
    </div>
  )
}
