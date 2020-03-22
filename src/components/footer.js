import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  padding: 20px;
  margin-top: 200px;
  text-align: center;
`;

const FooterGroup = styled.div`
  max-width: ${props => props.theme.screen.md};
  margin: auto;
  font-size: 14px;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterGroup>© Lauro Silva, LLC. All rights reserved.</FooterGroup>
  </FooterWrapper>
);

export default Footer;
