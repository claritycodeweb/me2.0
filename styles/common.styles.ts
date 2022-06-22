import styled from 'styled-components';

const HomeSectionWrapper = styled.section`
  margin: 10rem 0;
  scroll-margin-block-start: 150px;
`;

const HomeSectionHeader = styled.h2`
  padding-bottom: 0.5rem;
  border-bottom: 3px solid ${({ theme }) => theme.palette.accent.primary};
  margin-bottom: 2rem;
  display: inline-block;
  font-weight: normal;
  font-size: 3rem;
`;

const HomeSectionSubHeader = styled.h5`
  padding-bottom: 1.5rem;
  font-size: 1.6rem;
`;

export { HomeSectionWrapper, HomeSectionHeader, HomeSectionSubHeader };
