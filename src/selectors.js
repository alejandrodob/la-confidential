const computeDebts = (expenses, payoffs) => {
  return [
    { name: 'Felipe', balance: -100.00 },
    { name: 'José', balance: -100.00 },
    { name: 'Aswel', balance: 200.00 },
  ];
};

export const calculateDebts = (expenses, payoffs) => {
  const fetching = expenses.fetching || payoffs.fetching;
  const list = fetching ? [] : computeDebts(expenses.list, payoffs.list);
  return {
    list,
    fetching
  }
};
