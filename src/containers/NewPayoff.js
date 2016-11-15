import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import DatePicker from 'material-ui/DatePicker';
import Card from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import NavbarMenu from '../components/NavbarMenu';


const participants = [
  { name: 'Felipe' },
  { name: 'José' },
  { name: 'Aswel' },
];


const NewPayoff = (props) => (
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
        <SelectField
          floatingLabelText="Quién"
        >
        {participants.map((participant, index) => (
          <MenuItem key={index} value={participant.name} primaryText={participant.name} />
        ))}
        </SelectField>
      </Card>
      <Card>
        <SelectField
          floatingLabelText="A Quién"
        >
        {participants.map((participant, index) => (
          <MenuItem key={index} value={participant.name} primaryText={participant.name} />
        ))}
        </SelectField>
      </Card>
      <Card>
        <TextField
          hintText="Ha pagado"
          type="number"
        />
      </Card>
      <RaisedButton label="Añadir" primary={true} />
    </div>
  </MuiThemeProvider>
);

export default NewPayoff;
