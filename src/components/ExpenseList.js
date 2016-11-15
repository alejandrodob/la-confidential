import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import CircularProgress from 'material-ui/CircularProgress';
import PaperTitle from './PaperTitle';

const ExpensesTable = (props) => {
  if (props.expenses.list.length === 0) return null;
  return (
    <Table selectable={false} >
      <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
        <TableRow>
          <TableHeaderColumn>Fecha</TableHeaderColumn>
          <TableHeaderColumn>Concepto</TableHeaderColumn>
          <TableHeaderColumn>Importe</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false} >
        {props.expenses.list.map((expense, index) => (
          <TableRow key={index} >
            <TableRowColumn>{expense.date}</TableRowColumn>
            <TableRowColumn>{expense.description}</TableRowColumn>
            <TableRowColumn>{`${expense.amount} €`}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}


const ExpenseList = (props) => {
  const spinner = (props.expenses.fetching) ?
    <CircularProgress style={{ left: '10%'}} /> :
    null;
  return (
    <Paper>
      <PaperTitle text='Últimos Gastos'>{spinner}</PaperTitle>
      <ExpensesTable expenses={props.expenses} />
      <Divider />
      <RaisedButton label="Más" primary={true} />
    </Paper>
  );
};

export default ExpenseList;
