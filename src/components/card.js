import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

const Card = props => (
  <CardWrapper>
    <CardContent>
      <TutorialIcon>
        <Image fluid={props.tutorialIcon} />
      </TutorialIcon>
      <TutorialText>
        <TutorialTitle>{props.tutorialTitle}</TutorialTitle>
      </TutorialText>
    </CardContent>
  </CardWrapper>
);

export default Card;

const TutorialText = styled.div`
  padding-left: 10px;
  align-self: auto;
`;

const CardWrapper = styled.div`
  background: ${props => props.theme.color.light.accent100};
  color: ${props => props.theme.color.dark.accent100};
  box-shadow: ${props => props.theme.shadow.defaul};
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 10px;
  padding: 20px;
  grid-gap: 10px;
  transition: transform 160ms;
  transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(198, 208, 235);
  height: 110px;
  .dark & {
    background: ${props => props.theme.color.dark.accent200};
    color: ${props => props.theme.color.light.accent100};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 20px;
    border-color: rgba(255, 255, 255, 0.2);
    border-width: 1px;
    border-style: solid;
  }
  .dark & :hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 30px 60px;
  }
  .gatsby-image-wrapper {
    transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  }
  :hover {
    box-shadow: ${props => props.theme.shadow.hover};
    transform: scale(1.01);
  }
  img {
    border-radius: 0px;
  }
  .gatsby-resp-image-wrapper {
    border-radius: 0px;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    height: 100px;
  }
`;

const TutorialIcon = styled.div`
  width: 50px;
  align-self: center;
`;

const CardContent = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-gap: 20px;
  align-items: center;
`;

const TutorialTitle = styled.h3`
  margin: 0;
  line-height: 1.01em;
  font-weight: 800;

  @media (max-width: ${props => props.theme.screen.xs}) {
    font-size: 18px;
  }
`;
