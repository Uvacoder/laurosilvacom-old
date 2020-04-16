/* eslint-disable react/button-has-type */
import React from 'react'
import {Link, graphql} from 'gatsby'
import styled, {keyframes} from 'styled-components'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Card from '../components/card'
import Grid from '../components/grid'
import LauroImage from '../components/image'
import Content from '../components/content'
import SEO from '../components/seo'

const Index = ({data}) => {
  const {edges: tutorials} = data.allMdx

  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <h1>Lauro Silva</h1>
        <p>
          I enjoy building thoughtful software and helping individuals become
          better programmers.
        </p>
      </Hero>
      <Content>
        <LauroImage />
      </Content>
      <TitlePadding>
        <TitleWrapper>
          <h2>
            Latest Tutorials{' '}
            <Link to="/tutorials">
              <button>View All</button>
            </Link>
          </h2>
        </TitleWrapper>
      </TitlePadding>
      <Grid>
        {tutorials.map(({node: tutorial}) => (
          <Link
            key={tutorial.id}
            to={`/tutorials/${tutorial.frontmatter.slug}`}
          >
            <Card
              tutorialIcon={tutorial.frontmatter.icon.sharp.fluid}
              tutorialTags={tutorial.frontmatter.tags}
              tutorialTitle={tutorial.frontmatter.title}
              tutorialSlug={`/tutorials/${tutorial.frontmatter.slug}`}
            />
          </Link>
        ))}
      </Grid>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexPage {
    allMdx(
      sort: {fields: frontmatter___tutorialID, order: DESC}
      filter: {fileAbsolutePath: {regex: "//tutorials//"}}
      limit: 3
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            slug
            tags
            tutorialID
            lead
            image {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            icon {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Icon = styled.div`
  width: 70px;
  margin: auto;
  margin-bottom: 25px;
  :hover {
    filter: brightness(1.1) saturate(110%);
  }
`

const RotateIcon = styled.div`
  &.rotateTrue {
    animation: ${rotate} 15s linear infinite;
  }
`

const TitlePadding = styled.div`
  padding: 20px;
`
const TitleWrapper = styled.div`
  max-width: ${props => props.theme.screen.sm};
  margin: auto;
  h2 {
    display: flex;
    align-items: center;
    border-bottom: 0;
    padding-bottom: 0;
    line-height: 0;
  }
  a {
    margin: 0 20px;
  }
  button {
    display: inline-block;
    padding: 0.5rem 0.75rem;
    background: #ffffff;
    border-radius: 8px;
    color: #5f5f5f;
    font-size: 1rem;
    font-weight: 500;
    margin: 0rem 0 0 2rem;
    .dark & {
      background: #3b3b50;
      color: #000000;
    }
    :hover {
      transform: scale(1.05);
    }
  }
  button:hover {
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    opacity: 1;
  }
  @media (max-width: 680px) {
    h2 {
      font-size: 1.3rem;
    }
  }
`
