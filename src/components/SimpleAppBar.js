import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const appBarStyling = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  background:
    'rgba(10,191,82,1) linear-gradient(45deg, rgba(10,191,82,1) 0%, rgba(106,208,155,1) 100%)'
};

const SimpleAppBar = () => (
  <AppBar position="static" style={appBarStyling}>
    <Toolbar variant="dense">
      <Typography variant="title" color="inherit">
        GoOut Adyen
      </Typography>
    </Toolbar>
  </AppBar>
);

export default SimpleAppBar;
