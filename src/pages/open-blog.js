import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Secondary from '../components/secondary';
import SEO from '../components/seo';

const OpenBlog = () => (
  <Layout>
    <SEO title="Open Blog™" />
    <Secondary>
      <h1>Open Blog™</h1>
      <p>
        This blog is an Open Blog™, which means it fully transparent about it's
        metrics, traffic and code.
      </p>
    </Secondary>
    <AnaliticsWrapper>
      <Title>Traffic</Title>
      <p>
        This website has <span id="pageviews" /> page views in the last month.
      </p>
      <AnaliticsGroup>
        <div
          data-sa-graph-url="https://simpleanalytics.com/laurosilva.com?color=4e01ff"
          data-sa-page-views-selector="#pageviews"
        >
          <iframe
            src="https://simpleanalytics.com/laurosilva.com?color=4e01ff&amp;embed=true"
            id="sa-graph-1"
            scrolling="no"
            style={{ width: '100%', height: '500px', border: 'none' }}
            height="700px"
            title="Traffic"
          />
        </div>
        <script src="https://cdn.simpleanalytics.io/embed.js" />
      </AnaliticsGroup>
    </AnaliticsWrapper>
  </Layout>
);

export default OpenBlog;

const AnaliticsWrapper = styled.div`
  max-width: ${props => props.theme.screen.md};
  margin: auto;
  padding: 20px;
`;

const AnaliticsGroup = styled.div`
  background: ${props => props.theme.color.light.accent100};
  color: ${props => props.theme.color.dark.accent100};
  border-width: 1px;
  border-style: solid;
  border-color: rgb(198, 208, 235);
  box-shadow: rgba(198, 208, 235, 0.5) 0px 10px 20px;
  .dark & {
    background: ${props => props.theme.color.dark.accent200};
    color: ${props => props.theme.color.light.accent100};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 20px;
    border-color: rgba(255, 255, 255, 0.2);
    border-width: 1px;
    border-style: solid;
  }
  position: relative;
  overflow: hidden;
  padding-top: 52.25%;
  border-radius: 10px;
  iframe {
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    padding: 20px;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 0;
`;
