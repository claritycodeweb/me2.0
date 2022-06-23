import HomeAbout from '@components/Home/HomeAbout';
import HomeBlog from '@components/Home/HomeBlog';
import HomeContact from '@components/Home/HomeContact';
import HomeExperience from '@components/Home/HomeExperience';
import HomeHero from '@components/Home/HomeHero';
import MainLayout from '@components/Layouts/MainLayout';
import { API_URL } from '@config/index';
import Container from '@styles/container.style';
import type { NextPage } from 'next';
import { IArticle } from 'types/article';

interface IProps {
  articles: IArticle[];
}

const Home: NextPage<IProps> = ({ articles }: IProps) => {
  return (
    <MainLayout>
      <HomeHero />
      <Container>
        <HomeAbout />
        <HomeExperience />
        <HomeBlog articles={articles} />
        <HomeContact />
      </Container>
    </MainLayout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/articles`);

  const articles = await res.json();

  return {
    props: { articles: articles.slice(0, 2) },
  };
}

export default Home;
