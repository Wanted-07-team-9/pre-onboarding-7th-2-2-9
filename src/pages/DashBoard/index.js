import React, { useEffect, useState } from 'react';
import ChartComponent from '../../components/DashBoard/ChartComponent';
import ItemCards from '../../components/DashBoard/ItemCards';
import DatePickerComponent from '../../utils/DatePicker';
import BoardBar from '../../components/Headers/BoardBar/BoardBar';
import { useSelector } from 'react-redux';
import { getBeforeDate, getAfterDate, getAverage } from '../../utils/Calculate';
import * as Styled from './style';

const DashBoard = () => {
  const { startdate, enddate } = useSelector(state => state.dateReducer);
  const [trendAvgList, setTrendAvgeList] = useState();
  //const [key, setKey] = useState();
  useEffect(() => {
    const before = getBeforeDate(startdate).then(res => getAverage(res));
    const after = getAfterDate(startdate, enddate) //
      .then(res => {
        const result = getAverage(res);
        if (result.length !== 0 && !!result) {
          setTrendAvgeList(result);
          // let arr = Object.keys(result);
          // setKey(arr);
        }
        return result;
      });
    console.log(before, after);
  }, [enddate]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <BoardBar>
          <Styled.Title>대시보드</Styled.Title>
          <DatePickerComponent />
        </BoardBar>
        <Styled.Title>통합광고현황</Styled.Title>
        <div style={{ float: 'left' }}>
          {!!trendAvgList &&
            trendAvgList.map((el, idx) => {
              return <ItemCards key={idx} data={el} keyName={Object.keys(el)} />;
            })}
        </div>
        <ChartComponent />
      </div>
    </>
  );
};
export default DashBoard;
