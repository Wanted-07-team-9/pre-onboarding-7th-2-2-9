export const convertAdStatusType = adType => {
  switch (adType) {
    case 'active':
      return '진행중';
    case 'ended':
      return '완료';
  }
  return 0;
};
