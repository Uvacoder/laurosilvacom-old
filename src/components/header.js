import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import styled from 'styled-components';
import Logo from '../images/logo.svg';

import ThemeContext from '../context/ThemeContext';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset >= 330) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.addEventListener('scroll', handleScroll);
  });

  return (
    <ThemeContext.Consumer>
      {theme => (
        <HeaderWrapper className={scrolling ? 'HeaderScrolled' : null}>
          <HeaderGroup>
            <Link to="/">
              <Image alt="logo" src={Logo} />
            </Link>
            <Link to="/tutorials">Tutorials</Link>
            <Link to="/about">About</Link>
            <a href="https://laurosilvacom.substack.com/subscribe">
              <button type="button">Newsletter</button>
            </a>
          </HeaderGroup>
          <span role="presentation" onClick={theme.toggleDark}>
            {theme.dark ? <FiSun /> : <FiMoon />}
          </span>
        </HeaderWrapper>
      )}
    </ThemeContext.Consumer>
  );
};

export default Header;

const Image = styled.img`
  width: 75px;
  border-radius: 0;
`;

const HeaderWrapper = styled.div`
  background: ${props => props.theme.color.primary.purple};
  margin: auto;
  position: fixed;
  padding: 15px 0;
  width: 100%;
  z-index: 100;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  a {
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
  }
  &.HeaderScrolled {
    background: ${props => props.theme.color.dark.accent200};
    padding: 15px 0;
    box-shadow: rgb(59, 59, 80) 0px 1px;
  }
  a {
    color: ${props => props.theme.color.light.accent200};
  }
  a:hover {
    color: ${props => props.theme.color.light.accent100};
  }

  button {
    font-size: 16px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    background: ${props => props.theme.color.dark.accent200};
    padding: 6px 20px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  button:hover {
    color: white;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    background: ${props => props.theme.color.dark.accent100};
    border-color: rgba(255, 255, 255, 255);
  }

  &.HeaderScrolled {
    button {
      background: rgba(78, 1, 255, 0.85);
    }
    button:hover {
      background: ${props => props.theme.color.primary.purple};
      color: rgba(255, 255, 255, 255);
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 15px 0;
  }
  span {
    position: fixed;
    font-size: 19px;
    top: 0px;
    right: 10px;
    margin-top: -27px;
    cursor: pointer;
    user-select: none;
    z-index: 101;
    padding: 50px 10px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    svg {
      stroke: white;
      transition: opacity 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0s,
        transform 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
      transform: rotate(360deg);
      opacity: 0.7;
    }
    &:hover {
      svg {
        opacity: 1;
      }
    }

    .dark & {
      svg {
        transition: opacity 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0s,
          transform 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
        transform: rotate(0deg);
      }
    }
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    span {
      margin-top: -27px;
    }
  }
`;

const HeaderGroup = styled.div`
  max-width: ${props => props.theme.screen.md};
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  justify-items: center;
  @media (max-width: ${props => props.theme.screen.sm}) {
    a:nth-child(5) {
      display: none;
    }
  }
`;
