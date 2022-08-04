import MainButton from '@components/Buttons/MainButton';
import { Row, Col } from '@components/FlexboxGrid';
import {
  fadeIn,
  HomeSectionHeader,
  HomeSectionSubHeader,
  SectionWrapper,
} from '@styles/common.styles';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import pinRef from 'utils/pinRef';
import me from './me.jpg';

interface IProps {}

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
  @media (hover: hover) {
    &:hover {
      transform: translateY(-1rem) scale(1.02);
    }
  }
  ${fadeIn}
  transition: all 0.5s;
`;

const HomeMeInfoSection = styled.div`
  padding-top: 4rem;
  font-size: 1.6rem;
  line-height: 2.2rem;
  > p,
  h5 {
    padding-bottom: 1.5rem;
    font-size: 1.6rem;
  }
  ${fadeIn}
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
    filter: sepia(0.8);
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
  ${fadeIn}
`;

const Style = {
  HomeMeInfoSection,
  HomeMeImageSection,
  Item,
};

export type Ref = HTMLDivElement;

const HomeAbout = ({}: IProps) => {
  const refs = useRef(new Array<HTMLDivElement>());

  const hireMe = () => {
    const emailTo = 'rafalpisarczyk@gmail.com';
    const emailSub = 'Hire Rafał';
    const emailBody = 'Body here';
    window.open(
      `mailto:${emailTo}?&subject=${emailSub}&body=${emailBody}`,
      '_self'
    );
  };

  /*
    TODO: to refactor create wrapper componet to use single instance of observer and keep visibility in state 
  */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (enteries) => {
        enteries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add('fade-appear');
        });
      },
      { threshold: 0.5 }
    );

    for (const ref of refs.current) {
      observer.observe(ref);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper id="home-about">
      <Row>
        <Col>
          <Style.Item ref={(element) => pinRef(refs, element)}>
            <p>{new Date().getFullYear() - 2011}</p>
            <p>
              Years<br></br> Experience
            </p>
          </Style.Item>
        </Col>
        <Col>
          <Style.Item ref={(element) => pinRef(refs, element)}>
            <p>100+</p>
            <p>
              Completed <br></br> Projects
            </p>
          </Style.Item>
        </Col>
        <Col>
          <Style.Item ref={(element) => pinRef(refs, element)}>
            <p>100%</p>
            <p>
              Happy<br></br> EMPLOYERS
            </p>
          </Style.Item>
        </Col>
      </Row>
      <Row>
        <Col tablet={12}>
          <Style.HomeMeInfoSection ref={(element) => pinRef(refs, element)}>
            <HomeSectionHeader>About Me</HomeSectionHeader>
            <HomeSectionSubHeader>
              Full-Stack Web Developer
            </HomeSectionSubHeader>
            <p>
              I got my bachelor&apos;s degree in computer science in 2010 and
              since that time I&apos;ve been working for software companies of
              all sizes from all around the globe as a software developer. I
              specialize in full-stack, highly scalable, real-time
              JavaScript/Node.js and ASP.net applications, with past experience
              in Java
            </p>
            <p>
              Currently, I enjoy working as a full-stack developer in
              node.js/javascript/asp.net projects, where my experience and my
              deep understanding of architecture and theory is most impactful.
            </p>
            <p>Polish - native</p>
            <p>
              English - professional working proficiency, permanent practice
            </p>
          </Style.HomeMeInfoSection>
        </Col>
        <Col tablet={12}>
          <Style.HomeMeImageSection ref={(element) => pinRef(refs, element)}>
            <Image src={me} alt="Rafał Pisarczyk" width="200" height="200" />
            <p>
              <MainButton onClick={hireMe}>Hire Me</MainButton>
              <MainButton
                onClick={() => {
                  window.open(
                    'https://drive.google.com/file/d/15yjcRUdin8SwR4LrNY8tyD9QdpT7iS6C/view?usp=sharing',
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
    </SectionWrapper>
  );
};

export default HomeAbout;
