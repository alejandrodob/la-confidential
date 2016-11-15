import { combineReducers } from 'redux';
import {
  REQUEST_EXPENSES,
  REQUEST_PAYOFFS,
  RECEIVE_EXPENSES,
  RECEIVE_PAYOFFS
} from './actions'

const initialExpenses = { fetching: false, list: [] };
const initialPayoffs = { fetching: false, list: [] };

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
      
      default:
        return state;
    }
};

const rootReducer = combineReducers({
  expenses,
  payoffs
});

export default rootReducer;
