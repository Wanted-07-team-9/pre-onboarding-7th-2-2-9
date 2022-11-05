import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../GlobalHeader';
import SideBar from '../SideBar';

const Layout = () => {
  return (
    <Wrapper>
      <SideBar />
      <MainWrapper>
        <Header />
        <main>
          <Outlet />
        </main>
      </MainWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Layout;
