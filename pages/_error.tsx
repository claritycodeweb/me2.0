import MainLayout from '@components/Layouts/MainLayout';
import { NextPageContext } from 'next';
import Link from 'next/link';
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

function Error({ statusCode }: { statusCode: number }) {
  return (
    <MainLayout title="Page Not Found">
      <Style.Wrapper>
        <h1>{statusCode}</h1>
        <p>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
        <Link href="/">Go Back Home</Link>
      </Style.Wrapper>
    </MainLayout>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
