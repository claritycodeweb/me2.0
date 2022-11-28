import { Row, Col } from '@components/FlexboxGrid';
import {
  HomeSectionHeader,
  HomeSectionSubHeader,
  SectionWrapper,
} from '@styles/common.styles';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import pinRef from 'utils/pinRef';

import cl from './company-logos/cl.jpeg';
import lm from './company-logos/lm.jpeg';
import qm from './company-logos/qm.jpeg';
import stp from './company-logos/stp.jpeg';
import HomeExperienceItem, { IExperience } from './HomeExperienceItem';

interface IProps {}

const RowExperience = styled.div`
  > * + * {
    margin-top: 5rem;
  }
`;

const AnimateItem = styled.div`
  opacity: 0;
  transition: all 0.5s ease-in;
`;

const Style = { RowExperience, AnimateItem };

const items: IExperience[] = [
  {
    id: 1,
    headline: 'Senior Full-Stack Developer',
    logo: cl,
    startTime: new Date('2020-06-01'),
    endTime: new Date(),
    body: `
      - Led and managed a frontend developers and designers team to create efficient, effective and visually aesthetic websites and mobile apps

      - Provided technical leadership by mentoring on best practices related to software development and engineering processes.

      - Active participation in the development of the project both from the programming and UX/UI side, architecture and functionality

      - Helping to make key business and technical decision 

      - Built API following RESTfull standards

      - Developed and maintained React Native components, screens, and features for the mobile app

      <p style="color: rgba(255,255,255, 0.8);">Tech: JS, ReactJS, React Native, Redux, Next.js Context API, Typescript, Node.js, Express, MSSQL, Docker, Kubernates, Terraform, Git, HTML, CSS, SASS, Apollo, Jest</p>
    `,
    href: 'https://www.linkedin.com/company/classeek/',
    companyName: 'Classeek',
  },
  {
    id: 2,
    headline: 'Senior Full-Stack Developer',
    logo: lm,
    startTime: new Date('2018-01-01'),
    endTime: new Date('2021-11-01'),
    body: `
    - Led and managed a frontend developers and designers team to create efficient, effective and visually aesthetic websites

    - Coached 3 juniors frontend developer

    - Developed applications using React with managing the state throught Redux and Context API

    - Created a mobile responsive User Experiences with CSS/SCSS Flexbox thats allow cross-platform accessibility to the website

    - Built API following RESTfull standards

    - Active participation in the development of the project both from the programming and UX/UI side, architecture and functionality

    - Helping to make key business and technical decision 

    <p style="color: rgba(255,255,255, 0.8);">Tech: JS, ReactJS,  Redux, GraphQL, Typescript, Node.js, Express, MSSQL, Docker, Swarn, Sketch, Git, HTML, CSS, SASS, Apollo, .netcore, C#, entity-framework, Jest</p>

    `,
    href: 'https://www.linkedin.com/company/lookmove/',
    companyName: 'Lookmove',
  },
  {
    id: 3,
    headline: 'Regular Software Engineer',
    logo: stp,
    startTime: new Date('2014-06-01'),
    endTime: new Date('2017-12-01'),
    body: `
     - Translated designs and wireframes into high-quality code using HTML, CSS and JavaScript 

     - Created and assisted with design, development and support fo new and existing secure website and web applications

     - Worked collaboratively with 3 development teams to identify issues with program pipelines and project scope

     - Built API following RESTfull standards with .netcore and node.js
     
     <p style="color: rgba(255,255,255, 0.8);">Tech: JS, Anuglar, Typescript, Node.js, MSSQL, Dynamics CRM, Git, HTML, CSS, CSS-in-JS .NET, C#</p>

    `,
    href: 'https://www.linkedin.com/company/schibsted-tech-polska/',
    companyName: 'Schibsted',
  },
  {
    id: 4,
    headline: 'Software Engineer',
    logo: qm,
    startTime: new Date('2011-09-01'),
    endTime: new Date('2014-05-01'),
    body: `
     - working in all kinds of development areas including frontend and backend as well desktop apps and websites

     <p style="color: rgba(255,255,255, 0.8);">Tech: JS, MSSQL, T-SQL, OLAP cube, data warehouse, SVN, HTML, CSS, .NET, C#, Web Forms, WPF</p>
    `,
    href: 'https://www.linkedin.com/company/qumak-sa/',
    companyName: 'Qumak',
  },
];

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
            {/* Some work experience show on my site. */}
          </HomeSectionSubHeader>
        </Col>
      </Row>
      <Style.RowExperience>
        {items.map((item) => (
          <AnimateItem key={item.id} ref={(element) => pinRef(refs, element)}>
            <HomeExperienceItem item={item} />
          </AnimateItem>
        ))}
      </Style.RowExperience>
    </SectionWrapper>
  );
};

export default HomeExperience;
