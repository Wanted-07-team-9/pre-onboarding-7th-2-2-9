import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setStartDate, setEndDate } from '../../redux/reducer/dashSlice';
import { ko } from 'date-fns/esm/locale';

function DatetimePicker() {
  const dispatch = useDispatch();
  const [startDates, setStartDates] = useState(new Date('2022-02-01'));
  const [endDates, setEndDates] = useState(new Date('2022-02-08'));

  return (
    <>
      <StyledDatePicker
        selected={startDates}
        onChange={date => {
          setStartDates(date);
          dispatch(setStartDate({ startDate: startDates }));
        }}
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        selectsStart
        startDate={startDates}
        endDate={endDates}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        showPopperArrow={false}
        customInput={<StyledInput />}
      />
      ~
      <StyledDatePicker
        selected={endDates}
        onChange={date => {
          setEndDates(date);
          dispatch(setEndDate({ endDate: endDates }));
        }}
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        selectsEnd
        startDate={startDates}
        endDate={endDates}
        minDate={startDates}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        showPopperArrow={false}
        customInput={<StyledInput />}
      />
    </>
  );
}

const StyledDatePicker = styled(DatePicker)``;

const StyledInput = styled.input`
  outline: none;
  width: 20rem;
  border: none;
`;

export default DatetimePicker;
