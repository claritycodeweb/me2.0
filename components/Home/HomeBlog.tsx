import { Col, Row } from '@components/FlexboxGrid';
import styled from 'styled-components';
import {
  HomeSectionHeader,
  HomeSectionSubHeader,
  SectionWrapper,
} from '@styles/common.styles';
import React from 'react';
import { IArticle } from 'types/article';
import useFetch from '@hooks/use-fetch';
import Loading from '@components/Loaders/Loading';
import MainLink from '@components/Links/MainLink';
import ArticleCardGrid from '@components/Articles/ArticleCardGrid';

interface IProps {}

const Grid = styled(Row)`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
`;

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
      <Grid>
        <Loading isLoading={!articles} error={error}>
          {articles?.slice(0, 5).map((article, index) => {
            return (
              <ArticleCardGrid
                key={article.id}
                article={article}
                featured={index === 0}
              />
            );
          })}
        </Loading>
      </Grid>
      <Row>
        <Col style={{ textAlign: 'center', paddingTop: '5rem' }}>
          <MainLink href={`/articles`}>See all articels</MainLink>
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default HomeBlog;
