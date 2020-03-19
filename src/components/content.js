import React from 'react';
import styled from 'styled-components';

const Content = ({ children }) => (
  <ContentWrapper>
    <Tutorial>{children}</Tutorial>
  </ContentWrapper>
);
export default Content;

const ContentWrapper = styled.div`
  padding: 0 20px;

  .dark & a {
    color: ${props => props.theme.color.primary.blue};
  }
`;

const Tutorial = styled.div`
  margin: auto;
  max-width: ${props => props.theme.screen.sm};
  font-size: 1rem;
`;
