import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Secondary from '../components/secondary'

const Downlaod = () => (
  <Layout>
    <SEO title="Download" />
    <Secondary>
      <h1>Newsletter</h1>
      <p>
        Listen, I get it, newsletters are the worst. This one is different
        though. One-click unsubscribe anytime.
      </p>
    </Secondary>
    <IframeWrapper>
      <IframeGroup>
        <iframe
          title="Lauro's Newsletter"
          src="https://laurosilvacom.substack.com/embed"
          height="100px"
          frameBorder="0"
          scrolling="no"
        />
      </IframeGroup>
    </IframeWrapper>
  </Layout>
)

export default Downlaod

const IframeWrapper = styled.div`
  text-align: center;
  margin-top: -200px;
  z-index: 1000;
  position: relative;
  padding: 20px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: -130px;
  }
`

const IframeGroup = styled.div`
  max-width: 600px;
  margin: auto;
  padding-top: 20px;
  background: ${props => props.theme.color.light.accent100};
  color: ${props => props.theme.color.dark.accent100};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 60px;
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(198, 208, 235);
  border-radius: 10px;
  .dark & {
    background: ${props => props.theme.color.dark.accent200};
    color: ${props => props.theme.color.light.accent100};
    box-shadow: rgba(0, 0, 0, 0.5) 0px 30px 60px;
    border-color: rgba(255, 255, 255, 0.2);
    border-width: 1px;
    border-style: solid;
  }
`
