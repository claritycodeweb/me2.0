import styled from 'styled-components';

const SectionWrapper = styled.section`
  margin: 10rem 0;
  scroll-margin-block-start: 150px;
`;

const HeroParalax = styled.div<{ bgUrl: string; height: string }>`
  position: relative;
  background-image: url(${({ bgUrl }) => `${bgUrl}`});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: ${({ height }) => height || '80vh'};
  width: 100%;
  margin-bottom: 3rem;
  &:before {
    content: '';
    position: absolute;
    background-image: linear-gradient(transparent 30%, rgb(34, 34, 34) 90%);
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 0;
  }

  ${({ theme }) => theme.breakpoints.down('desktop')`
    background-attachment: scroll;
  `}
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

export { SectionWrapper, HomeSectionHeader, HomeSectionSubHeader, HeroParalax };
