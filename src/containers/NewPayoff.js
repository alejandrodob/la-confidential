import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import DatePicker from 'material-ui/DatePicker';
import Card from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import NavbarMenu from '../components/NavbarMenu';
import { fetchPeople } from '../actions';


class NewPayoff extends Component {
  render() {
    return (
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
            {this.props.people.list.map((participant, index) => (
              <MenuItem key={index} value={participant.name} primaryText={participant.name} />
            ))}
            </SelectField>
          </Card>
          <Card>
            <SelectField
              floatingLabelText="A Quién"
            >
            {this.props.people.list.map((participant, index) => (
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
  }

  componentDidMount() {
    this.props.fetchPeople();
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPeople: () => dispatch(fetchPeople()),
  }
};

const mapStateToProps = (state) => {
  return {
    people: state.people,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPayoff);
