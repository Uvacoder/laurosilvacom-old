/* eslint-disable jsx-a11y/label-has-associated-control */
import {Link} from 'gatsby'
import React, {useState, useEffect} from 'react'
import {FiSun, FiMoon} from 'react-icons/fi'
import styled from 'styled-components'
import {ThemeToggler} from 'gatsby-plugin-dark-mode'
import Logo from '../images/logo.svg'

const Header = () => {
  const [scrolling, setScrolling] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset >= 330) {
      setScrolling(true)
    } else {
      setScrolling(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.addEventListener('scroll', handleScroll)
  })

  return (
    <ThemeToggler>
      {({theme, toggleTheme}) => (
        <HeaderWrapper className={scrolling ? 'HeaderScrolled' : null}>
          <HeaderGroup>
            <Link to="/">
              <Image alt="logo" src={Logo} />
            </Link>
            <Link to="/tutorials">Tutorials</Link>
            <Link to="/about">About</Link>
            <Link to="/download">Download</Link>
            <Link to="/newsletter">Newsletter</Link>
          </HeaderGroup>

          <label className="tog">
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />
            <span>{theme === 'dark' ? <FiSun /> : <FiMoon />}</span>
          </label>
        </HeaderWrapper>
      )}
    </ThemeToggler>
  )
}

export default Header

const Image = styled.img`
  width: 80px;
  border-radius: 0;
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 70px;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    width: 60px;
  }
`

const HeaderWrapper = styled.div`
  background: ${props => props.theme.color.primary.purple};
  margin: auto;
  position: fixed;
  padding: 20px 0;
  width: 100%;
  z-index: 100;
  a {
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
  }
  &.HeaderScrolled {
    background: ${props => props.theme.color.primary.purple};
    backdrop-filter: blur(20px);
  }
  a {
    color: ${props => props.theme.color.light.accent200};
  }
  a:hover {
    color: ${props => props.theme.color.light.accent100};
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
    animation: HeroAnimation;
    svg {
      stroke: white;
      transition: opacity 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0s,
        transform 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
      opacity: 0.7;
      transform: rotate(360deg);
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
      margin-top: -33px;
    }
  }
`

const HeaderGroup = styled.div`
  max-width: ${props => props.theme.screen.md};
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  justify-items: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    a:nth-child(4) {
      display: none;
    }
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    a:nth-child(4) {
      display: none;
    }
    a:nth-child(3) {
      display: none;
    }
  }
`
