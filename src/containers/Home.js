import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';
import ExpenseList from '../components/ExpenseList';
import DebtsSummary from '../components/DebtsSummary';
import NavbarMenu from '../components/NavbarMenu';
import { fetchExpenses, fetchPayoffs } from '../actions';
import { calculateDebts } from '../selectors';


class Home extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="L.A." iconElementLeft={<NavbarMenu />} />
          <RaisedButton label={<Link to="/expenses/new">Nuevo Gasto</Link>} primary={true} />
          <RaisedButton label={<Link to="/payoffs/new">Saldar Deuda</Link>} primary={true} />
          <DebtsSummary debts={this.props.debts} />
          <ExpenseList expenses={this.props.expenses} />
        </div>
      </MuiThemeProvider>
    );
  }

  componentDidMount() {
    this.props.fetchExpenses();
    this.props.fetchPayoffs();
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchExpenses: () => dispatch(fetchExpenses()),
    fetchPayoffs: () => dispatch(fetchPayoffs())
  }
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    payoffs: state.payoffs,
    debts: calculateDebts(state.expenses, state.payoffs)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
