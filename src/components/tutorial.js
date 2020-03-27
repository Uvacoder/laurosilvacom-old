import React from 'react';
import styled from 'styled-components';

const TutorialHeader = ({ children }) => (
  <TutorialWrapper>
    <TutorialGroup>{children}</TutorialGroup>
  </TutorialWrapper>
);

export default TutorialHeader;

const TutorialWrapper = styled.div`
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
    fill: #fff;
  }
`;

const TutorialGroup = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.screen.md};
  padding: 140px 0px;
  h1 {
    margin: 0;
    font-weight: 900;
    font-size: 68px;
    letter-spacing: -1px;
    line-height: 1;
  }
  p {
    font-size: 30px;
    line-height: 1.5;
  }

  button {
    font-size: 16px;
    font-weight: 600;

    background: ${props => props.theme.color.dark.accent200};
    padding: 12px 20px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    line-height: 1;
    z-index: 99;
    position: relative;
    margin-top: 0.2rem;
    padding-top: 0.7rem;
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
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 120px 20px;
    padding-bottom: 60px;
    h1 {
      font-size: 30px;
      letter-spacing: 0px;
    }
  }
  @media (max-width: ${props => props.theme.screen.xm}) {
    padding: 120px 20px;
    padding-bottom: 40px;
    h1 {
      font-size: 22px;
      letter-spacing: 0px;
    }
  }
  }
`;
