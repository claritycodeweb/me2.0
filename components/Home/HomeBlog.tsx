import { Col, Row } from '@components/FlexboxGrid';
import styled from 'styled-components';
import {
  HomeSectionHeader,
  HomeSectionSubHeader,
  HomeSectionWrapper,
} from '@styles/common.styles';
import React from 'react';
import { IArticle } from 'types/article';
import Link from 'next/link';
import BlurImage from '@components/Images/BlurImage';
import months from 'utils/months';
import { lighten } from 'polished';
import { FaCalendarAlt } from 'react-icons/fa';
import useFetch from '@hooks/use-fetch';
import Loading from '@components/Loaders/Loading';

interface IProps {}

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`;

const Img = styled.div`
  position: relative;
  display: block;
  &:after {
    content: '';
    top: 0;
    z-index: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
  }
`;

const Info = styled.div`
  padding: 1.5rem;
  > h2 {
    padding-bottom: 2rem;
  }
  > p {
    line-height: 2.75rem;
  }
  min-height: 220px;
  background-color: ${({ theme }) =>
    lighten(0.02, theme.palette.background.default as string)};
`;

const PublishDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: white;
  color: black;
  border-radius: 2px;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 300;
  z-index: 1;
`;

const Style = {
  Article: {
    Wrapper: ArticleWrapper,
    Img: Img,
    Info: Info,
    PublishDate: PublishDate,
  },
};

const ArticleCard = ({ article }: { article: IArticle }) => {
  const publishAt = new Date(article.date);
  return (
    <Style.Article.Wrapper>
      <Style.Article.Img>
        <BlurImage
          alt={article.title}
          src={article.mainImage}
          layout="responsive"
          width={700}
          height={475}
        />
        <Style.Article.PublishDate>
          <FaCalendarAlt />
          Published: {months[publishAt.getMonth()]
            .slice(0, 3)
            .toUpperCase()}, {publishAt.getFullYear()}
        </Style.Article.PublishDate>
      </Style.Article.Img>
      <Style.Article.Info>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
      </Style.Article.Info>
    </Style.Article.Wrapper>
  );
};

const HomeBlog = ({}: IProps) => {
  const { data: articles, error } = useFetch<IArticle[]>({
    path: `/api/articles`,
  });

  return (
    <HomeSectionWrapper id="home-blog">
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
    </HomeSectionWrapper>
  );
};

export default HomeBlog;
