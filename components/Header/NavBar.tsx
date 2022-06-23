import Container from '@styles/container.style';
import React from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  open: boolean;
}

const NavBarWrapper = styled.div<{ visible: boolean }>`
  position: absolute;
  left: 0;
  top: 100%;

  box-shadow: rgb(0 0 0 / 45%) 0px 0px 40px;
  background-color: white;

  width: 100%;

  a {
    opacity: 0;
    font-size: 1.6rem;
    position: relative;
    display: block;
    padding: 1.5rem 1.5rem;

    transition: opacity 150ms ease-in-out;
    &:hover {
      &::before {
        transform: scale(1, 1);
      }
    }

    &::before {
      content: '';
      display: block;
      height: 1px;
      background: black;
      position: absolute;
      bottom: 0.5em;
      left: 0;
      right: 0;
      transform: scale(0, 1);
      transition: transform 400ms ease-in-out;
    }

    ${({ visible }) =>
      visible &&
      css`
        opacity: 1;
        transition: opacity 250ms ease-in-out 250ms;
      `}
  }

  transition: transform 400ms ease-in-out;
  transform-origin: top;
  transform: scale(1, 0);

  ${({ visible }) =>
    visible &&
    css`
      transform: scale(1, 1);
    `}

  ${({ theme }) => theme.breakpoints.down('mobile')`
     ul {
       flex-direction: column;
     }   
   `}
`;
const Style = {
  NavBarWrapper,
};
const NavBar = ({ open }: IProps) => {
  return (
    <Style.NavBarWrapper visible={open}>
      <Container>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#home-about">About</a>
            </li>
            <li>
              <a href="#home-experience">Experience</a>
            </li>
            <li>
              <a href="#home-blog">Blog</a>
            </li>
            <li>
              <a href="#home-contact">Contact</a>
            </li>
          </ul>
        </nav>
      </Container>
    </Style.NavBarWrapper>
  );
};

export default NavBar;
