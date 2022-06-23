import React from 'react';
import styled from 'styled-components';

interface IProps {
  isLoading: boolean;
  error?: any;
  children?: React.ReactNode;
}

const Wrapper = styled.div`
  min-height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const Style = {
  Wrapper,
};

const Loading = ({ isLoading, error, children }: IProps) => {
  if (isLoading) {
    return (
      <Style.Wrapper>
        {error ? 'An error has occurred' : 'Loading...'}
      </Style.Wrapper>
    );
  }

  return <>{children}</>;
};

export default Loading;
