import React from 'react';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import PaperTitle from './PaperTitle';

const debts = [
  { name: 'Felipe', balance: -100.00 },
  { name: 'José', balance: -100.00 },
  { name: 'Aswel', balance: 200.00 },
];

const DebtsSummary = (props) => (
  <Paper>
    <PaperTitle text='Estado Cuentas' />
    <Table selectable={false} >
      <TableBody displayRowCheckbox={false} >
        {debts.map((debt, index) => (
          <TableRow key={index} >
            <TableRowColumn>{debt.name}</TableRowColumn>
            <TableRowColumn>{`${debt.balance} €`}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default DebtsSummary;
