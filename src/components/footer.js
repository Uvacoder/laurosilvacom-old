import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  padding: 20px;
  margin-top: 200px;
  text-align: center;
`

const FooterGroup = styled.h4`
  font-size: 15px;
  letter-spacing: 1px;
  color: ${props => props.theme.color.dark.accent300};
  .dark & {
    color: ${props => props.theme.color.light.accent300};
  }
`

const Footer = () => (
  <FooterWrapper>
    <FooterGroup>
      <a href="https://twitter.com/laurosilvacom" rel="me">
        @laurosilvacom on Twitter
      </a>

      <a href="https://github.com/laurosilvacom" rel="me">
        Github
      </a>

      <a href="mailto:hey@laurosilva.com" rel="me">
        hey@laurosilva.com
      </a>
    </FooterGroup>
  </FooterWrapper>
)

export default Footer
