import { Row, Col } from '@components/FlexboxGrid';
import {
  fadeIn,
  HomeSectionHeader,
  HomeSectionSubHeader,
  SectionWrapper,
} from '@styles/common.styles';
import Image from 'next/image';
import { lighten } from 'polished';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import months from 'utils/months';
import pinRef from 'utils/pinRef';

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
  border-radius: 1px;
  padding: 2rem;
  gap: 1rem;
  min-height: 190px;
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
  ${fadeIn}
  transition: all 1s;
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
    start: 'June, 2020',
    end: 'Present',
    startTime: new Date('2020-06-01'),
    endTime: new Date(),
    body: 'Classeek is leveraging technology in order to sustainably support classical music as a constantly evolving genre and to improve efficiencies and the method through which young artists are discovered and presented.',
    href: 'https://www.linkedin.com/company/classeek/',
  },
  {
    id: 2,
    headline: 'Senior Full-Stack Developer',
    logo: lm,
    start: 'January, 2018',
    end: 'November, 2021',
    startTime: new Date('2018-01-01'),
    endTime: new Date('2021-11-01'),
    body: 'Simplify the real estate journey for individuals and provide real estate professionals with the ultimate tool for automating and optimizing client prospection.',
    href: 'https://www.linkedin.com/company/lookmove/',
  },
  {
    id: 3,
    headline: 'Software Engineer',
    logo: stp,
    startTime: new Date('2014-06-01'),
    endTime: new Date('2017-12-01'),
    body: 'SimpHigh quality software development for a family of digital consumer brands. For passionate engineers!',
    href: 'https://www.linkedin.com/company/schibsted-tech-polska/',
  },
  {
    id: 4,
    headline: 'Software Engineer',
    logo: qm,
    start: 'September, 2011',
    end: 'May, 2014',
    startTime: new Date('2011-09-01'),
    endTime: new Date('2014-05-01'),
    body: 'Software house',
    href: 'https://www.linkedin.com/company/qumak-sa/',
  },
];

const workTime = (startDate: Date, endDate: Date) => {
  const diffMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth() - 1);

  console.log('diffMonths', diffMonths);
  const diffYears = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;

  if (diffYears) {
    if (diffYears > 1 && months > 1) {
      return `${diffYears} years, ${months} Month`;
    }
    if (months > 1) {
      return `${diffYears} year, ${months} Month`;
    }
    if (months === 0) {
      return `${diffYears} years`;
    }
  }
  return `${months} Month`;
};

const date = (startDate: Date, endDate: Date) => {
  const startMonth = months[startDate.getMonth()];
  const endMonth = months[endDate.getMonth()];
  const startYear = startDate.getFullYear();
  const endYear = endDate.getFullYear();
  if (endDate.toDateString() === new Date().toDateString()) {
    return `${startMonth}, ${startYear} - Present`;
  }
  return `${startMonth}, ${startYear} - ${endMonth}, ${endYear}`;
};

export type Ref = HTMLDivElement;

const HomeExperience = ({}: IProps) => {
  const refs = useRef(new Array<HTMLDivElement>());

  /*
    TODO: to refactor 
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
    <SectionWrapper id="home-experience">
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
              ref={(element) => pinRef(refs, element)}
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
                  {date(item.startTime, item.endTime)}
                  &nbsp;({workTime(item.startTime, item.endTime)})
                </h5>
                <p>{item.body}</p>
              </Style.ItemMediaBody>
            </Style.Item>
          </Col>
        ))}
      </Row>
    </SectionWrapper>
  );
};

export default HomeExperience;
