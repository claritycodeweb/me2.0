import HomeHero from '@components/Home/HomeHero';
import MainLayout from '@components/Layouts/MainLayout';
import Container from '@styles/container.style';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HomeHero />
      <Container>
        <section style={{ height: '500px' }}>here</section>
        <section style={{ height: '500px' }}>here</section>
        <section style={{ height: '500px' }}>here</section>
        <section style={{ height: '500px' }}>here</section>
      </Container>
    </MainLayout>
  );
};

export default Home;
