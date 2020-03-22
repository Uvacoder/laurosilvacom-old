import React from 'react';
import { ThemeProvider } from 'styled-components';
import Global from '../styles/global';
import theme from '../styles/theme';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global />
    <Header />
    {children}
    <Footer />
  </ThemeProvider>
);

export default Layout;
