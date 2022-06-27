import MainLink from '@components/Links/MainLink';
import { moveInLeft, moveInRight, fade } from '@styles/animation.style';
import { HeroParalax } from '@styles/common.styles';
import Container from '@styles/container.style';
import Link from 'next/link';
import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import styled from 'styled-components';
import months from 'utils/months';

interface IProps {
  bgUrl?: string;
  title?: string;
  subtitle?: string;
  author?: string;
  date: number;
}

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
  > p {
    font-size: 1.5rem;
    font-style: italic;
    > span {
      > a {
        color: rgb(65, 173, 221);
        cursor: pointer;
      }
    }
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

const BackToList = styled(MainLink)`
  font-size: 1.6rem;
  background-color: transparent;
  box-shadow: none;
  color: white;
  padding: 0;
  align-items: center;
  display: flex;
  color: ${({ theme }) => theme.palette.accent.primary};
`;

const Style = {
  HeroText,
  HeroInfo,
};

const ArticleSingleHero = ({
  bgUrl,
  title,
  subtitle,
  author,
  date,
}: IProps) => {
  const publishAt = new Date(date);
  return (
    <HeroParalax bgUrl={bgUrl || '/hero1.jpg'} height={'40vh'}>
      <Style.HeroText>
        <Style.HeroInfo>
          <BackToList href={`/articles`}>
            <FaAngleLeft />
            See all articels
          </BackToList>
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
          <p>
            <Link href={'/#home-about'}>
              <span>
                <a>{author}</a> posted on{' '}
                {months[publishAt.getMonth()].slice(0, 3)},{' '}
                {publishAt.getFullYear()}
              </span>
            </Link>
          </p>
        </Style.HeroInfo>
      </Style.HeroText>
    </HeroParalax>
  );
};

export default ArticleSingleHero;
