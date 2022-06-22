import { Row, Col } from '@components/FlexboxGrid';
import {
  HomeSectionHeader,
  HomeSectionSubHeader,
  HomeSectionWrapper,
} from '@styles/common.styles';
import Image from 'next/image';
import { lighten } from 'polished';
import React from 'react';
import styled from 'styled-components';

import cl from './company-logos/cl.jpeg';
import lm from './company-logos/lm.jpeg';
import qm from './company-logos/qm.jpeg';
import stp from './company-logos/stp.jpeg';

interface IProps {}

const ItemImageWrapper = styled.div`
  flex: 1;
  text-align: center;
  filter: grayscale(1);
`;

const Item = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: ${({ theme }) => theme.palette.background.default};
  ${({ theme }) => theme.mixins.fontSize({ desktop: 1.4 })}
  box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px, rgb(0 0 0 / 25%) 0px 1px 6px;
  border-radius: 5px;
  padding: 2rem;
  gap: 1rem;
  min-height: 190px;
  transition: all 1s;
  @media (hover: hover) {
    &:hover {
      h2 {
        transition: all 1s;
        color: ${({ theme }) => theme.palette.accent.primary};
      }
      transform: translateX(1.5rem);
      ${ItemImageWrapper} {
        filter: none;
      }
    }
  }
  ${({ theme }) => theme.breakpoints.down('mobile')`
    min-height: 130px;
  `}
`;

const ItemMediaBody = styled.div`
  flex: 4;
  > * {
    padding-bottom: 0.5rem;
    line-height: 2.4rem;
  }
  h5 {
    color: ${({ theme }) =>
      lighten(0.3, theme.palette.border.primary as string)};
  }
  > p {
    ${({ theme }) => theme.breakpoints.down('mobile')`
      display: none;  
   `}
  }
`;

const Style = { Item, ItemMediaBody, ItemImageWrapper };

const items = [
  {
    id: 1,
    headline: 'Senior Full-Stack Developer (Tech leader)',
    logo: cl,
    start: 'June 2020',
    end: '',
    body: 'Classeek is leveraging technology in order to sustainably support classical music as a constantly evolving genre and to improve efficiencies and the method through which young artists are discovered and presented.',
    href: 'https://www.linkedin.com/company/classeek/',
  },
  {
    id: 2,
    headline: 'Senior Full-Stack Developer',
    logo: lm,
    start: 'January 2018',
    end: 'November 2021',
    body: 'Simplify the real estate journey for individuals and provide real estate professionals with the ultimate tool for automating and optimizing client prospection.',
    href: 'https://www.linkedin.com/company/lookmove/',
  },
  {
    id: 3,
    headline: 'Software Engineer',
    logo: stp,
    start: 'June 2014',
    end: 'December 2017',
    body: 'SimpHigh quality software development for a family of digital consumer brands. For passionate engineers!',
    href: 'https://www.linkedin.com/company/schibsted-tech-polska/',
  },
  {
    id: 4,
    headline: 'Software Engineer',
    logo: qm,
    start: 'September 2011',
    end: 'May 2014',
    body: 'Software house',
    href: 'https://www.linkedin.com/company/qumak-sa/',
  },
];

const HomeExperience = ({}: IProps) => {
  return (
    <HomeSectionWrapper id="home-experience">
      <Row>
        <Col>
          <HomeSectionHeader>Experience</HomeSectionHeader>
          <HomeSectionSubHeader>
            Some work experience show on my site.
          </HomeSectionSubHeader>
        </Col>
      </Row>
      <Row column>
        {items.map((item) => (
          <Col key={item.id}>
            <Style.Item
              href={item.href}
              target="_blank"
              rel="noreferrer"
              title={item.headline}
            >
              <Style.ItemImageWrapper>
                <Image
                  src={item.logo}
                  width={80}
                  height={80}
                  alt={item.headline}
                />
              </Style.ItemImageWrapper>
              <Style.ItemMediaBody>
                <h2>{item.headline}</h2>
                <h5>
                  {item.start}
                  {item.end ? `-${item.end}` : ''}
                </h5>
                <p>{item.body}</p>
              </Style.ItemMediaBody>
            </Style.Item>
          </Col>
        ))}
      </Row>
    </HomeSectionWrapper>
  );
};

export default HomeExperience;
