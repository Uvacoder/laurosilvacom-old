import React from 'react';
import styled from 'styled-components';
import Wave from './wave';

const HeroWrapper = styled.div`
  background: ${props => props.theme.color.primary.purple};
  background-image: radial-gradient(
    100% 50% at 50% 100%,
    rgb(132, 0, 255) 0%,
    transparent 100%
  );
  height: 820px;
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
    fill: #f3f2f8;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    height: 620px;
  }
`;

const HeroGroup = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.screen.md};
  padding: 140px 20px;
  h1 {
    margin: 0;
    color: white;
    font-weight: 700;
    font-size: 72px;
    letter-spacing: -2px;
    line-height: 1;
  }
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 30px;
    line-height: 1.5;
  }

  button {
    font-size: 16px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    background: ${props => props.theme.color.dark.accent200};
    padding: 9px 20px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    z-index: 99;
    position: relative;
  }
  button:hover {
    color: white;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    background: ${props => props.theme.color.dark.accent100};
    border-color: rgba(255, 255, 255, 255);
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 120px 20px;
    h1 {
      font-size: 36px;
      letter-spacing: 0px;
    }
    p {
      font-size: 22px;
    }
  }
`;

const Hero = ({ children }) => (
  <HeroWrapper>
    <HeroGroup>{children}</HeroGroup>
    <Wave />
  </HeroWrapper>
);

export default Hero;
