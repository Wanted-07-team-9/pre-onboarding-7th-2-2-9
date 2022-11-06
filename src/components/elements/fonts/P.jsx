import React from 'react';
import styled from 'styled-components';

const P = ({ txt }) => {
  return <Ptxt>{txt}</Ptxt>;
};

const Ptxt = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.InfoTxtColor};
`;

export default P;
