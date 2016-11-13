import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ExpenseList from './ExpenseList';
import DebtsSummary from './DebtsSummary';

const Menu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

const Home = () => (
  <MuiThemeProvider>
    <div>
      <AppBar title="L.A." iconElementLeft={<Menu />} />
      <RaisedButton label="Nuevo Gasto" primary={true} />
      <DebtsSummary />
      <ExpenseList />
    </div>
  </MuiThemeProvider>
);

export default Home;
