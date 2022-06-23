import MainLayout from '@components/Layouts/MainLayout';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Style = {
  Wrapper: styled.div`
    text-align: center;
    margin: 200px 0 200px;
    min-height: 50rem;
    height: 100%;
    a {
      &:hover {
        text-decoration: underline;
        color: white;
      }
    }
    h1 {
      font-size: 10rem;
    }
    p {
      padding-bottom: 2.5rem;
    }
  `,
};

const NotFound = () => {
  return (
    <MainLayout title="Page Not Found">
      <Style.Wrapper>
        <h1>404</h1>
        <p>Sorry, there is nothing here</p>
        <Link href="/">Go Back Home</Link>
      </Style.Wrapper>
    </MainLayout>
  );
};

export default NotFound;
