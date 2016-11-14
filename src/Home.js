import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import ExpenseList from './ExpenseList';
import DebtsSummary from './DebtsSummary';
import NavbarMenu from './NavbarMenu';


const debts = [
  { name: 'Felipe', balance: -100.00 },
  { name: 'José', balance: -100.00 },
  { name: 'Aswel', balance: 200.00 },
];

const expenses = [
  { date: '01/05/2016', description: 'Papel higiénico', amount: 2.75 },
  { date: '10/04/2016', description: 'Limones, café', amount: 3.55 },
  { date: '12/03/2016', description: 'Bolsas basura', amount: 1.85 },
  { date: '27/01/2016', description: 'Cervezas', amount: 6.75 },
];

const Home = () => (
  <MuiThemeProvider>
    <div>
      <AppBar title="L.A." iconElementLeft={<NavbarMenu />} />
      <RaisedButton label="Nuevo Gasto" primary={true} />
      <DebtsSummary debts={debts} />
      <ExpenseList expenses={expenses} />
    </div>
  </MuiThemeProvider>
);

export default Home;
