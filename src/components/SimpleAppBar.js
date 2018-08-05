import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const appBarStyling = {
  background:
    'rgba(10,191,82,1) linear-gradient(45deg, rgba(10,191,82,1) 0%, rgba(106,208,155,1) 100%)'
};

const SimpleAppBar = () => (
  <AppBar position="static" style={appBarStyling}>
    <Toolbar variant="dense">
      <IconButton color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="title" color="inherit">
        GoOut Adyen
      </Typography>
    </Toolbar>
  </AppBar>
);

export default SimpleAppBar;
