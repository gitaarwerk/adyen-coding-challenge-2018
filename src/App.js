import React, { Component } from 'react';
import SimpleAppBar from './components/SimpleAppBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <SimpleAppBar />
        <div>Bootstrapped Adyen coding challenge app</div>
      </div>
    );
  }
}

export default App;
