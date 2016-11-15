import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './Home';
import NewExpense from './NewExpense';
import NewPayoff from './NewPayoff';


const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/expenses/new" component={NewExpense}/>
    <Route path="/payoffs/new" component={NewPayoff}/>
  </Router>
);

export default Routes;
