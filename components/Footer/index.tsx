import { Col, Row } from '@components/FlexboxGrid';
import MainLogo from '@components/Logos/LogoMain';
import Container from '@styles/container.style';
import { lighten } from 'polished';
import React from 'react';
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
  > div {
    > div {
      background-color: ${({ theme }) =>
        lighten(0.2, theme.palette.background.default as string)};
    }
  }
`;

const Style = {
  FooterWrapper,
  FooterCopyright,
  FooterLogo,
};

const Footer = ({}: IProps) => {
  return (
    <Style.FooterWrapper>
      <Container>
        <Row between center>
          <Col>
            <Style.FooterCopyright>
              <p>Made by Rafał Pisarczyk </p>
              <p>&copy; 2021 Rafal Pisrczyk - ALL RIGHTS RESERVED</p>
            </Style.FooterCopyright>
          </Col>
          <Col>
            <Style.FooterLogo>
              <MainLogo />
            </Style.FooterLogo>
          </Col>
        </Row>
      </Container>
    </Style.FooterWrapper>
  );
};

export default Footer;
