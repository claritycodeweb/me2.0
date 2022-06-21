import MainButton from '@components/Buttons/MainButton';
import { Row, Col } from '@components/FlexboxGrid';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import me from './me.jpg';

interface IProps {}

const HomeWrapper = styled.div`
  margin: 10rem 0;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f8fa;
  color: ${({ theme }) => theme.palette.background.default};
  ${({ theme }) => theme.mixins.fontSize({ desktop: 20 })}
  box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px, rgb(0 0 0 / 25%) 0px 1px 6px;
  border-radius: 5px;
  min-height: 120px;
  > p {
    font-size: 6rem;
    padding: 0.5rem 1rem;
    &:first-child {
      font-weight: bold;
      border-right: 1px solid ${({ theme }) => theme.palette.background.default};
    }
    &:last-child {
      font-size: 2rem;
      text-transform: uppercase;
    }
  }
  transition: all 0.5s;
  &:hover {
    transform: translateY(-1rem) scale(1.02);
  }
`;

const HomeMeInfoSection = styled.div`
  padding-top: 4rem;
  font-size: 1.6rem;
  line-height: 2.2rem;
  > h2 {
    padding-bottom: 0.5rem;
    border-bottom: 3px solid ${({ theme }) => theme.palette.accent.primary};
    margin-bottom: 2rem;
    display: inline-block;
    font-weight: normal;
    font-size: 3rem;
  }

  > p,
  h5 {
    padding-bottom: 1.5rem;
    font-size: 1.6rem;
  }
`;

const HomeMeImageSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  gap: 2rem;
  img {
    border-radius: 50%;
    border: 2px solid white !important;
  }
  > p {
    > button {
      &:first-child {
        color: ${({ theme }) => theme.palette.background.default};
        background-color: #f7f8fa;
      }
      margin: 0.5rem;
      border-radius: 4px;
    }
  }
`;

const Style = {
  HomeWrapper,
  HomeMeInfoSection,
  HomeMeImageSection,
  Item,
};

const HomeAbout = ({}: IProps) => {
  return (
    <Style.HomeWrapper>
      <Row>
        <Col>
          <Style.Item>
            <p>12</p>
            <p>
              Years<br></br> Experience
            </p>
          </Style.Item>
        </Col>
        <Col>
          <Style.Item>
            <p>100+</p>
            <p>
              Completed <br></br> Projects
            </p>
          </Style.Item>
        </Col>
        <Col>
          <Style.Item>
            <p>100%</p>
            <p>
              Happy<br></br> EMPLOYERS
            </p>
          </Style.Item>
        </Col>
      </Row>
      <Row>
        <Col tablet={12}>
          <Style.HomeMeInfoSection>
            <h2>About Me</h2>
            <h5>Full-Stack Web Developer</h5>
            <p>
              I&apos;ve got my bachelor&apos;s degree in computer science in
              2010 and since that time I&apos;ve been working for software
              companies of all sizes from all around the globe as a software
              developer. I&apos;m specialize in full-stack, highly scalable,
              real-time JavaScript/Node.js and ASP.net applications, with past
              experience in Java.
            </p>
            <p>
              Currently, I enjoys working as a full-stack developer in
              node.js/javascript/asp.net projects, where my experience and my
              deep understanding of architecture and theory are most impactful.
            </p>
            <p>Polish - native</p>
            <p>
              English - professional working proficiency, permanent practice
            </p>
          </Style.HomeMeInfoSection>
        </Col>
        <Col tablet={12}>
          <Style.HomeMeImageSection>
            <Image src={me} alt="Rafał Pisarczyk" width="200" height="200" />
            <p>
              <MainButton>Hire Me</MainButton>
              <MainButton
                onClick={() => {
                  window.open(
                    'https://drive.google.com/file/d/1SiWsdQXGpWJMvE_tWpfaivPkQTkhB456/view?usp=sharing',
                    '_blank'
                  );
                }}
              >
                Download CV
              </MainButton>
            </p>
          </Style.HomeMeImageSection>
        </Col>
      </Row>
    </Style.HomeWrapper>
  );
};

export default HomeAbout;
