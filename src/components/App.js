import React from 'react';
import SimpleAppBar from './SimpleAppBar';

import '../App.css';

const App = ({ location }) => (
  <div>
    <SimpleAppBar />
    <h1>
      Current location:{' '}
      {location.latitude &&
        location.longitude && (
          <div>
            lat: {location.latitude}, long: {location.longitude}
          </div>
        )}
    </h1>
    <div>Bootstrapped Adyen coding challenge app</div>
  </div>
);
export default App;
