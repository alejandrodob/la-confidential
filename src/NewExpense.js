import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import Card from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import NavbarMenu from './NavbarMenu';


const participants = [
  { name: 'Felipe' },
  { name: 'José' },
  { name: 'Aswel' },
];

const ParticipantsPayment = (props) => (
  <div>
    <p>Participan:</p>
    {props.participants.map((participant, index) => (
      <Card key={index}>
        <Checkbox
          label={participant.name}
          labelPosition="left"
        />
        <TextField
          hintText="Ha pagado"
          type="number"
        />
      </Card>
    ))}
  </div>
);

const NewExpense = () => (
  <MuiThemeProvider>
    <div>
      <AppBar title="L.A." iconElementLeft={<NavbarMenu />} />
      <Card>
        <DatePicker
          hintText="Fecha"
          okLabel="OK"
          cancelLabel="Cancelar"
        />
      </Card>
      <Card>
        <TextField
          floatingLabelText="Concepto"
          type="text"
        />
      </Card>
      <ParticipantsPayment participants={participants} />
      <RaisedButton label="Añadir" primary={true} />
    </div>
  </MuiThemeProvider>
);

export default NewExpense;
