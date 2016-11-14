import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './Home';
import NewExpense from './NewExpense';


const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/expenses/new" component={NewExpense}/>
  </Router>
);

export default Routes;
