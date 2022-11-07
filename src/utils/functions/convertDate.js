export const convertTitleDate = dates => {
  const startDate = new Date(dates);
  const year = startDate.getFullYear();
  const month = startDate.getMonth() + 1;
  const date = startDate.getDate();
  const hours = startDate.getHours();
  const minutes = startDate.getMinutes();
  const seconds = startDate.getSeconds();
  return '' + year + month + date + hours + minutes + seconds;
};

export const convertAdDate = dates => {
  const startDate = new Date(dates);
  const year = startDate.getFullYear();
  const month = ('00' + (startDate.getMonth() + 1)).slice(-2);
  const date = ('00' + startDate.getDate()).slice(-2);
  return year + '-' + month + '-' + date;
};

export const convertDashDate = dates => {
  console.log(dates);
  // return dates.replace('-', '/');
};
