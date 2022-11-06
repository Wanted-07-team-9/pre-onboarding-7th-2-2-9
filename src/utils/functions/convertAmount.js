export const convertBudgetAmount = amount => {
  return amount / 10000 + '만원';
};

export const convertCostAmount = amount => {
  return Math.ceil(amount / 10000).toLocaleString('ko-KR') + '만원';
};
