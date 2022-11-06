import React from 'react';
import styled from 'styled-components';

const H3 = ({ txt }) => {
  return <H3Txt>{txt}</H3Txt>;
};

const H3Txt = styled.h3`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.mainTxtColor}; ;
`;

export default H3;
