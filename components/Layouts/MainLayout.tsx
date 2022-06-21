import Head from 'next/head';
import React from 'react';
import Header from '@components/Header/TopNav';

import { ToastContainer } from 'react-toastify';

interface IProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  children?: React.ReactNode;
}

const MainLayout = ({ children, title, description, keywords }: IProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website"></meta>
        <meta content={title} property="og:title" />
      </Head>
      <ToastContainer />
      <Header />
      {children}
    </div>
  );
};

MainLayout.defaultProps = {
  title:
    'Rafał Pisarczyk | Full-Stack Developer | Web Expert | Freelancer Rafał Pisarczyk',
  description:
    'Hire Professional Freelancer & Full-Stack Developer. Building animations and interactive experiences, hi-end solutions, website maintenance & security',
  keywords:
    'node.js, react, html, javascript, typescript, css, web, webcomponents',
};

export default MainLayout;
