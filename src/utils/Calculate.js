import { ChartData } from '../utils/ChartData';
export const getBeforeDate = startdate => {
  return ChartData().then(res => {
    let result = res.filter(el => {
      let time = Date.parse(el.date);
      if (time >= startdate - 1000 * 3600 * 24 * 3 && time < startdate) {
        return true;
      } else {
        return false;
      }
    });
    return result;
  });
};

export const getAfterDate = (startdate = '2022-02-01', enddate = '2022-02-03') => {
  return ChartData().then(res => {
    let result = res.filter(el => {
      let time = Date.parse(el.date);
      if (time <= enddate && time >= startdate) {
        return true;
      } else {
        return false;
      }
    });
    return result;
  });
};

export const getAverage = arr => {
  let roasArr = arr.map(el => el.roas);
  let costArr = arr.map(el => el.cost);
  let clickArr = arr.map(el => el.click);
  let convArr = arr.map(el => el.conv);
  let impArr = arr.map(el => el.imp);
  let convValueArr = arr.map(el => el.convValue);

  const roasSum = roasArr.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  const roas = Math.round(roasSum / roasArr.length);

  const costSum = costArr.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  const cost = Math.round(costSum / costArr.length);

  const clickSum = clickArr.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  const click = Math.round(clickSum / clickArr.length);

  const convSum = convArr.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  const conv = Math.round(convSum / convArr.length);

  const impSum = impArr.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  const imp = Math.round(impSum / impArr.length);

  const convValueSum = convValueArr.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  const convValue = Math.round(convValueSum / convValueArr.length);

  return [{ roas }, { cost }, { click }, { conv }, { imp }, { convValue }];
};
