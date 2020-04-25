import React from 'react'
import {css} from '@emotion/core'
import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from '../utils/outputTheme'

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
    background-color: #061526 !important;
    padding: 5px 0;
  `

  const wrapperStyles = css`
    overflow: auto;
    margin-left: -80px;
    margin-right: -80px;
    border-radius: 5px;
    @media (max-width: 720px) {
      margin-left: 0px;
      margin-right: 0px;
    }
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
