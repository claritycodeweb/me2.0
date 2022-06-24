import { Col, Row } from '@components/FlexboxGrid';
import {
  HomeSectionHeader,
  HomeSectionSubHeader,
  SectionWrapper,
} from '@styles/common.styles';
import React from 'react';
import { IArticle } from 'types/article';
import Link from 'next/link';
import useFetch from '@hooks/use-fetch';
import Loading from '@components/Loaders/Loading';
import ArticleCard from '@components/Articles/ArticleCard';
import MainLink from '@components/Links/MainLink';

interface IProps {}

const HomeBlog = ({}: IProps) => {
  const { data: articles, error } = useFetch<IArticle[]>({
    path: `/api/articles`,
  });

  return (
    <SectionWrapper id="home-blog">
      <Row>
        <Col>
          <HomeSectionHeader>My Blog</HomeSectionHeader>
          <HomeSectionSubHeader>
            Some of my personal articles
          </HomeSectionSubHeader>
        </Col>
      </Row>
      <Row>
        <Loading isLoading={!articles} error={error}>
          {articles?.slice(0, 2).map((article) => {
            return (
              <Col mobile={12} key={article.id}>
                <Link href={`/articles/${article.pathname},${article.id}`}>
                  <a>
                    <ArticleCard article={article} />
                  </a>
                </Link>
              </Col>
            );
          })}
        </Loading>
      </Row>
      <Row>
        <Col style={{ textAlign: 'center', paddingTop: '5rem' }}>
          <MainLink href={`/articles`}>See all articels</MainLink>
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default HomeBlog;
