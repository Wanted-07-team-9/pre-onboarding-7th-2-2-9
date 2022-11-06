import React from 'react';
import styled from 'styled-components';
import { convertAdStatusType } from '../../utils/functions/convertAdStatusType';
import { convertAdType } from '../../utils/functions/convertAdType';
import { convertBudgetAmount, convertCostAmount } from '../../utils/functions/convertAmount';
import { convertAdDate, convertTitleDate } from '../../utils/functions/convertDate';
import { AdItemInfoLine } from './AdItemInfoLine';

const AdItem = ({ ad }) => {
  return (
    <>
      <Wrapper>
        <Title>{`${convertAdType(ad.adType)}_${convertTitleDate(ad.startDate)}`}</Title>
        <ContentsWrapper>
          <AdItemInfoLine title={'상태'} value={convertAdStatusType(ad.status)} />
          <AdItemInfoLine title={'광고 생성일'} value={convertAdDate(ad.startDate)} />
          <AdItemInfoLine title={'일 희망 예산'} value={convertBudgetAmount(ad.budget)} />
          <AdItemInfoLine title={'광고 수익률'} value={ad.report.roas + '%'} />
          <AdItemInfoLine title={'매출'} value={convertCostAmount(ad.report.convValue)} />
          <AdItemInfoLine title={'광고 비용'} value={convertCostAmount(ad.report.cost)} />
        </ContentsWrapper>
        <Button>수정하기</Button>
      </Wrapper>
      <br></br>
    </>
  );
};

const Wrapper = styled.div`
  width: 30.5rem;
  height: 42rem;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.adBorderColor};
  border-radius: 1rem;
  margin: 1rem;
  padding: 2rem;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;
  padding-top: 2rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.adBorderColor};
`;

const ContentsWrapper = styled.div`
  margin: 0;
`;

const Button = styled.button`
  width: 9.2rem;
  height: 4rem;
  color: ${props => props.theme.mainTxtColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 1rem;
  background-color: transparent;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.6rem;
  cursor: pointer;
  margin-top: 2rem;
  text-align: center;
  &:hover {
    background-color: ${({ theme }) => theme.sideHoverGray};
    color: ${({ theme }) => theme.sideHoverTxtColor};

    path {
      fill: ${({ theme }) => theme.sideHoverTxtColor};
    }
  }
`;

export default AdItem;
