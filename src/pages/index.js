/* eslint-disable react/button-has-type */
import React from 'react'
import {Link, graphql} from 'gatsby'
import {css} from '@emotion/core'
import Layout from '../components/layout'
import Card from '../components/card'
import SEO from '../components/seo'
import theme from '../config/theme'
import Grid from '../utils/grid'
import LauroImage from '../utils/image'

const Index = ({data}) => {
  const {edges: tutorials} = data.allMdx
  const Hero = css`
    padding: 0 20px;
    margin-bottom: 100px;
  `
  const HeroWrapper = css`
    max-width: 720px;
    margin: auto;
    padding-top: 40px;
    h2 {
      color: ${theme.accents1};
      font-size: 30px;
      line-height: 1.4;
      margin-top: 20px;
    }
    p {
      font-size: 22px;
      margin-top: 10px;
    }
  `
  const allPosts = css`
    align-items: center;
    display: flex;
    height: 56px;
    width: 720px;
    margin-bottom: 30px;
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
      border: 2px solid ${theme.accents4};
      color: ${theme.accents3};
      transition: transform 160ms;
      cursor: pointer;
      padding: 6px 20px;
      :hover {
        background: ${theme.accents4};
        transform: scale(1.05);
        box-shadow: 0 0 8px #05121f;
      }
    }
    h2 {
      color: ${theme.accents2};
      color: #fff;
      font-size: 30px;
      line-height: 1.4;
      margin-top: 0;
    }
  `
  return (
    <Layout>
      <SEO title="Home" />

      <div css={Hero}>
        <div css={HeroWrapper}>
          <h2>Welcome to my Digital Garden! 👋🏽</h2>

          <p>
            I'm Lauro Silva! I enjoy building thoughtful software and helping
            individuals become better programmers.
          </p>
          <LauroImage />
        </div>
      </div>

      <Grid>
        <div css={allPosts}>
          <h2>Latest Tutorials 📘</h2>
          <Link to="/blog">
            <button>View All</button>
          </Link>
        </div>
        {tutorials.map(({node: tutorial}) => (
          <Link key={tutorial.id} to={`/${tutorial.frontmatter.slug}`}>
            <Card
              tutorialIcon={tutorial.frontmatter.icon.sharp.fluid}
              tutorialTags={tutorial.frontmatter.tags}
              tutorialTitle={tutorial.frontmatter.title}
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
