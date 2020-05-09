import React from 'react'
import {css} from '@emotion/core'
import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from '../utils/outputTheme'
import styleTheme from '../config/theme'

const RE = /{([\d,-]+)}/

function calculateLinesToHighlight(meta) {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(',')
      .map(v => v.split('-').map(y => parseInt(y, 10)))
    return index => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start,
      )
      return inRange
    }
  }
  return () => false
}

const Code = ({children, className, metastring}) => {
  const language = className ? className.replace(/language-/, '') : ''
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  const preStyles = css`
    float: left;
    min-width: 100%;
    overflow: initial;
    background-color: ${styleTheme.nightOwl} !important;
    padding: 10px;
    font-size: 16px;
    line-height: 1.55rem;
    font-weight: 400;
    font-family: 'IBM Plex Mono';
  `

  const wrapperStyles = css`
    overflow: auto;
    border-radius: 3px;
    box-shadow: 0 0 8px #05121f;
    border: 1px solid ${styleTheme.accents4};
  `

  const spanStyles = css`
    display: inline-block;
    width: 2em;
    user-select: none;
    opacity: 0.3;
    padding-left: 10px;
  `

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({tokens, getLineProps, getTokenProps}) => (
        <div css={wrapperStyles}>
          <div css={preStyles}>
            {tokens.map((line, i) => (
              <div
                {...getLineProps({
                  line,
                  key: i,
                  className: shouldHighlightLine(i) ? 'highlight-line' : '',
                })}
              >
                <span css={spanStyles}>{i + 1}</span>
                {line.map((token, key) => (
                  <span {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </Highlight>
  )
}

export default Code
