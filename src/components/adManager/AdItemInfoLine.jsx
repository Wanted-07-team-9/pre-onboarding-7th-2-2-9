import React from 'react';
import styled from 'styled-components';

export const AdItemInfoLine = ({ title, value }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Contents>{value}</Contents>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 26.5rem;
  height: 4rem;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${({ theme }) => theme.adBorderColor};
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.h1`
  width: 40%;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.InfoTxtColor};
`;

const Contents = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.mainTxtColor};
`;
