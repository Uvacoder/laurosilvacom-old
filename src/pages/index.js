/* eslint-disable react/button-has-type */
import React from 'react'
import {Link, graphql} from 'gatsby'
import {css} from '@emotion/core'
import Layout from '../components/layout'
import Card from '../components/card'
import SEO from '../components/seo'
import theme from '../config/theme'
import Grid from '../utils/grid'

const Index = ({data}) => {
  const {edges: tutorials} = data.allMdx

  const Hero = css`
    padding: 0 20px;
    background: ${theme.primary};
    padding-bottom: 100px;
  `
  const HeroWrapper = css`
    margin: auto;
    text-align: center;
    padding-top: 40px;
    animation: HeroAnimation 2s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
    opacity: 0;
    h1 {
      color: ${theme.accents1};
      font-size: 50px;
      line-height: 1;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    p {
      margin-top: 10px;
      opacity: 0.9;
      max-width: 620px;
      margin: auto;
      font-size: 22px;
      line-height: 150%;
      color: ${theme.accents1};
      opacity: 0.6;
    }
    @media (max-width: 620px) {
      h1 {
        font-size: 35px;
      }
      p {
        font-size: 18px;
      }
    }
  `
  return (
    <Layout>
      <SEO title="Home" />

      <div css={Hero}>
        <div css={HeroWrapper}>
          <h1>Hey, I'm Lauro</h1>
          <p>
            I enjoy building thoughtful software and helping individuals become
            better programmers.
          </p>
        </div>
      </div>

      <Grid>
        <h2>Tutorial</h2>
        {tutorials.map(({node: tutorial}) => (
          <Link key={tutorial.id} to={`/${tutorial.frontmatter.slug}`}>
            <Card
              tutorialIcon={tutorial.frontmatter.icon.sharp.fluid}
              tutorialTitle={tutorial.frontmatter.title}
              tutorialLead={tutorial.frontmatter.lead}
              tutorialImage={tutorial.frontmatter.image.sharp.fluid}
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
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "//tutorials//"}}
      limit: 6
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            slug
            tags
            date
            lead
            image {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            icon {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
