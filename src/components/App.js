import React from 'react';
import SimpleAppBar from './SimpleAppBar';

import '../App.css';
import VenuesListContainer from '../containers/VenuesListContainer';

const App = ({ location }) => (
  <div style={{ paddingTop: '48px' }}>
    <SimpleAppBar />
    <VenuesListContainer />
  </div>
);
export default App;
