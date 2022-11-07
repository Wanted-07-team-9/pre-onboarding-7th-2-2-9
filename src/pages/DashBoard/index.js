import React, { useEffect, useState } from 'react';
import { trendData } from '../../constants/JsonFileList';
import { ChartData } from '../../utils/ChartData';
import Rechart from '../../components/Chart/Rechart';
import ItemCards from '../../components/DashBoard/ItemCards';
import DatePickerComponent from '../../utils/DatePicker';
import BoardBar from '../../components/Headers/BoardBar/BoardBar';
import { useSelector } from 'react-redux';
import { getBeforeDate, getAfterDate, getAverage } from '../../utils/Calculate';

const DashBoard = () => {
  const { startdate, enddate } = useSelector(state => state.dateReducer);
  console.log(startdate, enddate);
  const [trendDataList, setTrendDataList] = useState();
  const [trendAvgList, setTrendAvgeList] = useState();

  useEffect(() => {
    ChartData().then(res => {
      setTrendDataList(res);
      console.log(res, trendDataList);
    });
    const before = getBeforeDate(startdate).then(res => {
      getAverage(res);
      //setTrendBeforeList(res);
    });
    getAfterDate(startdate, enddate).then(res => {
      getAverage(res);
      setTrendAvgeList(res);
    });
    console.log(before);
  }, [trendData, startdate, enddate]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <BoardBar>
          <h2>대시보드</h2>
          <DatePickerComponent />
        </BoardBar>
        <div>통합광고현황</div>
        {(!!startdate || !!enddate) &&
          trendAvgList.map((el, idx) => {
            return <ItemCards key={idx} el={el} />;
          })}
        {!!trendDataList && <Rechart data={trendDataList} />}
      </div>
    </>
  );
};
export default DashBoard;
