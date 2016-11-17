import { getExpenses, getPayoffs, getPeople } from './api';

export const REQUEST_EXPENSES = 'REQUEST_EXPENSES';
export const REQUEST_PAYOFFS = 'REQUEST_PAYOFFS';
export const RECEIVE_EXPENSES = 'RECEIVE_EXPENSES';
export const RECEIVE_PAYOFFS = 'RECEIVE_PAYOFFS';
export const REQUEST_PEOPLE = 'REQUEST_PEOPLE';
export const RECEIVE_PEOPLE = 'RECEIVE_PEOPLE';

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

const requestPeople = () => {
  return {
    type: REQUEST_PEOPLE
  };
};

const receivePeople = (people) => {
  return {
    type: RECEIVE_PEOPLE,
    people
  };
};

export const fetchPeople = () => {
  return (dispatch) => {
    dispatch(requestPeople())
    return getPeople().then((people) => dispatch(receivePeople(people)));
  };
};
