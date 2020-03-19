/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled from 'styled-components';

const HeroModal = props => (
  <ModalWrapper onClick={props.toggleModal}>
    <EmbedWrapper>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </EmbedWrapper>
  </ModalWrapper>
);

export default HeroModal;

const EmbedWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
  iframe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    padding: 40px;
    opacity: 0;
    animation: HeroAnimation 2s 0.1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
    @media (max-width: ${props => props.theme.screen.sm}) {
      padding: 0px;
    }
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  z-index: 2000;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`;
