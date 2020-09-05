import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import { ThemeProvider } from 'styled-components';

import App from './App';

import './index.css';

const theme = {
  blue: '#90caf9',
  lightBlue: '#a6d4fa',
  red: '#f44336',
  lightRed: '#e57373',
  green: '#4caf50',
  lightGreen: '#81c784',
  lightColor: '#fafafa',
  darkColor: '#121212',
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
