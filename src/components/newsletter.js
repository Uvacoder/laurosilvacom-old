/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import {css} from '@emotion/core'
import theme from '../config/theme'

export default function Nesletter() {
  const wrapperGroup = css`
    max-width: 400px;
    margin: auto;
  `
  const wrapperStyles = css`
    padding: 20px;
    height: 280px;
    text-align: center;
    padding: 60px 20px;
    background: ${theme.primary};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
    border-radius: 5px;
    padding: 20px;
    h2 {
      color: ${theme.accents1};
      margin: 10px;
    }
    p {
      color: ${theme.accents1};
      opacity: 0.6;
      margin-bottom: 0;
    }
    button {
      background: ${theme.success};
      color: ${theme.accents1};
      border: 0px solid red;
      border-radius: 5px;
      padding: 15px 15px;
      margin-top: 20px;
      font-size: 16px;
      width: 217px;
      transition: all 0.15s ease;
      cursor: pointer;
      width: 100%;
    }
    button:hover {
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.08),
        0 1px 3px rgba(0, 0, 0, 0.08);
      transform: translateY(-2px);
    }
  `

  const mainInput = css`
    padding: 15px 0;
    border-radius: 5px;
    border: 0px solid ${theme.accents2};
    background: ${theme.accents1};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
    position: relative;
    font-size: 18px;
    padding-left: 10px;
    color: ${theme.foreground};
    transition: all 0.15s ease;
    width: 100%;
    :focus {
      border: 0px solid ${theme.accents2};
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.08),
        0 1px 3px rgba(0, 0, 0, 0.08);
    }
    ::placeholder {
      color: ${theme.accents3};
    }
  `

  return (
    <form
      css={wrapperStyles}
      action="https://tinyletter.com/laurosilvacom"
      method="post"
      target="popupwindow"
      onSubmit="window.open('https://tinyletter.com/laurosilvacom', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
    >
      <div css={wrapperGroup}>
        <h2>Join the Newsletter</h2>
        <p>
          <label htmlFor="tlemail">Email address</label>
        </p>
        <input
          css={mainInput}
          type="text"
          name="email"
          id="tlemail"
          placeholder="Lauro Silva"
        />
        <br />
        <input type="hidden" value="1" name="embed" />
        <button type="submit" value="Subscribe">
          Subscribe
        </button>
      </div>
    </form>
  )
}
