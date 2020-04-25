import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const OpenBlog = () => (
  <Layout>
    <SEO title="Open Blog™" />

    <div>
      <h1>Open Blog™</h1>
      <p>
        This blog is an Open Blog™, which means it fully transparent about it's
        metrics, traffic and code.
      </p>

      <p>
        This website has <span id="pageviews" /> page views in the last month.
      </p>

      <iframe
        src="https://simpleanalytics.com/laurosilva.com?color=4e01ff&amp;embed=true"
        id="sa-graph-1"
        scrolling="no"
        style={{width: '100%', height: '500px', border: 'none'}}
        height="700px"
        title="Traffic"
      />

      <script src="https://cdn.simpleanalytics.io/embed.js" />
    </div>
  </Layout>
)

export default OpenBlog
