import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

const CodeBlockTitle = (props) => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle text={props.text || ''} />
    </ToolbarGroup>
  </Toolbar>
);

export default CodeBlockTitle;
