import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Downlaod = () => (
  <Layout>
    <SEO title="Download" />
    <div>
      <h1>Newsletter</h1>
      <p>
        Listen, I get it, newsletters are the worst. This one is different
        though. One-click unsubscribe anytime.
      </p>
    </div>

    <iframe
      title="Lauro's Newsletter"
      src="https://laurosilvacom.substack.com/embed"
      height="100px"
      frameBorder="0"
      scrolling="no"
    />
  </Layout>
)

export default Downlaod
