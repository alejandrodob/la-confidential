import { getExpenses, getPayoffs } from './api';

export const REQUEST_EXPENSES = 'REQUEST_EXPENSES';
export const REQUEST_PAYOFFS = 'REQUEST_PAYOFFS';
export const RECEIVE_EXPENSES = 'RECEIVE_EXPENSES';
export const RECEIVE_PAYOFFS = 'RECEIVE_PAYOFFS';

const requestExpenses = () => {
  return {
    type: REQUEST_EXPENSES
  };
};

const receiveExpenses = (expenses) => {
  return {
    type: RECEIVE_EXPENSES,
    expenses
  };
};

export const fetchExpenses = () => {
  return (dispatch) => {
    dispatch(requestExpenses())
    return getExpenses().then((expenses) => dispatch(receiveExpenses(expenses)));
  };
};

const requestPayoffs = () => {
  return {
    type: REQUEST_PAYOFFS
  };
};

const receivePayoffs = (payoffs) => {
  return {
    type: RECEIVE_PAYOFFS,
    payoffs
  };
};

export const fetchPayoffs = () => {
  return (dispatch) => {
    dispatch(requestPayoffs())
    return getPayoffs().then((payoffs) => dispatch(receivePayoffs(payoffs)));
  };
};
