import { Col, Row } from '@components/FlexboxGrid';
import MainLogo from '@components/Logos/LogoMain';
import Container from '@styles/container.style';
import Link from 'next/link';
import { lighten } from 'polished';
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

interface IProps {}

const FooterWrapper = styled.footer`
  background-color: #f7f8fa;
  padding: 3rem 0;
  color: ${({ theme }) => theme.palette.background.default};
`;

const FooterCopyright = styled.div`
  > p {
    margin-bottom: 0.5rem;
    &:first-child {
      font-weight: bold;
    }
    &:last-child {
      text-transform: uppercase;
    }
  }
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  a {
    > div {
      > div {
        background-color: ${({ theme }) =>
          lighten(0.2, theme.palette.background.default as string)};
      }
    }
  }
`;

const FooterSocialIcons = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  margin-bottom: 2.5rem;
  a {
    color: white;
    background: rgb(102, 102, 102);
    border-radius: 50%;
    padding: 0.75rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    transition: all 0.3s ease 0s;
  }
`;

const Style = {
  FooterWrapper,
  FooterCopyright,
  FooterLogo,
  FooterSocialIcons,
};

const currentYear = new Date().getFullYear();

const Footer = ({}: IProps) => {
  return (
    <Style.FooterWrapper>
      <Container>
        <Row>
          <Col>
            <Style.FooterSocialIcons>
              <li>
                <a
                  href="https://www.linkedin.com/in/rafa%C5%82-pisarczyk-07a53399"
                  target="blank"
                  title="Linkedin"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/claritycodeweb"
                  target="blank"
                  title="GitHub"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/claritycodeweb"
                  target="blank"
                  title="Facebook"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={20} />
                </a>
              </li>
            </Style.FooterSocialIcons>
          </Col>
          <Col>
            <Style.FooterLogo>
              <Link href="/">
                <a>
                  <MainLogo />
                </a>
              </Link>
            </Style.FooterLogo>
          </Col>
        </Row>
        <Row between center>
          <Col>
            <Style.FooterCopyright>
              <p>Made by Rafał Pisarczyk </p>
              <p>&copy; {currentYear} Rafal Pisarczyk - ALL RIGHTS RESERVED</p>
            </Style.FooterCopyright>
          </Col>
        </Row>
      </Container>
    </Style.FooterWrapper>
  );
};

export default Footer;
