import HomeAbout from '@components/Home/HomeAbout';
import HomeBlog from '@components/Home/HomeBlog';
import HomeContact from '@components/Home/HomeContact';
import HomeExperience from '@components/Home/HomeExperience';
import HomeHero from '@components/Home/HomeHero';
import MainLayout from '@components/Layouts/MainLayout';
import Container from '@styles/container.style';
import type { NextPage } from 'next';
import { IArticle } from 'types/article';

interface IProps {
  articles: IArticle[];
}

const Home: NextPage<IProps> = ({}: IProps) => {
  return (
    <MainLayout>
      <HomeHero />
      <Container>
        <HomeAbout />
        <HomeExperience />
        <HomeBlog />
        <HomeContact />
      </Container>
    </MainLayout>
  );
};

export default Home;
