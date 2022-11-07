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

export const getAfterDate = (startdate, enddate) => {
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
  let roas = arr.map(el => el.roas);
  let cost = arr.map(el => el.cost);
  let click = arr.map(el => el.click);
  let conv = arr.map(el => el.conv);
  let imp = arr.map(el => el.imp);
  let rev = arr.map(el => {
    return (el.roas * el.cost) / 100;
  });

  const roasSum = roas.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  const roasAverage = roasSum / roas.length;

  const costSum = cost.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  const costAverage = costSum / cost.length;

  const clickSum = click.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  const clickAverage = clickSum / click.length;

  const convSum = conv.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  const convAverage = convSum / conv.length;

  const impSum = imp.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  const impAverage = impSum / imp.length;

  const revSum = rev.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  const revAverage = revSum / rev.length;

  return [
    { roasAverage },
    { costAverage },
    { clickAverage },
    { convAverage },
    { impAverage },
    { revAverage },
  ];
};
