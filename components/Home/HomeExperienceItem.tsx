import { StaticImageData } from 'next/image';
import React from 'react';
import styled from 'styled-components';
import months from 'utils/months';

const workTime = (startDate: Date, endDate: Date) => {
  const diffMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth() - 1);

  const diffYears = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;

  if (diffYears) {
    if (diffYears > 1 && months >= 1) {
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
export interface IExperience {
  id: number;
  headline: string;
  logo: StaticImageData;
  // start: string;
  // end: string;
  startTime: Date;
  endTime: Date;
  body: string;
  href: string;
  companyName: string;
}

interface IProps {
  item: IExperience;
  children?: React.ReactNode;
}

const Style = {
  Section: styled.section`
    border: 0 solid #e5e7eb;
    border-left-width: 1px;
    border-color: rgba(63, 63, 70, 0.6);
    padding-left: 1.5rem;
  `,
  Grid: styled.div`
    display: grid;

    grid-template-columns: repeat(4, minmax(0, 1fr));
    ${({ theme }) => theme.breakpoints.down('mobile')`
      grid-template-columns: repeat(1, minmax(0, 1fr));
    `}
    row-gap: 2rem;
    > h2 {
      font-weight: 400;
      font-size: 1.8rem;
    }
  `,
  Children: styled.div`
    grid-column: span 3 / span 3;
  `,
  Apperance: {
    Article: styled.article`
      postion: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      > * + * {
        margin-top: 1.2rem;
      }
    `,
    H3: styled.h3`
      font-weight: 400;
      font-size: 1.8rem;
    `,
    Dates: styled.p`
      font-size: 1.3rem;
      color: rgb(113, 113, 122);
    `,
    Desc: styled.p`
      line-height: 2rem;
      font-size: 1.4rem;
      color: rgb(161 161 170);
    `,
    Link: styled.a`
      color: ${({ theme }) => theme.palette.accent.primary};
    `,
  },
};

const Space = styled.div<{ space: number }>`
  > * + * {
    margin-top: ${({ space }) => space}rem;
  }
`;

const Section = ({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) => {
  return (
    <Style.Section>
      <Style.Grid>
        <h2>{title}</h2>
        <Style.Children>
          <Space space={1.6}>{children}</Space>
        </Style.Children>
      </Style.Grid>
    </Style.Section>
  );
};

const Appearance = ({ item }: { item: IExperience }) => {
  const {} = item;
  return (
    <Style.Apperance.Article>
      <Style.Apperance.Dates>
        {date(item.startTime, item.endTime)}
        &nbsp;({workTime(item.startTime, item.endTime)})
      </Style.Apperance.Dates>
      <Style.Apperance.H3>{item.headline}</Style.Apperance.H3>
      <Style.Apperance.Desc
        dangerouslySetInnerHTML={{
          __html: item.body.replace(/(?:\r\n|\r|\n)/g, '<br />'),
        }}
      ></Style.Apperance.Desc>
      <Style.Apperance.Link
        href={item.href}
        target="_blank"
        rel="noreferrer"
        title={'View on linkedin'}
      >
        View on Linkedin
      </Style.Apperance.Link>
    </Style.Apperance.Article>
  );
};

const HomeExperienceItem = ({ item }: IProps) => {
  return (
    <Section title={item.companyName}>
      <Appearance item={item}></Appearance>
    </Section>
  );
};

export default HomeExperienceItem;
