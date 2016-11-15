import { combineReducers } from 'redux';

const initialExpenses = [];
const initialPayoffs = [];

const expenses = (state=initialExpenses, action) => {
  switch (action.type) {
      
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
