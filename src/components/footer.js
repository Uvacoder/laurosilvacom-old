import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background: ${props => props.theme.color.dark.accent200};

  padding: 20px;
  margin-top: 200px;
  text-align: center;
`;

const FooterGroup = styled.div`
  max-width: ${props => props.theme.screen.md};
  color: ${props => props.theme.color.light.accent200};
  margin: auto;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterGroup>© Lauro Silva, LLC. All rights reserved.</FooterGroup>
  </FooterWrapper>
);

export default Footer;
