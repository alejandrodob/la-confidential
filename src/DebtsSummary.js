import React from 'react';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import PaperTitle from './PaperTitle';

const DebtsSummary = (props) => (
  <Paper>
    <PaperTitle text='Estado Cuentas' />
    <Table selectable={false} >
      <TableBody displayRowCheckbox={false} >
        <TableRow>
          <TableRowColumn>Felipe</TableRowColumn>
          <TableRowColumn>Debe: 100€</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>José</TableRowColumn>
          <TableRowColumn>Debe: 100€</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Aswel</TableRowColumn>
          <TableRowColumn>Le deben: 200€</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  </Paper>
);

export default DebtsSummary;
