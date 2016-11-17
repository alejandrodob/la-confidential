import { combineReducers } from 'redux';
import {
  REQUEST_EXPENSES,
  REQUEST_PAYOFFS,
  REQUEST_PEOPLE,
  RECEIVE_EXPENSES,
  RECEIVE_PAYOFFS,
  RECEIVE_PEOPLE
} from './actions'

const initialExpenses = { fetching: false, list: [] };
const initialPayoffs = { fetching: false, list: [] };
const initialPeople = { fetching: false, list: [] };

const expenses = (state=initialExpenses, action) => {
  switch (action.type) {
    case REQUEST_EXPENSES:
      return Object.assign({}, state, { fetching: true });
    case RECEIVE_EXPENSES:
      return { fetching: false, list: action.expenses };
    default:
      return state;
  }
};

const payoffs = (state=initialPayoffs, action) => {
  switch (action.type) {
    case REQUEST_PAYOFFS:
      return Object.assign({}, state, { fetching: true });
    case RECEIVE_PAYOFFS:
      return { fetching: false, list: action.payoffs };
    default:
      return state;
  }
};

const people = (state=initialPeople, action) => {
  switch (action.type) {
    case REQUEST_PEOPLE:
      return Object.assign({}, state, { fetching: true });
    case RECEIVE_PEOPLE:
      return { fetching: false, list: action.people };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  expenses,
  payoffs,
  people
});

export default rootReducer;
