import { moveInLeft, moveInRight, opacity } from '@styles/animation.style';
import Container from '@styles/container.style';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import avatar from './avatar.png';
interface IProps {}

const HeroParalax = styled.div`
  position: relative;
  background-image: url(hero.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 80vh;
  width: 100%;
  margin-bottom: 3rem;
  &:before {
    content: '';
    position: absolute;
    background-image: linear-gradient(transparent 30%, rgb(34, 34, 34) 90%);
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 0;
  }
`;

const HeroText = styled.div`
  max-width: 1200px;
  margin: 0px auto;
  position: relative;
  color: white;
  height: 60vh;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

const HeroInfo = styled.div`
  font-size: 2.5rem;
  width: 60%;
  text-align: left;
  > * {
    padding: 1rem 0;
  }
  > h1 {
    animation: ${moveInRight} 1.5s ease-out;
  }

  > h3 {
    animation: ${moveInLeft} 1.5s ease-out;
  }
`;

const HeroQuote = styled.div`
  font-size: 1.8rem;
  width: 40%;
  animation: ${moveInRight} 1.5s ease-out;

  > p {
    &:nth-child(2) {
      padding-top: 0.5rem;
      font-style: italic;
    }
  }
  position: relative;
`;

const HeroImage = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 1rem;
  border-radius: 50%;
  overflow: hidden;
  opacity: 0;
  animation: ${opacity} 1.5s ease-out 1s;
  animation-fill-mode: forwards;
`;

const Style = {
  HeroParalax,
  HeroText,
  HeroInfo,
  HeroQuote,
  HeroImage,
};

const HomeHero = ({}: IProps) => {
  return (
    <Style.HeroParalax>
      <Container>
        <Style.HeroText>
          <Style.HeroInfo>
            <span>Hi</span>
            <h1>I&apos;m Rafał</h1>
            <h3>Full-stack Web Developer and Designer</h3>
          </Style.HeroInfo>
          <Style.HeroQuote>
            <p>
              “Any fool can write code that a computer can understand. Good
              programmers write code that humans can understand.“
            </p>
            <p>- Martin Fowler</p>
            <Style.HeroImage>
              <Image src={avatar} width="50" height="50" alt="Avatar" />
            </Style.HeroImage>
          </Style.HeroQuote>
        </Style.HeroText>
      </Container>
    </Style.HeroParalax>
  );
};

export default HomeHero;
