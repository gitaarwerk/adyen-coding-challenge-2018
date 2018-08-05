import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App location={{ longitude: 0, langitude: 0 }} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
