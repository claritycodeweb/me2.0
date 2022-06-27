import React from 'react';
import { getArticles } from '@cache/articles/lib/articles';
import { IArticle } from 'types/article';
import MainLayout from '@components/Layouts/MainLayout';
import Container from '@styles/container.style';
import ArticleList from '@components/Articles/ArticleList';
import ArticlesHero from '@components/Articles/ArticlesHero';

interface IProps {
  articles: IArticle[];
}

const ArticlesIndex = ({ articles }: IProps) => {
  return (
    <MainLayout>
      <ArticlesHero />
      <Container>
        <ArticleList articles={articles} />
      </Container>
    </MainLayout>
  );
};

export async function getStaticProps({}) {
  const articles = await getArticles();

  return {
    props: { articles: articles },
  };
}

export default ArticlesIndex;
