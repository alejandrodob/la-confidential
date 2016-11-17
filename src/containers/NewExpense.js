import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import Card from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import NavbarMenu from '../components/NavbarMenu';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import { fetchPeople } from '../actions';


const ParticipantsPayment = (props) => {
  const spinner = (props.people.fetching) ?
    <CircularProgress style={{ left: '10%'}} /> :
    null;
  return (
    <Paper>
      {spinner}
      {props.people.list.map((participant, index) => (
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
    </Paper>
  );
};

class NewExpense extends Component {
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
            <TextField
              floatingLabelText="Concepto"
              type="text"
            />
          </Card>
          <ParticipantsPayment people={this.props.people} />
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

export default connect(mapStateToProps, mapDispatchToProps)(NewExpense);
