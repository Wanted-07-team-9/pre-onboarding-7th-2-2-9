import Rechart from '../Chart/Rechart';
import { trendData } from '../../constants/JsonFileList';
import { useEffect, useState } from 'react';
import { ChartData } from '../../utils/ChartData';

const ChartComponent = () => {
  const [trendDataList, setTrendDataList] = useState();
  useEffect(() => {
    ChartData().then(res => {
      setTrendDataList(res);
    });
  }, [trendData]);

  return <>{!!trendDataList && <Rechart data={trendDataList} />}</>;
};
export default ChartComponent;
