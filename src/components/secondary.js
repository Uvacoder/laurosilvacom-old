import React from 'react'
import styled from 'styled-components'
import Wave from './wave'

const SecondaryWrapper = styled.div`
  background: ${props => props.theme.color.primary.purple};
  height: 620px;
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  svg {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  svg path {
    fill: #edeff5;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    height: 420px;
  }
`

const SecondaryGroup = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.screen.sm};
  padding: 180px 0px;
  h1 {
    margin: 0;
    color: white;
    font-weight: 900;
    font-size: 68px;
    letter-spacing: -1px;
    line-height: 1;
  }
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 30px;
    line-height: 1.5;
  }

  button {
    font-size: 15px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
    background: ${props => props.theme.color.dark.accent200};
    padding: 9px 20px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    z-index: 100;
    position: relative;
  }
  button:hover {
    color: white;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    background: ${props => props.theme.color.dark.accent100};
    border-color: rgba(255, 255, 255, 255);
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    h1 {
      font-size: 38px;
      letter-spacing: 0px;
    }
    p {
      font-size: 22px;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 150px 20px;
    padding-bottom: 60px;
    h1 {
      font-size: 30px;
      letter-spacing: 0px;
    }
    p {
      font-size: 20px;
    }
  }
  @media (max-width: ${props => props.theme.screen.xm}) {
    padding: 150px 20px;
    padding-bottom: 40px;
    h1 {
      font-size: 22px;
      letter-spacing: 0px;
    }
    p {
      font-size: 16px;
    }
  }
`

const Secondary = ({children}) => (
  <SecondaryWrapper>
    <SecondaryGroup>{children}</SecondaryGroup>
    <Wave />
  </SecondaryWrapper>
)

export default Secondary
