import React from 'react';
import styled from 'styled-components';

function Label({ txt, fontWeight }) {
  return <Wrapper fontWeight={fontWeight}>{txt}</Wrapper>;
}

const Wrapper = styled.div`
  font-weight: ${props => props.fontWeight};
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: ${({ theme }) => theme.labelTxtColor};
`;

export default Label;
