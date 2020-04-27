import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Wrapper from '../utils/wrapper'

const Downlaod = () => (
  <Layout>
    <SEO title="Download" />
    <Wrapper>
      <h1>Newsletter 📫</h1>
      <p>
        Listen, I get it, newsletters are the worst. This one is different
        though. One-click unsubscribe anytime.
      </p>
      <iframe
        title="Lauro's Newsletter"
        src="https://laurosilvacom.substack.com/embed"
        height="100px"
        frameBorder="0"
        scrolling="no"
      />
    </Wrapper>
  </Layout>
)

export default Downlaod
