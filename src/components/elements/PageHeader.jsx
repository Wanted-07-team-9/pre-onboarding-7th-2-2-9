import React from 'react';
import styled from 'styled-components';
import DatetimePicker from './DatetimePicker';

function PageHeader({ title, isDateTimePicker = false }) {
  return (
    <Wrapper isDateTimePicker={isDateTimePicker}>
      <Title>{title}</Title>
      <DatetimePickerWrapper>
        {isDateTimePicker && (
          <>
            <DatetimePicker />
          </>
        )}
      </DatetimePickerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 2rem 4rem;
  margin-bottom: ${props => (!props.isDateTimePicker ? '5.5rem' : '0rem')};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 26px;
  line-height: 30px;
  width: 90%;
`;

const DatetimePickerWrapper = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  column-gap: 0.5rem;
`;
export default PageHeader;
