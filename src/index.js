import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
