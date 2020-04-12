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
    <FooterGroup>© Lauro Silva, LLC. All rights reserved.</FooterGroup>
  </FooterWrapper>
)

export default Footer
