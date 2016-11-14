import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import PaperTitle from './PaperTitle';


const ExpenseList = (props) => (
  <Paper>
    <PaperTitle text='Últimos Gastos' />
    <Table selectable={false} >
      <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
        <TableRow>
          <TableHeaderColumn>Fecha</TableHeaderColumn>
          <TableHeaderColumn>Concepto</TableHeaderColumn>
          <TableHeaderColumn>Importe</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false} >
        {props.expenses.map((expense, index) => (
          <TableRow key={index} >
            <TableRowColumn>{expense.date}</TableRowColumn>
            <TableRowColumn>{expense.description}</TableRowColumn>
            <TableRowColumn>{`${expense.amount} €`}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <Divider />
    <RaisedButton label="Más" primary={true} />
  </Paper>
);

export default ExpenseList;
