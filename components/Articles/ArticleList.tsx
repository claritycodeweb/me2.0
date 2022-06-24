import { Row, Col } from '@components/FlexboxGrid';
import { SectionWrapper } from '@styles/common.styles';
import Link from 'next/link';
import React from 'react';
import { IArticle } from 'types/article';
import ArticleCard from './ArticleCard';

interface IProps {
  articles: IArticle[];
}

const ArticleList = ({ articles }: IProps) => {
  return (
    <SectionWrapper>
      <Row>
        {articles.map((article) => {
          return (
            <Col base={6} desktop={6} mobile={12} key={article.id}>
              <Link href={`/articles/${article.pathname},${article.id}`}>
                <a>
                  <ArticleCard article={article} />
                </a>
              </Link>
            </Col>
          );
        })}
      </Row>
    </SectionWrapper>
  );
};

export default ArticleList;
