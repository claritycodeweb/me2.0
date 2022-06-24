import { moveInLeft, moveInRight, fade } from '@styles/animation.style';
import { HeroParalax } from '@styles/common.styles';
import Container from '@styles/container.style';
import React from 'react';
import styled from 'styled-components';

interface IProps {}

const HeroText = styled(Container)`
  position: relative;
  color: white;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

const HeroInfo = styled.div`
  font-size: 2.5rem;
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

const Style = {
  HeroText,
  HeroInfo,
};

const ArticleHero = ({}: IProps) => {
  return (
    <HeroParalax bgUrl={'hero1.jpg'} height={'40vh'}>
      <Style.HeroText>
        <Style.HeroInfo>
          <h1>Latest posts about coding stuff</h1>
          <h3>
            <span>Tech Wall </span>and others
          </h3>
        </Style.HeroInfo>
      </Style.HeroText>
    </HeroParalax>
  );
};

export default ArticleHero;
