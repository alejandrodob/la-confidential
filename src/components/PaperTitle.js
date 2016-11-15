import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

const PaperTitle = (props) => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle text={props.text || ''} />
      {props.children}
    </ToolbarGroup>
  </Toolbar>
);

export default PaperTitle;
