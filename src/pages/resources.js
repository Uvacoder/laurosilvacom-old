import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

function DownloadImage() {
  const data = useStaticQuery(graphql`
    query {
      BackgroundHeroImage: file(relativePath: {eq: "donwload.png"}) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)
  const imageURL = data.BackgroundHeroImage.childImageSharp.fluid.src
  return imageURL
}

export default function Resources() {
  return (
    <Layout>
      <SEO title="Download" />
      Download
      <br /> laurosilva.com Get the source code that powers laurosilva.com. It's
      open source!
    </Layout>
  )
}
