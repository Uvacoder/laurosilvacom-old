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
  div > ul {
    border-color: rgb(198, 208, 235);
    box-shadow: rgba(198, 208, 235, 0.5) 0px 10px 20px;
    background: rgb(251, 251, 251);
    border-radius: 10px;
    padding-top: 30px;
    padding-bottom: 50px;
    border: 1px solid rgb(198, 208, 235);
  }
  .dark & div > ul {
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 20px;
    background: #0a0a24;
    border: 1px solid rgb(59, 59, 80);
  }
  .dark & a {
    color: ${props => props.theme.color.primary.blue};
  }
`;

const Tutorial = styled.div`
  margin: auto;
  max-width: ${props => props.theme.screen.sm};
  font-size: 1rem;
`;
