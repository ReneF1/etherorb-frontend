/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import appBar from '../components/HeaderBar/HeaderBar.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<appBar />, div);
});
