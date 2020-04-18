import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby'

function Card(props) {
  return (
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
  )
}

export default Card

const TutorialText = styled.div`
  padding-left: 10px;
  align-self: auto;
`

const CardWrapper = styled.div`
  background: ${props => props.theme.color.light.accent100};
  color: ${props => props.theme.color.dark.accent100};
  box-shadow: ${props => props.theme.shadow.defaul};
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(198, 208, 235);
  padding: 30px 20px;
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
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  :hover {
    box-shadow: ${props => props.theme.shadow.hover};
    transform: scale(1.01);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  img {
    border-radius: 0px;
  }
  .gatsby-resp-image-wrapper {
    border-radius: 0px;
  }
`

const TutorialIcon = styled.div`
  width: 70px;
  align-self: center;
`

const CardContent = styled.div`
  display: grid;
  grid-template-columns: 70px 2fr;
  grid-gap: 30px;
  align-items: center;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    text-align: center;
  }
`

const TutorialTitle = styled.h3`
  margin: 0;
  line-height: 1.01em;
  font-weight: 800;

  @media (max-width: ${props => props.theme.screen.xs}) {
    font-size: 26px;
  }
`
