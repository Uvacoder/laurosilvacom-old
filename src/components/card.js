import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

function Card(props) {
  // Adding state to the copy text
  const defaultCopyText = 'Copy URL';
  const [copyText, setCopytext] = React.useState(defaultCopyText);

  // Setting a timer when to set state
  React.useEffect(() => {
    let current = true;
    if (copyText !== defaultCopyText) {
      setTimeout(() => {
        if (current) {
          setCopytext(defaultCopyText);
        }
      }, 3000);
    }
    return () => (current = false);
  }, [copyText]);

  // Get site URL
  const data = useStaticQuery(graphql`
    query getSiteUrl {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  // Create Tutorial URL with site URL
  const TutorialURL = `${`${data.site.siteMetadata.siteUrl}${props.tutorialSlug}`}`;

  // Targets and then copies the item
  function copy(event) {
    event.preventDefault();
    // Passing TutorialURL
    navigator.clipboard.writeText(TutorialURL).then(
      () => {
        setCopytext('Copied');
      },
      () => {
        setCopytext('Error copying URL');
      }
    );
  }

  return (
    <CardWrapper>
      <CardContent>
        <TutorialIcon>
          <Image fluid={props.tutorialIcon} />
        </TutorialIcon>
        <TutorialText>
          <TutorialTitle>{props.tutorialTitle}</TutorialTitle>
        </TutorialText>
        <Button type="button" onClick={copy}>
          {copyText}
        </Button>
      </CardContent>
    </CardWrapper>
  );
}

export default Card;

const Button = styled.button`
  text-align: center;
  display: inline-block;
  padding: 0.5rem 0.75rem;
  background: ${props => props.theme.color.primary.blue};
  color: ${props => props.theme.color.dark.accent200};
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.9;
  :hover {
    background: ${props => props.theme.color.primary.purple};
    color: ${props => props.theme.color.light.accent200};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    opacity: 1;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 100%;
  }
`;

const TutorialText = styled.div`
  padding-left: 10px;
  align-self: auto;
`;

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
`;

const TutorialIcon = styled.div`
  width: 50px;
  align-self: center;
`;

const CardContent = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 100px;
  grid-gap: 20px;
  align-items: center;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    text-align: center;
  }
`;

const TutorialTitle = styled.h3`
  margin: 0;
  line-height: 1.01em;
  font-weight: 800;

  @media (max-width: ${props => props.theme.screen.xs}) {
    font-size: 26px;
  }
`;
