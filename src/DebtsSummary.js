import React from 'react';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import PaperTitle from './PaperTitle';

const DebtsSummary = (props) => (
  <Paper>
    <PaperTitle text='Estado Cuentas' />
    <Table selectable={false} >
      <TableBody displayRowCheckbox={false} >
        {props.debts.map((debt, index) => (
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
