import React from 'react';

import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Secondary from '../components/secondary';

const DownloadImage = () => {
  const data = useStaticQuery(graphql`
    query {
      BackgroundHeroImage: file(relativePath: { eq: "donwload.png" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `);
  const imageURL = data.BackgroundHeroImage.childImageSharp.fluid.src;
  return imageURL;
};

const Downlaod = () => (
  <Layout>
    <SEO title="Download" />
    <HeroWrapper>
      <Secondary />
      <HeroCard>
        <CardWrapper>
          <Title>
            Download
            <br /> laurosilva.com
          </Title>
          <Text>
            Get the source code that powers laurosilva.com. It's open source!
          </Text>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/laurosilvacom/laurosilva.com"
          >
            <Button>Downlaod</Button>
          </a>
        </CardWrapper>
      </HeroCard>
    </HeroWrapper>
  </Layout>
);

export default Downlaod;

const HeroWrapper = styled.div``;

const HeroCard = styled.div`
  padding: 20px;
  margin-top: -450px;
  position: relative;
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: -300px;
  }
`;

const CardWrapper = styled.div`
  background: linear-gradient(
        95.65deg,
        rgb(10, 10, 36) 13.2%,
        rgba(10, 10, 36, 0.9) 55.88%,
        rgba(10, 10, 36, 0.8) 97.88%
      )
      center center / cover,
    url(${DownloadImage}) no-repeat;
  backdrop-filter: blur(20px);
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  margin: auto;
  max-width: ${props => props.theme.screen.md};
  border-radius: 20px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  width: 100%;
  padding: 40px;
  height: 450px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 40px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  :hover {
    transform: scale(1.03);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 30px 60px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`;

const Title = styled.h1`
  font-size: 60px;
  color: rgba(255, 255, 255, 0.98);
  margin-bottom: 20px;
  font-weight: 800;
  letter-spacing: -1px;
  @media (max-width: ${props => props.theme.screen.md}) {
    font-size: 40px;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    font-size: 30px;
  }
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin: 0px;
  color: rgba(255, 255, 255, 0.8);
  max-width: 400px;
  @media (max-width: ${props => props.theme.screen.md}) {
    font-size: 18px;
  }
`;

const Button = styled.button`
  font-size: 24px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  background: #4e01ff;
  padding: 10px 20px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.4);
  border-radius: 50px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  line-height: 1;
  z-index: 99;
  position: relative;
  margin-top: 0.2rem;
  padding-top: 0.4rem;
  height: 50px;
  width: 250px;
  margin-top: 20px;
  :hover {
    color: ${props => props.theme.color.light.accent100};
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    font-size: 20px;
    width: 200px;
  }
`;
