import React from 'react'
import styled from 'styled-components'
import Wave from './wave'

const Hero = ({children}) => (
  <HeroWrapper>
    <HeroGroup>{children}</HeroGroup>
    <Wave />
  </HeroWrapper>
)

export default Hero

const HeroWrapper = styled.div`
  height: 760px;
  background: ${props => props.theme.color.primary.purple};
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  z-index: -1;
  svg {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  svg path {
    fill: #edeff5;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    height: 720px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    height: 620px;
  }
`

const HeroGroup = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.screen.xl};
  padding: 180px 20px;
  h1 {
    margin: 0;
    color: white;
    font-weight: 900;
    font-size: 68px;
    letter-spacing: -1px;
    line-height: 1;
    text-shadow: 0 10px 4px rgba(0, 0, 0, 0.05);
  }
  p {
    color: rgba(255, 255, 255, 0.7) !important;
    font-size: 30px;
    line-height: 1.5;
    max-width: 700px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  button {
    font-size: 16px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    background: ${props => props.theme.color.primary.blue};
    color: ${props => props.theme.color.dark.accent200};
    padding: 12px 20px;
    border-radius: 10px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    line-height: 1;
    z-index: 99;
    position: relative;
    margin-top: 0.2rem;
    padding-top: 0.7rem;
  }
  button:hover {
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 20px;
    transform: translateY(-3px);
    background: white;
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
    padding: 170px 20px;
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
      font-size: 18px;
    }
  }
`
