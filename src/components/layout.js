import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import Global from '../styles/global';
import theme from '../styles/theme';
import Header from './header';
import Footer from './footer';
import ThemeContext from '../context/ThemeContext';

const Layout = ({ children }) => (
  <ThemeContext.Consumer>
    {heroTheme => (
      <ThemeProvider theme={theme}>
        <Helmet>
          <body className={heroTheme.dark ? 'dark' : 'light'} />
        </Helmet>
        <Global />
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    )}
  </ThemeContext.Consumer>
);

export default Layout;
