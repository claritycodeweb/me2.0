import MainButton from '@components/Buttons/MainButton';
import { moveInLeft, moveInRight, fade } from '@styles/animation.style';
import Container from '@styles/container.style';
import Image from 'next/image';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import avatar from './avatar.png';
import { FaAngleDown } from 'react-icons/fa';
import { HeroParalax } from '@styles/common.styles';

interface IProps {}

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
    > span {
      background-color: ${({ theme }) => theme.palette.accent.primary};
      border-radius: 4px;
      color: ${({ theme }) => theme.palette.background.default};
      padding: 1rem;
      margin-right: 1rem;
      ${({ theme }) => theme.breakpoints.down('desktop')`
        display: inline-block;
        margin-bottom: 1.25rem
      `}
    }
  }

  ${({ theme }) => theme.breakpoints.down('desktop')`
   width: 100%;
   > h3, h1 {
    animation: ${fade} 1.5s ease-out;
   }
  `}
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
  ${({ theme }) => theme.breakpoints.down('desktop')`
    display: none;
  `}
`;

const HeroImage = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 1rem;
  border-radius: 50%;
  overflow: hidden;
  opacity: 0;
  animation: ${fade} 1.5s ease-out 1s;
  animation-fill-mode: forwards;
  box-shadow: rgb(0, 0, 0) 0px 0px 40px;
`;

const appearFromTop = keyframes`
    0% {   
        transform: translate(-50%,-3rem);
        opacity: 0;
    }
    50% {
        transform: translate(-50%, 0);
        opacity: 1;
    }
    75% {
        transform: translate(-50%, 0);
        opacity: 1;
    }
    100% {
        transform: translate(-50%,0);
        opacity: 0;
    }
`;

const ScrollButton = styled(MainButton)`
  border-radius: 50%;
  padding: 1.8rem;
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 10;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.palette.background.default};
  animation: ${appearFromTop} 2s ease-out infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

const Style = {
  HeroText,
  HeroInfo,
  HeroQuote,
  HeroImage,
};

const HomeHero = ({}: IProps) => {
  const scroll = () => {
    window.scrollTo({
      top: window.innerHeight - 90,
      behavior: 'smooth',
    });
  };
  return (
    <HeroParalax bgUrl="/hero.jpg" height={'80vh'}>
      <Container>
        <Style.HeroText>
          <Style.HeroInfo>
            <span>Hi</span>
            <h1>I&apos;m Rafał</h1>
            <h3>
              <span>Full-stack Web Developer </span>and Designer
            </h3>
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
      <ScrollButton onClick={scroll}>
        <FaAngleDown size={25} />
      </ScrollButton>
    </HeroParalax>
  );
};

export default HomeHero;
