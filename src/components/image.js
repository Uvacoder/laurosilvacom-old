import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "lauro.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Img
      fadeIn="true"
      loading="lazy"
      fluid={data.aboutImage.childImageSharp.fluid}
    />
  );
};

export default Image;
