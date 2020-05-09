/* eslint-disable react/button-has-type */
import React from 'react'
import {Link, graphql} from 'gatsby'
import {css} from '@emotion/core'
import Image from 'gatsby-image'
import Layout from '../components/layout'
import Card from '../components/card'
import SEO from '../components/seo'
import Grid from '../utils/grid'
import Wrapper from '../utils/wrapper'
import theme from '../config/theme'

export default function SearchPage({data}) {
  const allContent = data.allMdx.edges

  const emptyQuery = ''
  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery,
  })

  // credit: https://www.aboutmonica.com/blog/create-gatsby-blog-search-page#final-code
  const handleInputChange = event => {
    const query = event.target.value

    // this is how we get all of our pages
    const pages = data.allMdx.edges || []
    // return all filtered pages
    const filteredData = pages.filter(page => {
      // destructure data from page frontmatter
      const {title, tags, lead} = page.node.frontmatter

      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags
        // contains the query string

        lead.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        tags
          .join('') // convert tags from an array to string
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    })
    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      filteredData, // with filtered data from pages.filter(page => (//filteredData)) above
    })
  }

  const {filteredData, query} = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const pages = hasSearchResults ? filteredData : allContent

  const inputStyle = css`
    width: 98%;
    padding: 20px 0;
    border-radius: 3px;
    border: 1px solid ${theme.accents4};
    background: #1d3247;
    position: relative;
    box-shadow: 0 0 8px #05121f;
    font-size: 18px;
    padding-left: 10px;
    color: ${theme.accents1};
    :focus {
      border: 1px solid ${theme.accents3};
    }
    ::placeholder {
      color: ${theme.accents3};
    }
  `

  const inputWrapper = css`
    h2 {
      margin-top: 0;
    }
  `

  return (
    <Layout>
      <SEO title="Writing" />

      <Wrapper>
        <div css={inputWrapper}>
          <h2>Search</h2>
          <input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            css={inputStyle}
            type="text"
            aria-label="Search"
            placeholder="Type to filter pages..."
            onChange={handleInputChange}
          />
          <p>Total {pages.length}</p>
        </div>
      </Wrapper>

      <Grid>
        {pages.map(({node: page}) => (
          <Link key={page.id} to={`/${page.frontmatter.slug}`}>
            <Card
              tutorialIcon={page.frontmatter.icon.sharp.fluid}
              tutorialTags={page.frontmatter.tags}
              tutorialTitle={page.frontmatter.title}
            />
          </Link>
        ))}
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
  query WritingPage {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
            lead
            tags
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
