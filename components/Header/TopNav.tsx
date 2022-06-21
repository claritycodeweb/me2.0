import React, { useState } from 'react';
import Link from 'next/link';

import Style from './topnav.styles';
import Container from '@styles/container.style';
import Logo from '@components/Logos/LogoMain';

// import Burger from './Burger';
import useSticky from '@hooks/use-sticky';
import Burger from '@components/BurgerButton/BurgerButton';
// import NavBar from './NavBar';
// import Portal from '../Portal/Portal';

interface IProps {}

const MainHeader = ({}: IProps) => {
  const sticky = useSticky(120);
  const [open, setOpen] = useState(false);

  return (
    <Style.Header.Wrapper isSticky={sticky}>
      <Container>
        <Style.Header.Main>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>

          {/* <Search /> */}
          <h2>Create digital products with unique idea</h2>

          <Burger open={open} setOpen={setOpen} />
          {/* <Portal name="#nav-bar">
            <NavBar open={open} setOpen={setOpen} />
          </Portal> */}
        </Style.Header.Main>
      </Container>
    </Style.Header.Wrapper>
  );
};

export default MainHeader;
