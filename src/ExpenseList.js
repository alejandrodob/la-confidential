import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import PaperTitle from './PaperTitle';


const ExpenseList = () => (
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
        <TableRow>
          <TableRowColumn>1/1/20016</TableRowColumn>
          <TableRowColumn>Papel higiénico</TableRowColumn>
          <TableRowColumn>2,34€</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>1/1/20016</TableRowColumn>
          <TableRowColumn>Papel higiénico</TableRowColumn>
          <TableRowColumn>2,34€</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>1/1/20016</TableRowColumn>
          <TableRowColumn>Papel higiénico</TableRowColumn>
          <TableRowColumn>2,34€</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>1/1/20016</TableRowColumn>
          <TableRowColumn>Papel higiénico</TableRowColumn>
          <TableRowColumn>2,34€</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
    <Divider />
    <RaisedButton label="Más" primary={true} />
  </Paper>
);

export default ExpenseList;
