import React from 'react'
import styled from 'styled-components'

const Content = ({children}) => (
  <ContentWrapper>
    <Tutorial>{children}</Tutorial>
  </ContentWrapper>
)
export default Content

const ContentWrapper = styled.div`
  padding: 0 20px;
  .dark & a {
    color: ${props => props.theme.color.primary.blue};
  }
  code {
    background: rgba(132, 132, 132, 0.25);
    padding: 2px 4px;
    border-radius: 4px;
  }
`

const Tutorial = styled.div`
  margin: auto;
  max-width: ${props => props.theme.screen.sm};
  font-size: 1rem;
  @media (max-width: ${props => props.theme.screen.sm}) {
    p {
      font-size: 18px;
    }
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    p {
      font-size: 16px;
    }
  }
`
