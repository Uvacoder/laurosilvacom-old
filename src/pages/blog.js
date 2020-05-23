/* eslint-disable react/button-has-type */
import React from 'react'
import {Link, graphql} from 'gatsby'
import {css} from '@emotion/core'
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
    border-radius: 5px;
    border: 0px solid ${theme.accents2};
    background: ${theme.accents1};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
    position: relative;
    font-size: 18px;
    padding-left: 10px;
    color: ${theme.foreground};
    transition: all 0.15s ease;
    :focus {
      border: 0px solid ${theme.accents2};
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.08),
        0 1px 3px rgba(0, 0, 0, 0.08);
    }
    ::placeholder {
      color: ${theme.accents2};
    }
  `

  const inputWrapper = css`
    h1 {
      margin-top: 0;
      margin-bottom: 10px;
    }
    p {
      color: ${theme.accents3};
    }
  `

  return (
    <Layout>
      <SEO title="Writing" />

      <Wrapper>
        <div css={inputWrapper}>
          <h1>Tutorials</h1>
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
        {pages.map(({node: tutorial}) => (
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
