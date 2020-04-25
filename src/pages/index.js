/* eslint-disable react/button-has-type */
import React from 'react'
import {Link, graphql} from 'gatsby'
import {css} from '@emotion/core'
import Layout from '../components/layout'
import Card from '../components/card'
import SEO from '../components/seo'
import theme from '../config/theme'

const Index = ({data}) => {
  const {edges: tutorials} = data.allMdx

  return (
    <Layout>
      <SEO title="Home" />

      <div>
        <h1>Lauro Silva</h1>
        <p>
          I enjoy building thoughtful software and helping individuals become
          better programmers.
        </p>
      </div>

      <h2
        css={css`
          button {
            background: ${theme.success};
            color: ${theme.foreground};
            border-radius: 4px;
            font-size: 16px;
          }
        `}
      >
        Latest Tutorials{' '}
        <Link to="/blog">
          <button>View All</button>
        </Link>
      </h2>

      {tutorials.map(({node: tutorial}) => (
        <Link key={tutorial.id} to={`${tutorial.frontmatter.slug}`}>
          <Card
            tutorialIcon={tutorial.frontmatter.icon.sharp.fluid}
            tutorialTags={tutorial.frontmatter.tags}
            tutorialTitle={tutorial.frontmatter.title}
          />
        </Link>
      ))}
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
