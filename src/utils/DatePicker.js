import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { addDays } from 'date-fns';
import { useDispatch } from 'react-redux';
import { getStartDate, getEndDate } from '../reducer/Slice/dataSlice';

const DatePickerComponent = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date('2022-02-01'));
  const [endDate, setEndDate] = useState(new Date('2022-02-03'));
  const CustomInput = ({ value, onClick }) => (
    <button className="example-custom-input" onClick={onClick}>
      {value}
    </button>
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'end' }}>
      <div>
        <DatePicker
          selected={startDate}
          selectsStart
          maxDate={new Date('2022-04-20')}
          onChange={date => {
            setStartDate(date);
            dispatch(getStartDate(Date.parse(date)));
          }}
          customInput={<CustomInput />}
        />
      </div>
      ~
      <div>
        <DatePicker
          selected={endDate}
          selectsEnd
          startDate={startDate}
          minDate={startDate}
          maxDate={addDays(startDate, 2)}
          onChange={date => {
            setEndDate(date);
            dispatch(getEndDate(Date.parse(date)));
          }}
          customInput={<CustomInput />}
        />
      </div>
    </div>
  );
};

export default DatePickerComponent;
