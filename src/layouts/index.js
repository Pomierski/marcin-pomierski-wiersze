import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Sidebar from '../components/Sidebar';
import moment from 'moment';
import MobileNavbar from '../components/MobileNavbar';
import { Helmet } from 'react-helmet';
import theme from '../styles/theme';
import '../styles/index.css';

moment.locale('pl');

const Container = styled.main`
  display: flex;
  height: 100vh;
  width: 100%;
`;

const ContainerWrapper = styled.div`
  flex: 3;
  overflow-y: auto;

  @media (max-width: 992px) {
    overflow-y: scroll;
    margin-bottom: 5rem;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const MainLayout = ({ children, data }) => {
  const [showSidebarMobile, setshowSidebarMobile] = useState(false);
  const toggle = () => {
    setshowSidebarMobile(!showSidebarMobile);
  };

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Wiersze Marcina Pomierskiego</title>
          <meta name="description" content="Strona poświęcona wierszom Marcina Pomierskiego" />
        </Helmet>
        <MobileNavbar buttonFn={toggle} />
        <Container>
          <Sidebar show={showSidebarMobile} toggleFn={toggle} data={data} />
          <ContainerWrapper>{children}</ContainerWrapper>
        </Container>
      </ThemeProvider>
    </Wrapper>
  );
};

export default MainLayout;
