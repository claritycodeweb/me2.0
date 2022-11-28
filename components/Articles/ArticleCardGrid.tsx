import React from 'react';
import styled, { css } from 'styled-components';

import { IArticle } from 'types/article';
import BlurImage from '@components/Images/BlurImage';
import months from 'utils/months';
import { lighten } from 'polished';
import { FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';

const Card = styled.a<{ featured: boolean }>`
  display: flex;
  @media (min-width: 1024px) {
    ${({ featured }) =>
      featured
        ? css`
            grid-row: span 2;
            grid-column: span 2;
            ${Content} {
              p {
                display: block;
              }
            }
          `
        : css`
            h2 {
              font-size: 2rem;
            }
          `}
`;

const ArticleCardWrapper = styled.div<{ featured: boolean }>`
  width: 100%;
  position: relative;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
  @media (hover: hover) {
    &:hover {
      transform: translateY(-10px);
    }
  }

  &:after {
    content: '';
    top: 0;
    z-index: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1024px) {
    ${({ featured }) =>
      featured
        ? css`
            grid-row: span 2;
            grid-column: span 2;
            ${Content} {
              p {
                display: block;
              }
            }
          `
        : css`
            h2 {
              font-size: 2rem;
            }
          `}
  }
`;

const Img = styled.div`
  position: relative;
  display: block;
`;

const Content = styled.div`
  width: 100%;
  z-index: 1;
  padding: 1.5rem;
  > h2 {
    padding-bottom: 2rem;
    @media (max-width: 1024px) {
      font-size: 2rem;
    }
  }
  > p {
    display: none;
    line-height: 2.75rem;
    @media (max-width: 768px) {
      display: block;
    }
  }

  background-color: ${({ theme }) =>
    lighten(0.02, theme.palette.background.default as string)};

  height: 100%;
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
    Wrapper: ArticleCardWrapper,
    Img: Img,
    Content: Content,
    PublishDate: PublishDate,
  },
};

const ArticleCardGrid = ({
  article,
  featured,
}: {
  article: IArticle;
  featured: boolean;
}) => {
  const publishAt = new Date(article.date);
  return (
    <Link href={`/articles/${article.pathname}`}>
      <Card featured={featured}>
        <Style.Article.Wrapper featured={featured}>
          <BlurImage
            alt={article.title}
            src={article.mainImage}
            layout="responsive"
            width={700}
            height={475}
          />

          <Style.Article.PublishDate>
            <FaCalendarAlt />
            {featured && 'Published'}:{' '}
            {months[publishAt.getMonth()].slice(0, 3)} {publishAt.getDate()},{' '}
            {publishAt.getFullYear()}
          </Style.Article.PublishDate>

          <Style.Article.Content>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </Style.Article.Content>
        </Style.Article.Wrapper>
      </Card>
    </Link>
  );
};

export default ArticleCardGrid;
