import React from 'react';
import styled from 'styled-components';
import PageHeader from '../components/elements/PageHeader';
import DashCardList from '../components/main/DashCardList';

const Main = () => {
  return (
    <Wrapper>
      <PageHeader title={'대시보드'} isDateTimePicker={true} />
      <Title>통합 광고 현황</Title>
      <DashBoardsWrapper>
        <DashCardList />
      </DashBoardsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.div`
  margin: 2rem 4rem;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

const DashBoardsWrapper = styled.div`
  margin: 2rem 4rem;
  width: 103.9rem;
  min-height: 65.4rem;
  height: 100%;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
`;

export default Main;
