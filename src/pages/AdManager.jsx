import React from 'react';
import styled from 'styled-components';
import PageHeader from '../components/elements/PageHeader';

const AdManager = () => {
  return (
    <Wrapper>
      <PageHeader title={'광고관리'} isDateTimePicker={false} />
      <DashBoardsWrapper></DashBoardsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const DashBoardsWrapper = styled.div`
  margin: 2rem 4rem;
  width: 100%;
  height: 65.4rem;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
`;

export default AdManager;
