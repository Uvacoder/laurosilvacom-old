import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: {eq: "lauro.png"}) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ImageWrapper>
      <Img fluid={data.aboutImage.childImageSharp.fluid} />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  margin-top: -250px;
  margin-bottom: 60px;
  border-radius: 10px;
  box-shadow: rgba(198, 208, 235, 0.5) 0px 30px 60px;
  .gatsby-image-wrapper {
    border-radius: 10px;
  }
  .dark & {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 30px 60px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: -150px;
  }
`

export default Image
