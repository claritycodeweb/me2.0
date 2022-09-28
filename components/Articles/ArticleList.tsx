import { Row, Col } from '@components/FlexboxGrid';
import { SectionWrapper } from '@styles/common.styles';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { IArticle } from 'types/article';
import ArticleCard from './ArticleCard';

interface IProps {
  articles: IArticle[];
}

const RowStyled = styled(Row)`
  > div {
    padding: 1rem;
    ${({ theme }) => theme.breakpoints.down('mobile')`
      padding: 0;
    `}
  }
`;

const ArticleList = ({ articles }: IProps) => {
  return (
    <SectionWrapper>
      <RowStyled>
        {articles.map((article) => {
          return (
            <Col base={6} desktop={6} mobile={12} key={article.id}>
              <Link href={`/articles/${article.pathname}`}>
                <a>
                  <ArticleCard article={article} />
                </a>
              </Link>
            </Col>
          );
        })}
      </RowStyled>
    </SectionWrapper>
  );
};

export default ArticleList;
