export const calculateDebts = (expenses, payoffs) => {
  return {
    list: [
      { name: 'Felipe', balance: -100.00 },
      { name: 'José', balance: -100.00 },
      { name: 'Aswel', balance: 200.00 },
    ],
    fetching: expenses.fetching || payoffs.fetching
  }
};
