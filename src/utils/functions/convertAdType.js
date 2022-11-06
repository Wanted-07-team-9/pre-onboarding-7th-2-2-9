export const convertAdType = adType => {
  switch (adType) {
    case 'web':
      return '웹광고';
    case 'app':
      return '앱광고';
  }
  return 0;
};
