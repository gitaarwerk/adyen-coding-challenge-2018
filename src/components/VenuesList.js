import React from 'react';
import PropTypes from 'proptypes';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';

const VenuesList = ({ nearbyVenues, isLoading }) => (
  <div>
    {isLoading && (
      <div style={{ color: '#1b2b44', textAlign: 'center', padding: '16px 8px', width: '100%' }}>
        <p>Loading venues...</p>
        <CircularProgress style={{ display: 'inline-block' }} thickness={1} />
      </div>
    )}
    <List
      component="nav"
      subheader={
        <ListSubheader component="div" style={{ fontSize: '2.4rem', color: '#00112c' }}>
          Nearby venues
        </ListSubheader>
      }
    >
      {nearbyVenues.map(item => (
        <ListItem key={item.id} disableGutters={true}>
          <ListItem button>
            <ListItemIcon>
              <Avatar alt={item.icon.name} src={item.icon.url} />
            </ListItemIcon>
            <ListItemText inset primary={item.name} />
          </ListItem>
        </ListItem>
      ))}
    </List>
  </div>
);

VenuesList.propTypes = {
  nearbyVenues: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default VenuesList;
