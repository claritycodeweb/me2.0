import React from 'react';
import styled from 'styled-components';

interface IProps {}

const Wrapper = styled.div`
  text-decoration: none;
  font-size: 2rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Bg = styled.div`
  padding: 0.5rem;
  background-color: rgb(222, 163, 42);
  margin: 0px 1px;
`;

const Style = {
  Wrapper,
  Bg,
};

const MainLogo = ({}: IProps) => {
  return (
    <Style.Wrapper>
      <Style.Bg>
        <span>R</span>
      </Style.Bg>
      <Style.Bg>
        <span>P</span>
      </Style.Bg>
    </Style.Wrapper>
  );
};

export default MainLogo;
