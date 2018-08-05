import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
