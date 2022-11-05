import React from 'react';
import styled from 'styled-components';

function PageHeader({ title, isDateTimePicker = false }) {
  return (
    <Wrapper isDateTimePicker={isDateTimePicker}>
      <Title>{title}</Title>
      {isDateTimePicker && <></>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 2rem 4rem;
  margin-bottom: ${props => (!props.isDateTimePicker ? '5.5rem' : '0rem')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 26px;
  line-height: 30px;
`;
export default PageHeader;
