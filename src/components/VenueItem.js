import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import CardMedia from '@material-ui/core/CardMedia';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import DirectionsIcon from '@material-ui/icons/Directions';

const appBarStyling = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  background:
    'rgba(10,191,82,1) linear-gradient(45deg, rgba(10,191,82,1) 0%, rgba(106,208,155,1) 100%)'
};

const VenueItem = ({ isOpen, handleClose, venueItem }) => (
  <Dialog fullScreen open={isOpen} onClose={handleClose} style={{ paddingTop: '56px' }}>
    <AppBar style={appBarStyling}>
      <Toolbar>
        <IconButton color="inherit" onClick={handleClose} aria-label="Close">
          <CloseIcon />
        </IconButton>
        <Typography variant="title" color="inherit">
          {venueItem.name}
        </Typography>
      </Toolbar>
    </AppBar>
    {venueItem.photo && (
      <CardMedia
        style={{ height: '50vh', backgroundSize: 'cover', backgroundPosition: '50% 50%' }}
        image={venueItem.photo}
        title={`Photo of ${venueItem.name}`}
      />
    )}
    <List>
      {venueItem.likes > 0 && (
        <div>
          <ListItem>Likes: {venueItem.likes}</ListItem>
          <Divider />
        </div>
      )}
      {venueItem.price > 0 && (
        <div>
          <ListItem>Price: {venueItem.likes}</ListItem>
          <Divider />
        </div>
      )}
      {venueItem.location && (
        <ListItem button>
          <a
            href={`https://www.google.com/maps/dir/?api=1&query${venueItem.location.latitude},${
              venueItem.location.longitude
            }
`}
            style={{ color: '#666', textDecoration: 'none' }}
          >
            <IconButton color="inherit">
              <DirectionsIcon />
            </IconButton>{' '}
            Navigate here
          </a>
        </ListItem>
      )}
    </List>
  </Dialog>
);

export default VenueItem;
