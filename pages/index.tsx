import HomeAbout from '@components/Home/HomeAbout';
import HomeHero from '@components/Home/HomeHero';
import MainLayout from '@components/Layouts/MainLayout';
import Container from '@styles/container.style';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HomeHero />
      <Container>
        <HomeAbout />
      </Container>
    </MainLayout>
  );
};

export default Home;
