import { fade, slide } from '@styles/animation.style';
import styled, { css } from 'styled-components';

const HeaderWrapper = styled.section<{ isSticky: boolean }>`
  background: ${({ theme }) => theme.palette.background.default};
  width: 100%;
  font-size: 1.6rem;
  position: sticky;
  box-shadow: rgb(0 0 0 / 45%) 0px 0px 40px;
  z-index: 1;
  ${({ isSticky }) =>
    isSticky &&
    css`
      z-index: 100;
      top: 0;
      width: 100%;
      animation: ${slide} 0.8s;
      font-size: 1.2rem;
      ${HeaderMain} {
        padding: 1.5rem 2rem;
      }
    `};
`;

const HeaderMain = styled.div`
  padding: 2.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.palette.text.primary};

  h2 {
    font-weight: 400;
    font-size: 1.5em;
    ${({ theme }) => theme.breakpoints.down('desktop')`
      display: none;
    `}
    opacity: 0;
    animation: ${fade} 1.5s ease-out 0.5s;
    animation-fill-mode: forwards;
  }

  a {
    color: #333;
  }
  > a {
    margin-right: 20px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
  }

  ${({ theme }) => theme.breakpoints.down('desktop')`
    padding: 2rem;
  `}
`;

const Style = {
  Header: {
    Wrapper: HeaderWrapper,
    Main: HeaderMain,
  },
};

export default Style;
