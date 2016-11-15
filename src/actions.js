export const requestExpenses = () => {
  return {
    type: 'REQUEST_EXPENSES'
  };
};


export const receiveExpenses = (expenses) => {
  return {
    type: 'RECEIVE_EXPENSES',
    expenses
  };
};

export const requestPayoffs = () => {
  return {
    type: 'REQUEST_PAYOFFS'
  };
};


export const receivePayoffs = (payoffs) => {
  return {
    type: 'RECEIVE_PAYOFFS',
    payoffs
  };
};
