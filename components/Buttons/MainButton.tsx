import styled from 'styled-components';

const MainButton = styled.button`
  outline: 0px;
  appearance: none;
  border: 0px;
  cursor: pointer;
  padding: 1rem 2rem;
  color: white;
  background-color: ${({ theme }) => theme.palette.accent.primary};
  ont-size: 1.8rem;
  box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px, rgb(0 0 0 / 25%) 0px 1px 6px;
  transition: all 250ms ease-in-out;
  &:hover {
    transform: translateY(-0.25rem);
  }
`;

export default MainButton;
