import React from 'react';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';
import PaperTitle from './PaperTitle';

const DebtsSummary = (props) => {
  const spinner = (props.debts.fetching) ?
    <CircularProgress style={{ left: '10%'}} /> :
    null;
  return (
    <Paper>
      <PaperTitle text='Estado Cuentas' >{spinner}</PaperTitle>
      <Table selectable={false} >
        <TableBody displayRowCheckbox={false} >
          {props.debts.list.map((debt, index) => (
            <TableRow key={index} >
              <TableRowColumn>{debt.name}</TableRowColumn>
              <TableRowColumn>{`${debt.balance} €`}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default DebtsSummary;
