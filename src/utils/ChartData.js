import { trendData } from '../constants/JsonFileList';
import { getData } from '../api/fetchData';

export const ChartData = async () => {
  const result = await getData(trendData);
  return result.report.daily;
};

export const FilteredChartData = async date => {
  const arr = await getData(trendData)
    .then(res => res.report.daily)
    .then(res => {
      return res.filter(el => el.date === date);
    });
  return arr[0];
};
