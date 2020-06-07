/* eslint-disable react/button-has-type */
import React from 'react'
import {Link, graphql} from 'gatsby'
import {css} from '@emotion/core'
import Layout from '../components/layout'
import Card from '../components/card'
import SEO from '../components/seo'
import theme from '../config/theme'
import Grid from '../utils/grid'
import Newsletter from '../components/newsletter'

const Index = ({data}) => {
  const {edges: tutorials} = data.allMdx

  const NewsletterWrapper = css`
    max-width: 720px;
    margin: auto;
    padding: 0 20px;
  `

  const Hero = css`
    padding: 0 20px;
    background: ${theme.primary};
    padding-bottom: 100px;
  `
  const HeroWrapper = css`
    margin: auto;
    text-align: center;
    padding-top: 40px;
    animation: HeroAnimation 2s 0.4s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
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
  const allTutorials = css`
    align-items: center;
    display: flex;
    height: 56px;
    max-width: 720px;
    margin: 50px 0;
    margin-bottom: 10px;
    a {
      align-items: center;
      display: flex;
      justify-content: flex-end;
      margin-left: auto;
    }
    button {
      border-radius: 4px;
      font-size: 16px;
      background-color: transparent;
      border: 1px solid ${theme.success};
      background: ${theme.success};
      color: ${theme.accents1};
      transition: transform 160ms;
      cursor: pointer;
      padding: 6px 20px;
      :hover {
        transform: scale(1.05);
      }
    }
    h2 {
      font-size: 30px;
      line-height: 1.4;
      margin-top: 0;
      margin-bottom: 0;
    }
  `

  return (
    <Layout>
      <SEO title="Home" />

      <div css={Hero}>
        <div css={HeroWrapper}>
          <h1>Hey, I'm Lauro!</h1>
          <p>
            I enjoy building thoughtful software and helping individuals become
            better programmers.
          </p>
        </div>
      </div>

      <Grid>
        <div css={allTutorials}>
          <h2>Latest Tutorials</h2>
          <Link to="/tutorials">
            <button>View All</button>
          </Link>
        </div>
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
      <div css={NewsletterWrapper}>
        <h2>Newsletter</h2>
        <p>
          I write tutorials. Get an update when something new comes out by
          signing up below! You can always unsubscribe.
        </p>
        <Newsletter />
      </div>
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
