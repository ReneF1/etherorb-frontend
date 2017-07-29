/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import store from '../store/index';
import Landingpage from '../pages/Landingpage/Landingpage.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider>
        <Landingpage />
      </MuiThemeProvider>
    </Provider>
        , div);
});
